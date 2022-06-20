const express = require('express')

const app = express()

app.use(express.json())

// Route
const category = require('./routes/categoryRoute')
const product = require('./routes/productRoute')

app.use('/api/v1', category)
app.use('/api/v1', product)

module.exports = app
