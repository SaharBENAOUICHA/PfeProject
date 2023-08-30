const express = require('express');
const router = express.Router();
const CampCtrl = require('../controllers/camping');
const Scraping = require('../models/camping');
const site = require('../models/site_schema')


router.post('/addExtractDate', CampCtrl.AddExtractDate);
router.post('/addSite' , CampCtrl.AddSite);
router.post('/getCampings' , CampCtrl.getCampings);
router.post('/getAllCampings' , async (req,res) => {
    const result = []
    const extractdate = req.body.extractDate;
    const Result = await Scraping.findOne({extractDate:extractdate});
    Result.sites.map ((site) => {
        site.campings.map((camping) => {
            const rep = {
                name : camping.name,
                siteName : site.siteName,
                note : camping.note,
                location : camping.location,
                stars : camping.stars,
                position : camping.position,
                accomodationList : camping.accomodationList
            }
            result.push(rep)
        })
            
    })
    res.status(201).json({result})
});
router.get('/getaccomodations/:extractdate/:name/:camping' , CampCtrl.getAccomodations);


module.exports = router;