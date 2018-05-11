<<<<<<< HEAD
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // cms route loads cms.html
  app.get("/createProfile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createProfile.html"));
  });

  // blog route loads blog.html
  app.get("/bandList", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bandList.html"));
  });

  // authors route loads author-manager.html
  app.get("/bandPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bandPage.html"));
  });
=======
// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // add route loads the add.html page, where users can enter new books to the db
    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/createProfile.html"));
    });

    // all route loads the all.html page, where all books in the db are displayed
    app.get("/all", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/bandList.html"));
    });

>>>>>>> 83754a280213e962aa6419c25011a76c5314c975

};
