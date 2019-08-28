const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname,'/HTML/index.html'))
});