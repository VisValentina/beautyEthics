var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/beautyEthics");

module.exports.User = require("./user");
module.exports.Brand = require("./brand");