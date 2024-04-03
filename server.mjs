import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Product from './src/models/Product.mjs'; // Adjust the path as necessary

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/longevityMarketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// Fetch all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
});

// Fetch a single product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product details", error: error.message });
  }
});

// Placeholder for user authentication routes
// TODO: Implement user authentication (login, registration)

// Placeholder for CRUD operations for Admin
// TODO: Implement Create, Update, Delete operations for products

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
