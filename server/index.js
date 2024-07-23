const express = require('express')
const app = express()
const cors = require('cors')
const mongooseConfig = require('../server/config/mongooseConfig')
const Dog = require('../server/model/Dog')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Works')
})

app.get('/catalog', (req, res) => {
    res.send('Works')
})

app.get('/login', (req, res) => {
    res.send('Works')
})

app.get('/register', (req, res) => {
    res.send('Works')
})


app.post('/', async (req, res) => {
    console.log('i reach here');
    try {
        const dog = await Dog.create({ name: 'jinx', breed: 'janx', age: 6 })
        console.log(dog);
    } catch (error) {
        console.log(error);
    }

    res.send('test dog')
})

app.listen(5050, () => {
    console.log('Server is listening on port 5050');
    console.log('http://localhost:5050/');
})