const express = require('express');
const cors = require('cors');
const app = express();
let port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from the dark side!')
});

app.listen(port, (req, res) => {
    console.log(`You are running on port ${port}!`)
});

