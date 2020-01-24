// Dependencies
var orm = require("../config/orm.js");

// We pass in query parameters as required by our ORM and also a callback to receive data
var taco = {
	selectAll: function (cb) {
		orm.selectAll("tacos", function (res) {
			cb(res);
		});
	},
	insertOne: function (tacoName, cb) {
		orm.insertOne("tacos", "taco_name", tacoName, function (res) {
			cb(res);
		});
	},
	updateOne: function (tacoId, cb) {
		orm.updateOne("burgers", "devoured", 1, "id", tacoId, function (res) {
			cb(res);
		});
	}
};

// Export
module.exports = taco;