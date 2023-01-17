const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash')
const path = require('path')

require('dotenv').config()

const PORT = process.env.PORT

// config json
app.use(express.json());
app.use(cookieParser());

//config flash
app.use(flash())

// config session
app.use(session({
    secret: 'meu_segredo',
    cookie: {
        maxAge: 8000
    },
    resave: false,
    saveUninitialized: false
}));

//template engine
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// public
app.use(express.static(path.join(__dirname, 'public')))

// Middleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    
    next()
})

// importando a rota a utilizar na Home
const indexRouter = require('./routes/index')

//rotas
app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).render('404', {
        title: 'Página Não Encontrada'
    })
})

app.listen(PORT, function () {
    console.log('Servidor rodando na url http://localhost:' + PORT)
})
