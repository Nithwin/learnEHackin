const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Welcome! Please use the official "SecureBox-Browser" to access the vault.');
});

// A route that checks the 'User-Agent' header
app.get('/vault', (req, res) => {
    const userAgent = req.headers['user-agent'];

    if (userAgent && userAgent.includes('SecureBox-Browser')) {
        res.send('ACCESS GRANTED: Welcome to the Secure Vault. Flag: {H3ader_M4nipulat1on_Succ3ss}');
    } else {
        res.status(403).send('ACCESS DENIED: You are using "' + userAgent + '". Only "SecureBox-Browser" is allowed for security reasons.');
    }
});

// A route that checks for a custom 'Admin-Key' header
app.get('/admin-panel', (req, res) => {
    if (req.headers['x-admin-key'] === 'super-secret-123') {
        res.send('ADMIN ACCESS GRANTED: You are now in the root console.');
    } else {
        res.status(401).send('UNAUTHORIZED: Missing or invalid "X-Admin-Key" header.');
    }
});

app.listen(PORT, () => console.log('Headers Lab is running on http://localhost:8000'));
