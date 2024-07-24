const express = require('express')
const bodyParser  = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const Dog = require('../server/model/Dog')
const userRoute = require('../server/routes/user')

app.use(userRoute)

app.listen(5050, async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/react-project', {
        });
        console.log('db connected');
        console.log('Server is listening on port 5050');
        console.log('http://localhost:5050/');

    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
});