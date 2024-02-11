// models/Product.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    detailsUrl: String
});

export default mongoose.model('Product', productSchema);
