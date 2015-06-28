var mongoose = require("mongoose");

var brandSchema = new mongoose.Schema({
  instaName: String,
  instaId: Number,
  complaint: String,
  owner: {
                      type: mongoose.Schema.Types.ObjectId,
                      ref: "Company" // Is this the parent ??
                    },
});

var Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;