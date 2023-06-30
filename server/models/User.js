const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        minLength: [3, "Name is too short."],
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password is too weak."]
    }
},
{
    timestamps: true
})

//verify Password

// userSchema.methods.verifyPassword = function(password){
//     console.log(password)
//     console.log(this.password)
//     return bcrypt.compareSync(password, this.password)
// }

const User = mongoose.model("User", userSchema)

module.exports = User;