const app = require('./app')
const env = require('dotenv')
const connectDatabase = require('./conf/mongodb')

// Config
env.config()

// Connect MongoDB
connectDatabase()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
