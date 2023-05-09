import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import connection from './configs/connectDB';
import initAPIRoute from './route/api';

require('dotenv').config();

// const express = require('express');

const app = express();

const port = process.env.PORT || 2803;
console.log('>> Link Localhot:', port)

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//setup view engine
configViewEngine(app);
//init web route
initWebRoute(app);


initAPIRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// để chạy => node server.js
// npm start