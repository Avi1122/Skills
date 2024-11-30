app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find the user in the database.
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    req.session.user = user;
    if (user.role === 'client') {
      res.redirect('/client-dashboard');
    } else if (user.role === 'freelancer') {
      res.redirect('/freelancer-dashboard');
    }
  } else {
    res.status(401).send('Invalid credentials');
  }
});
