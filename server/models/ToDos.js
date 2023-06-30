const mongoose = require('mongoose')

const todosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String, 
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

const toDos = mongoose.model("toDos", todosSchema)

module.exports = toDos