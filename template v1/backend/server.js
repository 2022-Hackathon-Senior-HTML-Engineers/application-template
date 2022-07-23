require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const drinkRoutes = require('./routes/drinks')
const rewardRoutes = require('./routes/rewards')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/drinks', drinkRoutes)

app.use('/api', rewardRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch(console.error) 