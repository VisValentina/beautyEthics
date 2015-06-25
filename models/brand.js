var mongoose = require("mongoose");

var brandSchema = new mongoose.Schema({
  instaName: String,
  instaId: Number,
  complaint: String,
  owner: String,
  score: Number
});

var Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;