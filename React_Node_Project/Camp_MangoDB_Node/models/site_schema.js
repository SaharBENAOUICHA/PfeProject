const mongoose = require('mongoose');

const site = mongoose.Schema({
    siteName : String,
    extractDate : String,
    campings : []
});

module.exports = mongoose.model('site', site);
