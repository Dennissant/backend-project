// Importa a configuração do banco de dados, especificamente a URI de conexão
const { uri } = require('../config/database.js');

// Importa o Sequelize e tipos de dados do Sequelize necessários
const { Sequelize, DataTypes, QueryTypes } = require('sequelize');

// Cria uma nova instância do Sequelize usando a URI de conexão do banco de dados

const sequelize = new Sequelize(uri);


// Define o modelo para a tabela 'User'
const User = sequelize.define(
    'User', // Nome do modelo
    {
        firstname: {
            type: DataTypes.STRING, // Tipo de dado STRING
            allowNull: false, // Não permite valores nulos
        },
        surname: {
            type: DataTypes.STRING, // Tipo de dado STRING
            allowNull: true // Permite valores nulos
        },
        email: {
            type: DataTypes.STRING, // Tipo de dado STRING
            allowNull: false, // Não permite valores nulos
            unique: true // Garante que o valor do email seja único
        },
        password: {
            type: DataTypes.STRING, // Tipo de dado STRING
            allowNull: false // Não permite valores nulos
        }
    },
    {
        timestamps: true // Gera colunas created_at e updated_at automaticamente
    },
);

// Define o modelo para a tabela 'Category'
const Category = sequelize.define(
    'Category', // Nome do modelo
    {
        name: {
            type: DataTypes.STRING, // Tipo de dado STRING
            allowNull: false, // Não permite valores nulos
        },
        slug: {
            type: DataTypes.STRING, // Tipo de dado STRING
            allowNull: false // Não permite valores nulos
        },
        use_in_menu: {
            type: DataTypes.BOOLEAN, // Tipo de dado BOOLEAN
            allowNull: false, // Não permite valores nulos
            defaultValue: false // Valor padrão é false
        },
    },
    {
        timestamps: true // Gera colunas created_at e updated_at automaticamente
    },
);

// Define o modelo para a tabela 'Product'
const Product = sequelize.define(
    'Product', // Nome do modelo
    {
        id: {
            type: DataTypes.INTEGER, // Tipo de dado INTEGER
            primaryKey: true, // Define a coluna como chave primária
            autoIncrement: true, // Incrementa o valor automaticamente
        },
        enabled: {
            type: DataTypes.BOOLEAN, // Tipo de dado BOOLEAN
            allowNull: true, // Permite valores nulos
            defaultValue: false, // Valor padrão é false
        },
        name: {
            type: DataTypes.STRING, // Tipo de dado STRING
            allowNull: false, // Não permite valores nulos
        },
        slug: {
            type: DataTypes.STRING, // Tipo de dado STRING
            allowNull: false, // Não permite valores nulos
        },
        use_in_menu: {
            type: DataTypes.BOOLEAN, // Tipo de dado BOOLEAN
            allowNull: true, // Permite valores nulos
            defaultValue: false, // Valor padrão é false
        },
        stock: {
            type: DataTypes.INTEGER, // Tipo de dado INTEGER
            allowNull: true, // Permite valores nulos
            defaultValue: 0, // Valor padrão é 0
        },
        description: {
            type: DataTypes.STRING, // Tipo de dado STRING
            allowNull: true, // Permite valores nulos
        },
        price: {
            type: DataTypes.FLOAT, // Tipo de dado FLOAT
            allowNull: false, // Não permite valores nulos
        },
        price_with_discount: {
            type: DataTypes.FLOAT, // Tipo de dado FLOAT
            allowNull: false, // Não permite valores nulos
        },
    },
    {
        timestamps: true // Gera colunas created_at e updated_at automaticamente
    },
);

// Define o modelo para a tabela 'ProductImage'
const ProductImage = sequelize.define(
    'ProductImage', // Nome do modelo
    {
        id: {
            type: DataTypes.INTEGER, // Tipo de dado INTEGER
            primaryKey: true, // Define a coluna como chave primária
            autoIncrement: true, // Incrementa o valor automaticamente
        },
        product_id: {
            type: DataTypes.INTEGER, // Tipo de dado INTEGER
            allowNull: false, // Não permite valores nulos
            references: {
                model: 'Products', // Referência à tabela de produtos
                key: 'id', // Chave primária na tabela de produtos
            },
            onUpdate: 'CASCADE', // Atualiza o valor se mudar na tabela de produtos
            onDelete: 'CASCADE', // Remove o registro se o produto for removido
        },
        enabled: {
            type: DataTypes.BOOLEAN, // Tipo de dado BOOLEAN
            allowNull: true, // Permite valores nulos
            defaultValue: false, // Valor padrão é false
        },
        path: {
            type: DataTypes.STRING, // Tipo de dado STRING
            allowNull: false, // Não permite valores nulos
        },
    },
    {
        timestamps: true // Gera colunas created_at e updated_at automaticamente
    },
);

// Define o modelo para a tabela 'ProductOption'
const ProductOption = sequelize.define(
    'ProductOption', // Nome do modelo
    {
        id: {
            type: DataTypes.INTEGER, // Tipo de dado INTEGER
            primaryKey: true, // Define a coluna como chave primária
            autoIncrement: true, // Incrementa o valor automaticamente
        },
        product_id: {
            type: DataTypes.INTEGER, // Tipo de dado INTEGER
            allowNull: false, // Não permite valores nulos
            references: {
                model: 'Products', // Referência à tabela de produtos
                key: 'id', // Chave primária na tabela de produtos
            },
            onUpdate: 'CASCADE', // Atualiza o valor se mudar na tabela de produtos
            onDelete: 'CASCADE', // Remove o registro se o produto for removido
        },
        title: {
            type: DataTypes.STRING, // Tipo de dado STRING
            allowNull: false, // Não permite valores nulos
        },
        shape: {
            type: DataTypes.ENUM('square', 'circle'), // Tipo de dado ENUM com valores possíveis
            allowNull: true, // Permite valores nulos
            defaultValue: 'square', // Valor padrão é 'square'
        },
        radius: {
            type: DataTypes.INTEGER, // Tipo de dado INTEGER
            allowNull: true, // Permite valores nulos
            defaultValue: 0, // Valor padrão é 0
        },
        type: {
            type: DataTypes.ENUM('text', 'color'), // Tipo de dado ENUM com valores possíveis
            allowNull: true, // Permite valores nulos
            defaultValue: 'text', // Valor padrão é 'text'
        },
        values: {
            type: DataTypes.STRING, // Tipo de dado STRING
            allowNull: false, // Não permite valores nulos
        },
    },
    {
        timestamps: true // Gera colunas created_at e updated_at automaticamente
    },
);

// Define o modelo para a tabela 'ProductCategory'
const ProductCategory = sequelize.define(
    'ProductCategory', // Nome do modelo
    {
        product_id: {
            type: DataTypes.INTEGER, // Tipo de dado INTEGER
            allowNull: false, // Não permite valores nulos
            references: {
                model: 'Products', // Referência à tabela de produtos
                key: 'id', // Chave primária na tabela de produtos
            },
            onUpdate: 'CASCADE', // Atualiza o valor se mudar na tabela de produtos
            onDelete: 'CASCADE', // Remove o registro se o produto for removido
        },
        category_id: {
            type: DataTypes.INTEGER, // Tipo de dado INTEGER
            allowNull: false, // Não permite valores nulos
            references: {
                model: 'Categories', // Referência à tabela de categorias
                key: 'id', // Chave primária na tabela de categorias
            },
            onUpdate: 'CASCADE', // Atualiza o valor se mudar na tabela de categorias
            onDelete: 'CASCADE', // Remove o registro se a categoria for removida
        },
    },
    {
        timestamps: false // Não gera colunas created_at e updated_at para esta tabela
    },
);

// Sincroniza todos os modelos com o banco de dados, criando as tabelas se não existirem
sequelize.sync();

// Exporta os modelos User e Category para que possam ser usados em outras partes da aplicação
module.exports = {
    User,
    Category,
    Product,
    ProductImage,
    ProductOption,
    ProductCategory,

}
