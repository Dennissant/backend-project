const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const { sequelize } = require('./models'); // Importa o sequelize e os modelos

const app = express();
const port = 10000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rotas
app.use('/v1/User', userRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.send('Olá, mundo');
});

// Sincroniza o banco de dados e inicia o servidor
sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor ouvindo na porta ${port}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao sincronizar o banco de dados:', error);
    });
