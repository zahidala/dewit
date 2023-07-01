const express = require('express')
const router = express.Router()

// router.use(express.json())

const authCtrl = require("../controllers/auth")

router.post("/signup", authCtrl.auth_signup_post)
router.post("/signin", authCtrl.auth_signin_post)

module.exports = router