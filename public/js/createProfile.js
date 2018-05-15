$(document).ready(function () {
    $("#userData").on("click", function (event) {
        event.preventDefault();

        function handleFormSubmit(event) {
            // Wont submit the post if we are missing values
            if (!artistName.val().trim() || !artistDescription.val().trim() || !smLinks.val().trim()) {
                alert("missing some tunes");
                return;
                //passing userinput into values                    
                console.log("data ready to load");
                upsertBands({
                    var: Bands,
                    artistName: $("#artistName").val().trim(),
                    artistDescription: $("#artistDescription").val().trim(),
                    smLinks: $("#smLink").val(),
                    // artistPicture: $("#pictureLink").trim(),
                    // artistSong: $("#songLink").trim()

                });

            };
        };
        // submitPost(post);
    });

    function upsertBands(bandData) {
        $.post("/api/bands", bandData, function (data) {
            window.location.href = "/bandList";
            console.log("data passed!");
        })
        // .then(getBands);
    }

    function submitPost(post) {
        $.post("/api/bands", Bands, function (data) {
            window.location.href = "/bandList";
            console.log("data passed!");
        });
    }
}
);