const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Tops',
  },
  {
    category_name: 'exercise',
  },
  {
    category_name: 'skirts',
  },
  {
    category_name: 'dresses',
  },
  {
    category_name: 'accessories',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
