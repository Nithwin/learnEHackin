const express = require('express');
const app = express();

// A fake 'Legacy API' running on port 9000
const legacyApp = express();
legacyApp.get('/', (req, res) => res.send('Legacy API v1.0.2 - Running...'));
legacyApp.listen(9000, () => console.log('Legacy API (Target 1) running on port 9000'));

// A fake 'Admin Panel' running on port 3000
const adminApp = express();
adminApp.get('/', (req, res) => res.send('Internal Admin Dashboard - Restricted Access'));
adminApp.listen(3000, () => console.log('Admin Dashboard (Target 2) running on port 3000'));

console.log('\n--- NETWORK RECON LAB IS LIVE ---');
console.log('Use Nmap to find these "hidden" services!');
