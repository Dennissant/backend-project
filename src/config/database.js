// Configuração do banco de dados (substitua com suas credenciais)
const uri = `postgres://${process.env.USUARIO}:${process.env.SENHA}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`;

module.exports = { uri };
