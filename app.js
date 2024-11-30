const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware to parse POST request data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Dummy user data (You can replace this with a real database in the future)
const users = [
  { email: 'user@example.com', password: 'password123' }
];

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST request for login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if user exists and password matches
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    // If login is successful, redirect to the dashboard
    res.redirect('/dashboard');
  } else {
    // If login fails, send an error message
    res.send('Invalid login credentials. Please try again.');
  }
});

// Serve the dashboard page
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Serve the registration page (for demonstration purposes)
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
