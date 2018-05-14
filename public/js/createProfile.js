
// git checkout Profile-logic
// git checkout Profile-logic
$(document).ready(function () {
    var bandForm = $("#add");
    // Adding an event listener for when the form is submitted
    $(bandForm).on("submit", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
    var url = window.location.search;
    var name;
    var genre;
    var descriptions;
    var image;
    // sets a flag for updating or not.
    var updating = false;

    if (url.indexOf("?post_id=") !== 1) {
        postId = url.split("=")[1];
        getPostData(postId, "post");
    } else if (url.indexOf("?name_id") !== -1) {
        nameId = url.split("=")[1];
    }

    getBands();


    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a body, title, or author
        if (!titleInput.val().trim() || !bodyInput.val().trim() || !authorSelect.val()) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newPost = {
            name: titleInput.val().trim(),
            genre: bodyInput.val().trim(),
            descriptions: authorSelect.val().trim()
        };

        // If we're updating a post run updatePost to update a post
        // Otherwise run submitPost to create a whole new post
        if (updating) {
            newPost.id = postId;
            updatePost(newPost);
        } else {
            submitPost(newPost);
        }
    }

    function submitPost(post) {
        $.post("/api/posts", post, function () {
            window.location.href = "/blog";
        });
    }

    // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
    function getPostData(id, type) {
        var queryUrl;
        switch (type) {
            case "post":
                queryUrl = "/api/routes/" + id;
                break;
            case "bandList":
                queryUrl = "/api/routes/" + id;
                break;
            default:
                return;
        }

        function renderAuthorList(data) {
            if (!data.length) {
                window.location.href = "/bnd";
            }
            $(".hidden").removeClass("hidden");
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createAuthorRow(data[i]));
            }
            name.empty();
            console.log(rowsToAdd);
            console.log(nameSelect);
            nameSelect.append(rowsToAdd);
            nameSelect.val(authorId);
        }

    }
// updates the post and redircts to the fan page.
    function updatePost(post) {
        $.ajax({
                method: "PUT",
                url: "/api/routes",
                data: post
            })
            .then(function () {
                window.location.href = "/bandList";
            });
    }
});

