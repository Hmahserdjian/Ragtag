// Global
$(document).ready(function() {
// container ti hold bands
    var containerbands = $(".bands-container");
    var postbands = $("#bands");
    $(document).on("click", "button.post", handlePost);

// Variable to hold band post
    var bands;

    function getbands(band) {
        $.get("/api/bands", function(data){
            console.log("posts", data)
            bands = data;
            // createNewRow();
        })
    }
// function createNewCard(post) {
//         var div = $("<div>");
//         div.addclass("card text-white border-info mb-3");
//         div.setAttr(style, "max-width: 20rem");
//         div.addclass("card-body");

//         var cardhead = $("<h4>")
//         newBandName.text(get.artistName + "");
//         var cardDesc = $("<p>");
//         var cardLink = $("<a>");

        

// }
  function createNewRow(post) {
      var newPostCard = $("<div>");
      newPostCard.addClass("card");
      var newPostCardHeading = $("<div>");
      newPostCardHeading.addClass("card-header");
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("delete btn btn-danger");
      var editBtn = $("<button>");
      editBtn.text("EDIT");
      editBtn.addClass("edit btn btn-info");
      var newPostTitle = $("<h2>");
      var newPostAuthor = $("<h5>");
      newPostAuthor.text("Band Name: " + post.Band.name);
      newPostAuthor.css({
          float: "right",
          color: "blue",
          "margin-top": "-10px"
      });
      var newPostCardBody = $("<div>");
      newPostCardBody.addClass("card-body");
      var newPostBody = $("<p>");
      newPostTitle.text(post.title + " ");
      newPostBody.text(post.body);
      newPostTitle.append(newPostDate);
      newPostCardHeading.append(deleteBtn);
      newPostCardHeading.append(editBtn);
      newPostCardHeading.append(newPostTitle);
      newPostCardHeading.append(newPostAuthor);
      newPostCardBody.append(newPostBody);
      newPostCard.append(newPostCardHeading);
      newPostCard.append(newPostCardBody);
      newPostCard.data("post", post);
      return newPostCard;
  }

})