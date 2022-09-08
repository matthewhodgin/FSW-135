const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
// const InventoryModel = require("./models/inventory.js")

const PORT = 5432;

// Middleware 
app.use(express.json())
app.use(morgan('dev'));


// Connect to DB
mongoose.connect('mongodb+srv://BryanU:password...@cluster0.8j51wpl.mongodb.net/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
)

//global error-handler 
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
      }
      res.status(500)
      res.render('error', { error: err })
    }
)

// Server Listen //
app.listen(PORT, () => {
    console.log(`App stated on port: ${PORT}`)
});

