const express = require ('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RouteUsers = require('./router/userRouter');

mongoose.connect('mongodb://127.0.0.1:27017/Utilisateurs').then(() => console.log('connexion success'));
app.use(cors({
    origin: ['http://localhost:9000', 'http://localhost:3000'] 
}))
app.use(bodyParser.json({limit: '50mb'}));
app.use('/api', RouteUsers)

module.exports = app;