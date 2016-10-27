/* ------------------------------------------------------------------ */

require('dotenv').config();

const express        = require('express')
const logger         = require('morgan')
const path           = require('path')
const bodyParser     = require('body-parser')
const methodOverride = require('method-override')

const favoriteBooks  = require('./models/favoriteBooks')

const app = express()
const PORT = process.argv[2] || process.env.PORT || 3000

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.listen(PORT, () => { console.log('CHOO CHOO! SHITS RUNNIN ON PORT', PORT) })

/* ------------------------------------------------------------------ */

// ROUTES
const homePage = require('./routes/home');
const searchRoute = require('./routes/search')

app.get('/', homePage)
app.get('/search', searchRoute)
