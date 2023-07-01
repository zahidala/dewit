const toDo = require('../models/Todo')

exports.toDo_create_post = async (req, res) => {
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