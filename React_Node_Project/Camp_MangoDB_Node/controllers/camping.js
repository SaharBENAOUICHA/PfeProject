const Scraping = require('../models/camping');
const site = require('../models/site_schema')

exports.AddExtractDate = async(req,res) => {
    const test = await Scraping.findOne({extractDate : req.body.extractDate})
    if (test == null){
        const scraping = new Scraping(req.body);
        await scraping.save()
        .then((scraping) => { return res.status(201).json({scraping}) })
        .catch((error) => { return res.status(400).json({error}) });
    }
    else {
        res.send({message : "ExtractDate existe déjà"})
    }
}

exports.AddSite = async(req,res) => {
    const extractDate = await Scraping.findOne({extractDate:req.body.extractDate});
    const Nsite = new site({
        siteName : req.body.siteName,
        extractDate : req.body.extractDate,
        campings : req.body.campings
    })
    let existSite =false;
    if(extractDate != null){
	    extractDate.sites.map((site) => {
		    if (site.siteName == req.body.siteName){
			    site.campings = Nsite.campings
			    existSite =true
		}
		return site
	})
    }
    if(!existSite){
        extractDate.sites.push(Nsite)
    }
    extractDate.save()
    res.send({"message" : "site added"});    
}

exports.getCampings = async (req,res) => {
    const extractdate = req.body.extractDate;
    const name = req.body.siteName;
    const result = await Scraping.findOne({extractDate:extractdate});
    result.sites.map ((site) => {
        if (site.siteName == name){
            const rep = site.campings
            res.status(201).json({rep})
        }
    })
}

exports.getAllCampings = async (req,res, ) => {
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
}

exports.getAccomodations = async (req,res) => {
    const extractdate = req.params.extractdate;
    const name = req.params.name;
    const camping_name = req.params.camping;
    const result = await Scraping.findOne({extractDate:extractdate});
    result.sites.map ((site) => {
        if (site.siteName == name){
            const rep = site.campings
            rep.map ((camping) => {
                if (camping.name == camping_name){
                    const acc = camping.accomodationList
                    res.status(201).json({acc})
                }
            })            
        }
    })
}


