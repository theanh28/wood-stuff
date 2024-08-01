const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const products = require('./data/products.json');
const productTypes = require('./data/product-types.json');

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

app.get('/api/product-types', (req, res) => {
  res.json(productTypes);
});

app.get('/api/product-types/:typeId', (req, res) => {
  const typeId = parseInt(req.params.typeId);
  const productsOfType = products.filter(p => p.tags.includes(typeId));
  res.json(productsOfType);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
