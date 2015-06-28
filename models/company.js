var mongoose = require("mongoose");

var companySchema = new mongoose.Schema({
  name: String,
  score: Number,
  text: String,
  brands: [{
                      type: mongoose.Schema.Types.ObjectId,
                      ref: "Brand" 
                    }]
});

var Company = mongoose.model("Company", companySchema);

module.exports = Company;