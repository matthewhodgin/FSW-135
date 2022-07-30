const mongoose = require("mongoose")
const Schema = mongoose.Schema

const coffeeSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    strength: {
        type: Number,
        required: true,
        min: 1
    }
})


module.exports = mongoose.model('Coffee', coffeeSchema)

// origin / type / strength / name?