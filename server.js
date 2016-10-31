/* ------------------------------------------------------------------ */

require('dotenv').config();

const express        = require('express')
const logger         = require('morgan')
const path           = require('path')
const bodyParser     = require('body-parser');
const session        = require('express-session');
const cookieParser   = require('cookie-parser');
const methodOverride = require('method-override');

const app = express()
const SECRET = 'secret'
const PORT = process.env.PORT || process.argv[2] || 3000

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.listen(PORT, () => { console.log('CHOO CHOO! SHITS RUNNIN ON PORT', PORT) })

/* ------------------------------------------------------------------ */

// ROUTES

const searchRoute = require('./routes/search')
const indexRouter = require('./routes/index.js');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.get('/search', searchRoute)
