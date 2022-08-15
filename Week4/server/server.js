const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
// const { setThePassword } = require('whatwg-url')

app.use(express.json())
app.use(morgan('dev'))

const PORT = 5432;

// Middleware 
app.use(express.json())
app.use(morgan('dev'));


// Routes 
app.use("/climate", require("./routes/climateRouter.js"))


// Connect to DB
mongoose.connect('mongodb+srv://BryanU:A******!@cluster0.8j51wpl.mongodb.net/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://BryanU:A******!@cluster0.8j51wpl.mongodb.net/test');
}

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({secret: process.env.SECRET, algorithms: ['RS256']}))
app.use('/api/todo', require('./routes/todoRouter.js'))

//global error-handler 
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
      }
      res.status(500)
      res.render('error', { error: err })
    }
)

app.use((err, req, res, next) => {
  if (err.name == "Unauthorized Error") {
      res.status(err.status)
    }
  return res.send({ errMsg: err.message})
  }
)

// Server Listen //
app.listen(PORT, () => {
    console.log(`App stated on port: ${PORT}`)
});
