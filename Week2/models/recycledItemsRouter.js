const express = require('express');
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');


let recycledItems = [
    { name: 'Cardboard', description: 'Box Cardboard', recycleable: 'Yes', quantiy: '1 million', unitPrice: '10 cents each', _id: uuidv4() },
    { name: 'Alimunum', description: 'Cans', recycleable: 'Yes', quantiy: '10 million', unitPrice: '5 cents each', _id: uuidv4() },
    { name: 'Mixed Paper', description: 'Various Paper', recycleable: 'No', quantiy: '100 million', unitPrice: '0 cents each', _id: uuidv4() },
    { name: 'Glass', description: 'Glass Bottles / Containers', recycleable: 'Yes', quantiy: '50 million', unitPrice: '10 cents each', _id: uuidv4() },
];

recycledItemsRouter
    .get('/', (req, res) => {
        res.status(200).send(recyledItems);
})  // GET all

    .get('/:recycledItemId', (req, res) => {
        const recycledItemId = req.params.recycledItemId;
        const singularrecycledItem = recycledItems.find(recycledItem => recycledItem._id === recycledItemId);

        res.send(singularrecycledItem);
})  // GET one

    .post('/', (req, res) => {
        const newrecycledItem = req.body;
        newrecycledItem._id = uuidv4();
        recycledItems.push(newrecycledItem);

        console.log(recycledItems)
        res.status(201).send(`Successfully added ${newrecycledItem.title} to the database`);
})

    .delete('/:recycledItemId', (req, res) => {
        const recycledItemId = req.params.recycledItemId;
        const recycledItemIndex = recycledItems.findIndex(recycledItem => recycledItem._id === recycledItemId);
        recycledItems.splice(recycledItemIndex, 1);

        res.send('Resource successfully deleted!')

})  // DELETE one

    .put('/:recycledItemId', (req, res) => {
        const recycledItemId = req.params.recycledItemId;
        const recycledItemIndex = recycledItems.findIndex(recycledItem => recycledItem._id === recycledItemId);
        Object.assign(recycledItems[recycledItemIndex], req.body);

        res.send('Resource successfully updated!');
}) 

module.exports = recycledItemsRouter;