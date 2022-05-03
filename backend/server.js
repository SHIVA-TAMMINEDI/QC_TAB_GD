const express = require('express')// importing express
const colours = require ('colors')
const dotenv = require('dotenv').config() // importing dotenv
const connectDB = require('./config/db') // mongodb connection
const port = process.env.PORT || 5000 // server port
connectDB()
const app = express()
app.use('/api/',require('./routes/route1.js'))

app.listen(port,() =>console.log(`Server started on port ${port}`) ) // console log for status
