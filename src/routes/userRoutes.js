const app = require('./app-express.js')

const { User } = require('../models/index.js');

app.get('/', (req, res) => {
    res.send('Olá, mundo')
})
app.get('/v1/User', (request, res) => {
    console.log('request.url', request.url) // debug
    User.findAll().then((result) => res.send(result))
})


app.get('/v1/User/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.params.id', request.params.id)

    User.findOne({ where: { id: request.params.id } })
        .then((result) => res.send(result))
})


app.post('/v1/User/', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.body', request.body)

    User.create(request.body).then((result) => res.status(201).send(result))
})


app.put('/v1/User/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.body', request.body)
    User.update(request.body, { where: { id: request.params.id } }).then((result) => res.send(result))
})

app.delete('/v1/User/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    User.destroy({ where: { id: request.params.id } }).then((result) => {
        res.send('deletei com sucesso essa quantidade de linhas: '+result)
    })
})
