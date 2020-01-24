// Dependencies
var express = require("express");
var router = express.Router();
var taco = require("../models/taco.js");

// Our GET request to grab database contents
router.get("/", function (req, res) {
	taco.selectAll(function (data) {
		var hbsObject = {
			tacos: data
		};

		res.render("index", hbsObject);
	});
});

// Our POST request to add a taco to the database
router.post("/", function (req, res) {
	console.log(req.body.taco_name);
	if (req.body.taco_name !== "") {
		taco.insertOne(req.body.taco_name.trim(), function () {
			res.redirect("/");
		});
	}
});

// Our PUT request to update a taco's status
router.put("/:id", function (req, res) {
	console.log(req.params.id);

	taco.updateOne(req.params.id, function () {
		res.redirect("/");
	});
})

// Export
module.exports = router;