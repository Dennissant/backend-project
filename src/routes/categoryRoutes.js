const app = require('./app-express.js')

const { cartegory, Cartegory } = require('../models/models.js');

app.get('/', (req, res) => {
    res.send('Olá, mundo')
})

app.get('/v1/cartegory/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.params.id', request.params.id)

    Cartegory.findOne({ where: { id: request.params.id } })
        .then((result) => res.send(result))
})

app.get('/v1/cartegory/', (request, res) => {
    console.log('request.url', request.url) // debug
    Cartegory.findAll()
        .then((result) => res.send(result))
})

app.post('/v1/cartegory', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.body', request.body)

    Cartegory.create(request.body).then((result) => res.status(201).send(result))
})


app.put('/v1/cartegory/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.body', request.body)
    Cartegory.update(request.body, { where: { id: request.params.id } }).then((result) => res.send(result))
})

app.delete('/v1/cartegory/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    cartegory.destroy({ where: { id: request.params.id } }).then((result) => {
        res.send('deletei com sucesso essa quantidade de linhas: '+result)
    })
})
