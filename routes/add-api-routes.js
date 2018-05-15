// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all the bands
  app.get("/api/Bands", function(req, res) {
    var query = {};
    if (req.query.Bands) {
      query.BandsId = req.query.Bands_id;
    }
    db.Post.findAll({
      where: query
    }).then(function(dbBands) {
      res.json(dbBands);
    });
  });


  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/Bands", function(req, res) {
    db.bands.create({
        artistName:req.body.artistName,
        artistDescription: req.body.artistDescription,
        smLinks: req.body.smLinks,
        artistPicture: req.body.artistPicture,
        artistSong:req.body.artistSong
    }).then(function(dbBands) {
      res.json(dbBands);
      console.log("stored some data");
    });
  
  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/Bands", function(req, res) {

  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/Bands", function(req, res) {

  });
};
