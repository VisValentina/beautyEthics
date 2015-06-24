var mongoose = require("mongoose");

var brandSchema = new mongoose.Schema({
  name: String,
  instagramName: String,
  image: String,
  owner: String
});

var Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;