const path = require('path')
const express = require('express')
const app = express()
const bodyParser  = require('body-parser')
const port = process.env.PORT || 3000
const hbs = require('express-handlebars')
const route = require('./routes')
const db = require('./config/db/mongo')


// Connect database
db.connect()




app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())




app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))





app.listen(port, ()=> {
    console.log(`connect success:${port}`)
})

route(app);