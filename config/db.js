const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlPArser: true,
        useUnifiedTopology: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
} 

module.exports = connectDB;