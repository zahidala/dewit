const User = require("../models/User")

const jwt = require("jsonwebtoken")

const bcrypt = require("bcrypt")
const salt = 10

exports.auth_signup_post = (req, res) => {
    let user = new User(req.body);
    
    let hash = bcrypt.hashSync(req.body.password, salt)    
    user.password = hash

    user.save()
    .then(() => {
        res.json({ message: "User Created Successfully!"})
    })
    .catch((err) => {
        console.log(err)
        res.json({ message: "An error occured"})
    })
}

exports.auth_signin_post = async (req, res) => {
    let { emailAddress, password } = req.body

    try {
        let user = await User.findOne({ emailAddress }) // await is used to pause the execution (fixes no values error on isMatch)
        
        if (!user) {
            return res.json({ message: "User not found!" })
        }

        // Compare Password
        const isMatch = bcrypt.compareSync(password, user.password)
        
        if (!isMatch) {
            return res.json({ message: "Password is incorrect!"})
        }

        const payload = {
            user: {
                id: user._id,
                name: user.name
            },
        }

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 36000000 },
            (err, token) => {
                if (err) throw err
                res.json({ token }).status(200)
            }
        )

    } catch (error) {
        console.log(error)
        res.json({ message: "You are not logged in!"}).status(400)
    }
}

