$(document).ready(function() {
  $("#userData").on("click",function(event){
        function handleFormSubmit(event) {
            event.preventDefault();
                    // Wont submit the post if we are missing values
            if (!artistName.val().trim() || !artistDescription.val().trim() || !smLinks.val().trim() || !artistPicture.val().trim() || !artistSong.val().trim()) {
                alert("missing some tunes");
                return;
            //passing userinput into values                    
                upsertBands({
                                var:Bands,                    
                                artistName: $("#artistName").val().trim(),
                                artistDescription: $("#artistDescription").val().trim(),
                                smLinks: $("#smLink").val(),
                                artistPicture: $("#pictureLink").trim(),
                                artistSong: $("#songLink").trim()
                                
                });
                console.log("data ready to load");
            };
        };
        submitPost(post);
    });

    function upsertBands(bandData) {
        $.post("/api/Bands", bandData)
        .then(getBands);
        

    }
    function submitPost(post) { 
            $.post("/api/Bands",Bands,function(data){
                window.location.href = "/bandList";
                console.log("data passed!");    
            });
    }
});
    
