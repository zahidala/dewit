const toDo = require('../models/Todo')

exports.toDo_create_post = (req, res) => {
    let { title, description, due } = req.body
    const owner = req.user.id;
    const newTodo = new toDo({title, description, due, completed: false, owner})
    newTodo.save()
    .then(() => {
        res.json({ message: "Todo created successfully"})
    })
    .catch((err) => {
        console.log(err)
        res.json({ message: "An error occured" })
    })
}

exports.toDo_all_get = (req, res) => {
    toDo.find({ owner: req.user.id })
    .then((todos) => {
        res.json({todos})
    })
    .catch((error) => {
        console.log(error)
        res.json({ message: "An error occured"})
    })
}

exports.toDo_single_get = (req, res) => {
    const { id } = req.params
    toDo.findById({_id : id})
    .then((todo) => {
        res.json({todo})
    })
    .catch((error) => {
        console.log(error)
        res.json({message: "An error occured"})
    })
}

exports.toDo_delete_delete = (req, res) => {
    const { id } = req.params
    toDo.findByIdAndDelete({ _id : id })
    .then((todos) => {
        res.json({todos})
    })
    .catch((error) => {
        console.log(error)
        res.json({message: "An error occured"})
    })
}

exports.toDo_update_patch = (req, res) => {
    const { id } = req.params
    toDo.findByIdAndUpdate({_id: id}, req.body)
    .then((todo) => {
        res.json({todo})
    })
    .catch((error) => {
        console.log(error)
        res.json({message: "An error occured"})
    })
}