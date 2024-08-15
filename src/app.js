require('dotenv').config()
require('./routes/UserRoutes')
require('./routes/productRoutes')

const app = require('./routes/app-express')
const PORT = 10000

app.listen(PORT, ()=> { console.log('Tào Toma')})