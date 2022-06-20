const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Mongodb connected with server')
        })
}

module.exports = connectDatabase
