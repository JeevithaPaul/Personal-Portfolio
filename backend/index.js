// server.js

require("dotenv").config();

// server.js

require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors")


const app = express();
app.use(cors())

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
const connectDB = mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 30000,
})
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
    throw err;
  });

app.use(async (req, res, next) => {
  try {
    await connectDB;
    next();
  } catch (error) {
    res.status(500).json({
      message: "Database connection failed"
    });
  }
});


// Define Schema
const blogSchema = new mongoose.Schema({
  newTitle: String,
  newContent: String,
  date: String,
  likes: Number
});

const Blog = mongoose.model('Blog', blogSchema);

// Routes
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    console.log(blogs)
    res.send(blogs)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.patch('/api/blogs/like/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Increment the likes of the blog post
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true } // This option returns the modified document rather than the original
    );

    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.post('/api/blogs', async (req, res) => {

  const blog = new Blog({
    newTitle: req.body.newTitle,
    newContent: req.body.newContent,
    date: req.body.date,
    likes: req.body.likes
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
