const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    complete: {
        type: Boolean,
        default: false
    },
    imgUrl: {
        type: String,
        // required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Todo", todoSchema)

