const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./db');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// BRUTE FORCE DEFENSE: Rate Limiting
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 login attempts per window
    message: "Too many login attempts, please try again after 15 minutes",
    standardHeaders: true,
    legacyHeaders: false,
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// VULNERABLE LOGIN ROUTE (SQL Injection) -> Now secured with Prepared Statements
// Added rate limit to prevent Brute Force
app.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;

    // SECURE CODE: Using Prepared Statements (Parameterized Queries)
    const query = 'SELECT * FROM users WHERE username = $1 AND password = $2';

    console.log(`Executing secure query with parameters: [${username}, ****]`);

    try {
        const result = await db.query(query, [username, password]);
        const user = result.rows[0];

        if (user) {
            req.session.user = user.username;
            req.session.fullName = user.full_name;
            res.redirect('/home');
        } else {
            res.send("Invalid credentials. <a href='/login'>Try again</a>");
        }
    } catch (err) {
        res.status(500).send(`Database Error: ${err.message}`);
    }
});

app.get('/home', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    // VULNERABLE TO XSS: <%- ... %> in home.ejs will render this as raw HTML
    res.render('home', { fullName: req.session.fullName || 'User' });
});

app.get('/profile', (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    res.render('profile', { fullName: req.session.fullName });
});

app.post('/profile', async (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    const { newName } = req.body;

    try {
        // Update database with the new name (no sanitization!)
        await db.query('UPDATE users SET full_name = $1 WHERE username = $2', [newName, req.session.user]);
        req.session.fullName = newName; // Update session
        res.redirect('/home');
    } catch (err) {
        res.status(500).send("Update failed");
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
