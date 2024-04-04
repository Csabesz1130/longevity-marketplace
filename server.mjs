import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Product from './src/models/Product.mjs';

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/longevityMarketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// Enhanced to include search functionality
app.get('/api/products', async (req, res) => {
  const searchQuery = req.query.search;
  let query = {};

  if (searchQuery) {
    query = { $or: [{ name: { $regex: searchQuery, $options: 'i' } }, { description: { $regex: searchQuery, $options: 'i' } }] };
  }

  try {
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
