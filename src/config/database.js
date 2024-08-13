require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const { Client } = require('pg'); // Certifique-se de que o pacote 'pg' está instalado

// Adiciona logs para depuração
console.log('USUARIO:', process.env.USUARIO);
console.log('SENHA:', process.env.SENHA);
console.log('HOST:', process.env.HOST);
console.log('PORT:', process.env.PORT);
console.log('DATABASE:', process.env.DATABASE);

const { USUARIO, SENHA, HOST, PORT, DATABASE } = process.env; // Lê as variáveis de ambiente

if (!USUARIO || !SENHA || !HOST || !PORT || !DATABASE) {
  throw new Error('Por favor, verifique se todas as variáveis de ambiente estão definidas.');
}

const uri = `postgresql://${USUARIO}:${SENHA}@${HOST}:${PORT}/${DATABASE}`;

const client = new Client({
  connectionString: uri,
});

client.connect()
  .then(() => console.log('Conectado ao banco de dados com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao banco de dados', err.stack));

module.exports = {client, uri};
