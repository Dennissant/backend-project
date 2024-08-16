// src/models/Category.js
const { Sequelize, DataTypes } = require('sequelize');
const { uri } = require('../config/database.js');
const sequelize = new Sequelize(uri);

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  use_in_menu: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  timestamps: true,
});

sequelize.sync()

module.exports = {Category};
