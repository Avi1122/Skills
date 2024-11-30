const projects = []; // Temporary in-memory storage for projects.

app.post('/post-project', isAuthenticated, (req, res) => {
  const { projectName, budget } = req.body;
  const project = { name: projectName, budget, postedBy: req.session.user.email };
  projects.push(project);
  res.redirect('/client-dashboard');
});
