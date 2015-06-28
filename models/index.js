var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/beautyEthics");

var closeConnection = function() {
	mongoose.connection.close();
};

module.exports.closeConnection = closeConnection;
module.exports.User = require("./user");
module.exports.Brand = require("./brand");
module.exports.Company = require("./company");