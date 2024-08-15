const express = require('express');
const app = express();
app.use(express.json()); // Adicione isso para o parser de JSON no body das requisições

const { Product } = require('../models/index'); // Corrigido: Importação única e sem '.js'

// Rota de teste
app.get('/', (req, res) => {
    res.send('Olá, mundo');
});

// Rota para obter um produto pelo ID
app.get('/v1/Product/:id', (req, res) => {
    console.log('request.url', req.url); // Debug
    console.log('request.params.id', req.params.id);

    Product.findOne({ where: { id: req.params.id } })
        .then((result) => res.send(result))
        .catch((error) => res.status(500).send(error.message));
});

// Rota para obter todos os produtos
app.get('/v1/Product/', (req, res) => {
    console.log('request.url', req.url); // Debug

    Product.findAll()
        .then((result) => res.send(result))
        .catch((error) => res.status(500).send(error.message));
});

// Rota para criar um novo produto
app.post('/v1/Product', (req, res) => {
    console.log('request.url', req.url); // Debug
    console.log('request.body', req.body);

    Product.create(req.body)
        .then((result) => res.status(201).send(result))
        .catch((error) => res.status(500).send(error.message));
});

// Rota para atualizar um produto existente
app.put('/v1/Product/:id', (req, res) => {
    console.log('request.url', req.url); // Debug
    console.log('request.body', req.body);

    Product.update(req.body, { where: { id: req.params.id } })
        .then((result) => res.send(result))
        .catch((error) => res.status(500).send(error.message));
});

// Rota para excluir um produto
app.delete('/v1/Product/:id', (req, res) => {
    console.log('request.url', req.url); // Debug

    Product.destroy({ where: { id: req.params.id } })
        .then((result) => res.send('Deletado com sucesso, quantidade de linhas afetadas: ' + result))
        .catch((error) => res.status(500).send(error.message));
});

module.exports = app;
