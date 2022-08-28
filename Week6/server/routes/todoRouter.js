const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo.js')
console.log(Todo)

// Get ALL Todos
todoRouter.get("/", (req, res, next) => {
    Todo.find((err, todos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todos)
    })
})

todoRouter.get("/user", (req, res, next) => {
    console.log(req)
    Todo.find({user:req.auth._id},(err, todos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todos)
    })
})

// Add new Todo
todoRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const newTodo = new Todo (req.body)
    newTodo.save((err, savedTodo) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedTodo)
    })
})

module.exports = todoRouter
