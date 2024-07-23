const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req,res) =>{
    res.send('Works')
})

app.listen(5050, ()=>{
    console.log('Server is listening on port 5050');
    console.log('http://localhost:5050/');
})