var express = require("express");


// Express setup
var app = express();
var PORT = process.env.PORT || 3000;


// Start server to listen
app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});