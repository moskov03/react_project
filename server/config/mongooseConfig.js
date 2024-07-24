const mongoose = require('mongoose');

function initDatabase() {
    return mongoose.connect('mongodb://127.0.0.1:27017/react-project', () => {
        console.log('db connected');
    }, e => console.error(e));
}

module.exports = initDatabase;