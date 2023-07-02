const express = require('express')
const router = express.Router()

const isLoggedIn = require("../middleware/isLoggedIn");

const todoCtrl = require('../controllers/todos')

router.get("/all", isLoggedIn, todoCtrl.toDo_all_get)
router.get("/:id", isLoggedIn, todoCtrl.toDo_single_get)
router.post("/new", isLoggedIn, todoCtrl.toDo_create_post)
router.patch("/:id", isLoggedIn, todoCtrl.toDo_update_patch)
router.delete("/:id", isLoggedIn, todoCtrl.toDo_delete_delete)

module.exports = router