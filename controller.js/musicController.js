// our router set up
var express = require("express");

var router = express.Router();

var music = require("../models/music.js")

// Imports our model (bands.js) to use its database functions
var band = require("../models.bands.js");

// creating all our routes and set up logic within those routes where required.
router.get("/", function(res, req) {
    // bands.all(function(data) {
        
    // });
});

router.post("/api/routes", function(req, res) {
    bands.create([""], [req.body, req.body], function (results) {
       
    })
})


// Export routes for server.js to use.
module.exports = router;