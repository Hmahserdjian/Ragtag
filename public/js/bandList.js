// Global
$(document).ready(function() {
// container ti hold bands
    var containerbands = $(".bands-container");
    var postbands = $("#bands");
    $(document).on("click", "button.post", handlePost);

// Variable to hold band post
    var posts;

    function getbands(band) {
        id = artistName || "";
        if (id) {
            id = "/?id=" + id;
        }

        $.get("add/api/routes" + id, function(data){
            console.log("posts", data)
            posts = data;
        })
    }
function createNewCard(post) {
        var div = $("<div>");
        div.addclass("card text-white border-info mb-3");
        div.setAttr(style, "max-width: 20rem");
        div.addclass("card-body");

        var cardhead = $("<h4>")
        newBandName.text(get.artistName + "");
        var cardDesc = $("<p>");
        var cardLink = $("<a>");

}


})