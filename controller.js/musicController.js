// our router set up
var express = require("express");

var router = express.Router();

var song = require("../models/songs.js").sequelize.models.music;

// Imports our model (bands.js) to use its database functions
var band = require("../models.bands.js").sequelize.models.band;

// creating all our routes and set up logic within those routes where required.
router.get("/", function(req, res, next) {
    bands.all(function(data) {
        
    });
});

router.post("/api/routes", function(req, res, next) {
    bands.create(["/:bands"], [req.body, req.body], function (results) {
       band.findById({
           id: req.params.id
       })
        .then(function (bands) {
            
        })
    })
})


// Export routes for server.js to use.
module.exports = router;
