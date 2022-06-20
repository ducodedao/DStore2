const express = require('express')

const app = express()

app.use(express.json())

// Route
const category = require('./routes/categoryRoute')

app.use('/api/v1', category)

module.exports = app
