$(document).ready(function() {
    var Bands ={                  
        artistName: $("#artistName").val().trim(),
        artistDescription: $("#artistDescription").val().trim(),
        smLinks: $("#smLink").val().trim(),
        artistPicture: $("#pictureLink").val().trim(),
        artistSong: $("#songLink").val().trim(),
    }
      $(document).on("#submit", "#author-form", handleAuthorFormSubmit);

     // Getting the initial list of Bands
    //   getBands();

    function handleAuthorFormSubmit(event) {
        event.preventDefault();
                    // Wont submit the post if we are missing values
            if (!artistName.val().trim() || !artistDescription.val().trim() || !smLinks.val().trim() || !artistPicture.val().trim() || !artistSong.val().trim()) {
                alert("missing some tunes");
                return;
            }
            //passing userinput into values                    
            upsertAuthor({
                name: nameInput
                  .val()
                  .trim()
              });
                console.log("data ready to load");
            submitPost(Bands);
        };
        
    

    function upsertBands(Bands) {
        $.post("/api/Bands", Bands)
        .then(getBands);
        console.log("data passed!"); 

    }
    function submitPost(Bands) { 
            $.post("/api/Bands",Bands,function(Bands){
                window.location.href = "/bandList";
                console.log("data passed!");    
            });
      }
});
    
