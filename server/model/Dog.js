const mongoose = require('mongoose');

let dogSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    breed: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require:true
    },
    age:{
        type: Number,
        require: true
    },
    img: {
        type: String,
        require:true,
        validate: /^https?:\/\//i
    }
}, {
    timestamps: true
});


let Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;

// image: {
    //     type: String,
    //     require: true,
    //     validate: /^https?:\/\//i,
        
    // },
    // description: {
    //     type: String,
    //     require: true,
    // },