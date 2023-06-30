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
    due: {
        type: Date, 
        min: new Date(),
        default: new Date()
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
},
{
    timestamps: true
})

const toDos = mongoose.model("toDos", todosSchema)

module.exports = toDos