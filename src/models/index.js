// src/models/index.js
const { sequelize } = require('../config/database');

// Importa os modelos definidos
const User = require('./User');
const Category = require('./Category');

// Exporta o sequelize e os modelos
module.exports = { sequelize, User, Category };
