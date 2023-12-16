const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/pokemonApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from 'public' folder

// Routes
app.get('/', (req, res) => {
  res.render('login'); // Render login or register form
});

app.get('/dashboard', (req, res) => {
  // Fetch user's favorites from database and render dashboard with favorites data
  const username = 'User'; // Replace with logged-in user's username
  const favorites = []; // Replace with user's favorite Pokémon fetched from MongoDB
  res.render('dashboard', { username, favorites });
});

// Example POST route for handling login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Check credentials and authenticate user (not implemented in this example)
  // If authenticated, redirect to dashboard
  res.redirect('/dashboard');
});

// Example route to handle adding to favorites (using AJAX)
app.post('/add-to-favorites', (req, res) => {
  // Handle adding Pokémon to favorites list in MongoDB (not implemented in this example)
  // Respond with success or failure status
  res.json({ success: true }); // Example response
});

// Example route to handle deleting from favorites (using AJAX)
app.delete('/delete-from-favorites/:id', (req, res) => {
  const favoriteId = req.params.id;
  // Handle deleting Pokémon from favorites list in MongoDB (not implemented in this example)
  // Respond with success or failure status
  res.json({ success: true }); // Example response
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
