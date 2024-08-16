// src/models/ProductCategory.js
const { Sequelize, DataTypes } = require('sequelize');
const { uri } = require('../config/database.js');
const sequelize = new Sequelize(uri);
const Product = require('./Product');
const Category = require('./Category');

const ProductCategory = sequelize.define('ProductCategory', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  timestamps: true,
});

sequelize.sync()

module.exports = {ProductCategory};
