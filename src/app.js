const app = require('./routes/app-express')
const PORT = 10000

require('dotenv').config()
require('./routes/UserRoutes')
require('./routes/productRoutes')
require('./routes/categoryRoutes')

app.listen(PORT, ()=> { console.log('Tào Toma')})