const Icecream = require('./../models/Icecream');

function create(req, res) {
    let newIcecream = new Icecream; 

    newIcecream.name = req.body.name;
    newIcecream.description = req.body.description;
    newIcecream.price = parseInt(req.body.price);
    newIcecream.image_url = req.body.image_url;
    newIcecream.location = req.body.location;

    newIcecream.save((err) => { 
        if (err) console.log(err); 
        Icecream.find({})
        .then(icecreams => res.json(icecreams).status(200));
    })
}

function index(req, res) {
    Icecream.find({})
        .then((icecreams) => res.json(icecreams).status(200))
        .catch(err => console.log(err));
}

module.exports = { 
    create,
    index
}