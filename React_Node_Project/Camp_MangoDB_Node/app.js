const express = require ('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RouteCampings = require('./router/camping');

mongoose.connect('mongodb://127.0.0.1:27017/Campings').then(() => console.log('connexion success'));
app.use(cors({
    origin: ['http://localhost:5000', 'http://localhost:3000'] 
}))
app.use(bodyParser.json({limit: '50mb'}));
app.use('/api', RouteCampings)

module.exports = app;
