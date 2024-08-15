// src/config/database.js
const { Sequelize } = require('sequelize');

// Configuração do banco de dados (substitua com suas credenciais)
const uri = `postgres://${process.env.USUARIO}:${process.env.SENHA}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`;

const sequelize = new Sequelize(uri, {
  dialect: 'postgres',
  logging: console.log, // Opcional: Adiciona logs de consultas SQL
});

module.exports = { sequelize };
