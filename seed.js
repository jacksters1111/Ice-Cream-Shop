require('dotenv').config();
require('./config/database');
const Icecream = require('./models/Icecream');

Icecream.remove({})
.then(function() {
    return Icecream.create([
        { 
           name: "Cotton Candy", 
           description: "A creamier, dreamier version of your favorite fluffy, puffy treat. Swirled in a carnival of color for extra cuteness.",
           price: 3,
           image_url: ("https://i.imgur.com/MyPtDv5.png"),
           location: "Baskin-Robbins"
        }
    ])
})
.then(function(icecreams) {
    console.log(icecreams);
    process.exit();
})
.catch(function(err) {
    console.log(`seed failed because of ${err}`)
})