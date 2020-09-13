const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const icecreamSchema = new Schema({
    name: String, 
    description: String, 
    price: Number,
    image_url: String,
    location: String
});

module.exports = mongoose.model("Icecream", icecreamSchema);

