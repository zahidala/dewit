const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String, 
        required: true,
    },
    due: {
        type: Date, 
        min: new Date(),
        default: new Date()
    },
    completed: {
        type: Boolean,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},
{
    timestamps: true
})

const toDo = mongoose.model("toDo", todoSchema)

module.exports = toDo