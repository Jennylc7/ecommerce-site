const { Product } = require('../models');

const productData = [
  {
    product_name: 'Tank Top',
    price: 15.00,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'Pilates pants',
    price: 25.00,
    stock: 15,
    category_id: 5,
  },
  {
    product_name: 'plaid skirt',
    price: 30.00,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: 'apple dress',
    price: 60.00,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: 'bracelet',
    price: 14.00,
    stock: 20,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
