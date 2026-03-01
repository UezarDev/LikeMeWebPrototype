const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { getPosts, addPost } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Like Me API is running. Use /posts for data.');
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    console.error('Error getting posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/posts', async (req, res) => {
  const { titulo, url, descripcion } = req.body;
  
  if (!titulo || !url || !descripcion) {
    return res.status(400).json({ error: 'Title, URL, and description are required' });
  }

  try {
    const newPost = await addPost(titulo, url, descripcion);
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error adding post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
