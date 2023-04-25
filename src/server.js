import express from 'express';
import configViewEngine from './configs/viewEngine';

// const express = require('express');

const app = express();
const port = 1011;

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/about', (req, res) => {
    res.send(`I'am Khanh`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// để chạy => node server.js
// npm start