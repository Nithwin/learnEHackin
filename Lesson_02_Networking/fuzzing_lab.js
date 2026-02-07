const express = require('express');
const app = express();
const PORT = 8000;

// Standard Page
app.get('/', (req, res) => res.send('Welcome to our Secure Site! Nothing to see here.'));

// HIDDEN PATHS (Targets for Fuzzing)
app.get('/admin', (req, res) => res.send('WELCOME TO THE SECRET ADMIN PANEL! (You found it!)'));
app.get('/config.php.bak', (req, res) => res.send('DB_USER=root\nDB_PASS=123hacked\n(Source code leakage!)'));
app.get('/.env', (req, res) => res.send('PRIVATE_KEY=abf823...'));

app.listen(PORT, () => console.log('Fuzzing Lab is running on http://localhost:8000'));
