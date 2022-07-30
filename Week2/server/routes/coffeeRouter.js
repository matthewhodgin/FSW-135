const express = require('express');
const coffeeRouter = express.Router();

const Coffee = require('../models/inventory.js')

coffeeRouter
    .get('/', (req, res, next) => {
        console.log("test")
        Coffee.find((err, coffees) => {
            console.log("test2")
          if(err){
              res.status(500)
              return next(err)
          }
          return res.status(200).send(coffees);
    })
})  

    .post('/', (req, res, next) => {
        const newCoffee = new Coffee(req.body)
        newCoffee.save((err, savedCoffee) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(200).send(savedCoffee);
  })
})  

    .delete('/:coffeeId', (req, res, next) => {
        Coffee.findOneAndDelete(
            {_id: req.params.coffeeId},
            (err, deletedCoffee) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(`Successfully deleted item ${deletedCoffee.type} from the database`) 
            }
        )
    }) 

    .put('/:coffeeId', (req, res, next) => {
        Coffee.findOneAndUpdate(
            {_id: req.params.coffeeId},
            req.body,
            {new: true},
            (err, updatedCoffee) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedCoffee) 
            }
        )
}) 

module.exports = coffeeRouter;