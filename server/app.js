const express = require('express')
const cors = require('cors')
const data = require('./data')
const app = express();

app.listen(3000, (req, res) => {
    console.log('You are running on port 3000!')
})

app.get('/', (req, res) => {
    res.send('Hello from the dark side!')
})
