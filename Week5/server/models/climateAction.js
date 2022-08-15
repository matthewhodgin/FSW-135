const mongoose = require("mongoose")
const Schema = mongoose.Schema

const climateSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true
    },
    comments: {
        type: Number,
        required: true,
        min: 1
    }
})


module.exports = mongoose.model('Climate', climateSchema)

// origin / type / strength / name?