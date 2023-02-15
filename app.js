const express = require('express')
const app = express()
const routes = require('./routes/rutas.js')

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

app.use(express.json())
app.use('/', routes)

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

