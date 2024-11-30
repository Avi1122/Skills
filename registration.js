const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret', saveUninitialized: true, resave: true }));

const users = []; // Temporary in-memory storage for users.

app.post('/register', (req, res) => {
  const { name, email, password, role } = req.body;

  // Save user details (replace this with a real database call).
  users.push({ name, email, password, role });
  res.redirect('/login');
});
