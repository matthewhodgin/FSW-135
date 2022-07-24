const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express();
const PORT = 5432;

app.use(express.json())
app.use(morgan('dev'));

// Connect to DB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/moviesdb',
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

app.listen(PORT, () => {
    console.log(`App stated on port: ${PORT}`)
});