const mongoose = require('mongoose');

async function initDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/react-project', () => {
            console.log('db connected');
        }, e => console.error(e));
    } catch (error) {
        console.log(error);
    }

}

module.exports = initDatabase;