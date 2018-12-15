// Variables========================

var topics= ["GI Joe", "TMNT", "Talespin", "COPS", "Transformers"]

var toonGif;

console.log(this);
// Process==========================

$(document).ready(function() {
    console.log(this);
    $(".submit").on("click", function(event){
        event.preventDefault();
        toonGif = $("#cartoon").val().trim();
        addButton();
        console.log(toonGif);
        console.log("You Clicked Submit!");
        });

    // $(".gifButton").on("click", function() {
    $(document).on("click", ".gifButton", function() {
        var cartoon = $(this).attr("data-cartoon");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        cartoon + "&api_key=mhXNvJON0ifP30i95lE6FSGm5AzfPt7x&limit=10";
        console.log(queryURL);
        console.log(this);


        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(response) {
                var results = response.data;

                for (var i =0; i< results.length; i++) {
                    var gifDiv = $("<div>");
                    
                    var p = $("<p>").text("Rating: " + rating);

                    var rating =results[i].rating;

                    var cartoonImage = $("<img>");
                    cartoonImage.attr("src", results[i].images.fixed_height.url);

                    gifDiv.prepend(p);
                    gifDiv.prepend(cartoonImage);

                    $("#gifDisplay").prepend(gifDiv);
                }

                console.log(response);
        });

    });






// Functions========================

                function addButton () {
                    var input = $('<button>');
                    input.addClass("gifButton");
                    input.text(toonGif);
                    input.attr("data-cartoon", toonGif);
                    $("#buttonsAdd").append(input);
                    console.log("Add button brosef");
                };

});