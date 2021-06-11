const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'workout',
  },
  {
    tag_name: 'aqua',
  },
  {
    tag_name: 'georgia',
  },
  {
    tag_name: 'lemon',
  },
  {
    tag_name: 'sparkle',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'lavendar',
  },
  {
    tag_name: 'indigo',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
