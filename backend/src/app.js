const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const routes = require('./routes/routes')

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// Routes
app.use(routes)

module.exports = app
