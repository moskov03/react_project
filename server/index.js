const userRoute = require('../server/routes/user')

const express = require('express')
const app = express()
const cors = require('cors')
const initDatabase = require('./config/mongooseConfig')
const mongoose = require('mongoose');
// const mongooseConfig = require('../server/config/mongooseConfig')
const Dog = require('../server/model/Dog')

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(bodyParser.json())

app.use(cors())
app.use(userRoute)



// opit da napravim db s hardcode 
// app.post('/', async (req, res) => {
//     console.log('i reach here');
//     try {
//         const dog = await Dog.create({ name: 'jinx', breed: 'janx', age: 6 })
//         console.log(dog);
//     } catch (error) {
//         console.log(error);
//     }

//     res.send('test dog')
// })


// app.listen(5050, async () => {
//     mongoose.connect('mongodb://127.0.0.1:27017/react-project')
//     console.log('db connected');
//     console.log('Server is listening on port 5050');
//     console.log('http://localhost:5050/');
//     await initDatabase()
// })



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