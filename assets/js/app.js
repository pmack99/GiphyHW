
$(document).ready(function() {
        
    var topics = ["baseball", "football", "hockey", "soccer"];

    function ajaxGifCall() {
        var giphy = $(this).attr("data-name");
        console.log(giphy);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
       }).then(function(response) {
           var results = response.data;
           console.log(results)

           for (var i = 0; i < results.length; i++) {
              var showDiv = $("<div class='col-sm'>");
           
              var rating = results[i].rating;
                 console.log(rating)
              var gifUrl = results[i].images.fixed_height.url;
                 console.log(gifUrl)

              var p = $("<p>").text("Rating: " + rating);
              showDiv.append(p);

              var image = $("<img>").attr("src", gifUrl);
              showDiv.append(image);

          $("#gifsView").prepend(showDiv);

       }
   });
}

 //Submit button click event takes search term from form input, trims and pushes to topics array, displays button
   $("#add-giphy").on("click", function(event) {
       event.preventDefault();
       var newbutton = $("#giphy-input").val().trim();
       topics.push(newbutton);
       console.log(topics);
       $("giphy-input").val('');
       displayButtons();
     });

 //Function iterates through topics array to display button with array values in "buttons-view" section of HTML
   function displayButtons() {
      $("#buttons-view").empty();
   for (var i = 0; i < topics.length; i++) {
       var a = $("<button>");
       a.addClass("gif-button");
       a.attr("data-name", topics[i]);
       a.text(topics[i]);
       $("#buttons-view").append(a);
   }
 }


 displayButtons();

      //Click event on button with id of "show" executes ajaxGifCall function
      $(document).on("click", ".gif-button", ajaxGifCall);

      //Click event on gifs with class of "newGiphy" executes pausePlayGifs function
      // $(document).on("click", ".newGiphy", pausePlayGifs);


      //Function accesses "data-state" attribute and depending on status, changes image source to "data-animate" or "data-still"
     // function pausePlayGifs() {
          // var state = $(this).attr("data-state");
     // if (state === "still") {
        //      $(this).attr("src", $(this).attr("data-animate"));
        //      $(this).attr("data-state", "animate");
     //} else {
     //  $(this).attr("src", $(this).attr("data-still"));
     //  $(this).attr("data-state", "still");
 //}
//}

});




            //var defaultAnimatedSrc = results[i].images.fixed_height.url;
           //var staticSrc = results[i].images.fixed_height_still.url;
           //image.addClass("newGiphy");
           //image.attr("src", staticSrc);
           //image.attr("data-state", "still");
           //image.attr("data-still", staticSrc);
           //image.attr("data-animate", defaultAnimatedSrc);

