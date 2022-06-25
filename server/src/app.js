const express = require('express')
const errMiddleware = require('./middlewares/errMiddleware')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())

// Route
const category = require('./routes/categoryRoute')
const product = require('./routes/productRoute')
const user = require('./routes/userRoute')
const order = require('./routes/orderRoute')

app.use('/api/v1', category)
app.use('/api/v1', product)
app.use('/api/v1', user)
app.use('/api/v1', order)

// Middleware for Errors
app.use(errMiddleware)

module.exports = app
