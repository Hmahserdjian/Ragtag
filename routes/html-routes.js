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
    console.log("route ready to lead");
    res.sendFile(path.join(__dirname, "../public/createProfile.html"));
  });

  // blog route loads blog.html
  app.get("/bandList", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bandList.html"));
  });
  app.get("/bandProfile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bandProfile.html"));
  });

 


};
