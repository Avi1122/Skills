function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  }
  res.redirect('/login');
}

// Protect dashboard routes.
app.get('/client-dashboard', isAuthenticated, (req, res) => {
  res.sendFile(__dirname + '/client-dashboard.html');
});

app.get('/freelancer-dashboard', isAuthenticated, (req, res) => {
  res.sendFile(__dirname + '/freelancer-dashboard.html');
});
