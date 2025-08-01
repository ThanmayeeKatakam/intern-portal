// server/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const { internData, leaderboard } = require('./data');
// const internData = require('./data');

const app = express();
const PORT = 3000;


app.use(cors()); // allow requests from frontend
app.use(express.json());

// Serve static files from public/
app.use(express.static(path.join(__dirname, '..', 'public')));

// Optional: redirect "/" to login.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});



app.get('/intern', (req, res) => {
  res.json(internData);
});

app.get('/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
