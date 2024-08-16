// src/models/ProductOption.js
const { Sequelize, DataTypes } = require('sequelize');
const { uri } = require('../config/database.js');
const sequelize = new Sequelize(uri);
const Product = require('./Product');

const ProductOption = sequelize.define('ProductOption', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shape: {
    type: DataTypes.ENUM('square', 'circle'),
    allowNull: true,
    defaultValue: 'square',
  },
  radius: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  type: {
    type: DataTypes.ENUM('text', 'color'),
    allowNull: true,
    defaultValue: 'text',
  },
  values: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

sequelize.sync()

module.exports = {ProductOption};
