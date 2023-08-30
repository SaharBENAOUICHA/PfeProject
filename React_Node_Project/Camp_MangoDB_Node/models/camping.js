const mongoose = require('mongoose');

const site = mongoose.Schema({
    siteName : String,
    extractDate : String,
    campings : []
});

const Scraping = mongoose.Schema({
    extractDate : String,
    sites : [site] 
})

module.exports = mongoose.model('Scraping', Scraping);
