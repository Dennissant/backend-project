// src/models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const { uri } = require('../config/database.js');
const sequelize = new Sequelize(uri);

const User = sequelize.define('User', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

sequelize.sync()

module.exports = {User};
