const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Product = require('./models/Product'); // Corrected path to Product model

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB once
mongoose.connect('mongodb://localhost/longevityMarketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// Single route handler
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
