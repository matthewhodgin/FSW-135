const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json());


app.get('/', (request, response, next)=>{
console.log(request.query)
response.send("Hello")
})


  

app.listen(3000)


/// SERVER.JS ONLY..