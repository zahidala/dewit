const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const port = process.env.PORT

const app = express()

// Import Routes

const authRoute = require('./routes/auth')

// Mount Routes

app.use('/auth', authRoute)

mongoose.set('strictQuery', false)

const db = mongoose.connection
db.on('error', console.error.bind(console, "MongoDB connection error: "))
db.once("open", () => {
    console.log("MongoDB Connected successfully!")
})

mongoose.connect(process.env.mongoDBURL, 
    {useNewUrlParser: true, useUnifiedTopology: true}
)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})