const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    repassword: {
        type: Number,
        require: true
    }
}, {
    timestamps: true
});


let User = mongoose.model('User', userSchema);

module.exports = User;