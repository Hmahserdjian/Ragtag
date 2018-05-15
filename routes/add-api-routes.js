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
  app.get("/api/bands", function(req, res) {
    db.Bands.findAll().then(function(dbbands) {
      res.json(dbbands);
    });
  });


  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/bands", function(req, res) {
    console.log("band post: " + JSON.stringify(req.body))
    db.Bands.create({
        artistName:req.body.artistName,
        artistDescription: req.body.artistDescription,
        smLinks: req.body.smLinks
        // artistPicture: req.body.artistPicture,
        // artistSong:req.body.artistSong
    }).then(function(dbBands) {
      res.json(dbBands);
    });
  
  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/bands", function(req, res) {

  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/bands", function(req, res) {

  });

  // 
  app.get("/bandList", function (req, res) {
    
  })
};
