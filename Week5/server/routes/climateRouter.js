const express = require('express');
const climateRouter = express.Router();

const Climate = require('../models/climateAction.js')

// CRUD
// GET, POST (Find One, Find All), PUT, DELETE

climateRouter
    .get('/', (req, res, next) => {
        console.log("test")
        Climate.find((err, climates) => {
            console.log("test2")
          if(err){
              res.status(500)
              return next(err)
          }
          return res.status(200).send(climates);
    })
})  

    .post('/', (req, res, next) => {
        const newClimate = new Climate(req.body)
        newClimate.save((err, savedClimate) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(200).send(savedClimate);
  })
})  

    .delete('/:climateId', (req, res, next) => {
        Climate.findOneAndDelete(
            {_id: req.params.climateId},
            (err, deletedClimate) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(`Successfully deleted item ${deletedClimate.user} from the database`) 
            }
        )
    }) 

    .put('/:climateId', (req, res, next) => {
        Climate.findOneAndUpdate(
            {_id: req.params.climateId},
            req.body,
            {new: true},
            (err, updatedClimate) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedClimate) 
            }
        )
}) 

module.exports = climateRouter;