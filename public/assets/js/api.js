$(".submitBtn").on("click", function () {
   event.preventDefault()
   var searchTerm = $(".searchInput").val();

   var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://jikan1.p.rapidapi.com/search/anime?q=" + searchTerm,
      "method": "GET",
      "headers": {
         "x-rapidapi-host": "jikan1.p.rapidapi.com",
         "x-rapidapi-key": "e40ad72687mshe72635bc51a2a2fp187987jsnbdb0a544d22a"
      }
   }
   
   $.ajax(settings).done(function (res) {
      $(".searchInput").val("");
      console.log(res);
      for (let i = 0; i < 10; i++) {
         var newCard = $("<div>").addClass("card col-sm-3");
         var newCardBody = $("<div>").addClass("card-body");
         var title = $("<h5>").addClass("card-title").html(res.results[i].title);
         console.log(title);
         var img = $("<img>").addClass("card-img-top").attr("src", res.results[i].image_url);
         console.log(img);
         var synopsis = $("<p>").addClass("card-text").html("Synopsis: " + res.results[i].synopsis);
         console.log(synopsis)
         var score = $("<p>").addClass("card-text").html("Score: " + res.results[i].score);
         console.log(score);
         var rating = $("<p>").addClass("card-text").html("Rating: " + res.results[i].rated);
         var numberOfEpisodes = $("<p>").addClass("card-text").attr("Number of Episodes: " + res.results[i].episodes);
         console.log(numberOfEpisodes );
         
         $(newCardBody).append(title);
         $(newCardBody).append(img);
         $(newCardBody).append(synopsis);
         $(newCardBody).append(score);
         $(newCardBody).append(rating);
         $(newCardBody).append(numberOfEpisodes);
         $(newCard).append(newCardBody);
         $(".results").append(newCard);
         console.log(newCard)
         console.log(".results")
      };
   });

});