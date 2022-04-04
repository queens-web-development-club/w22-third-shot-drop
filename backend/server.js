const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const cors = require('cors')
const connectDB = require('./config/db')

// Connect to MongoDB Atlas
connectDB()


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/book', require('./routes/clinicRoutes'))
app.use('/contact', require('./routes/contactRoutes'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))