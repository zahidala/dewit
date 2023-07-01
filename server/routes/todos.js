const express = require('express')
const router = express.Router()

const isLoggedIn = require("../middleware/isLoggedIn");

const todoCtrl = require('../controllers/todos')

router.post("/new", isLoggedIn, todoCtrl.toDo_create_post)

module.exports = router