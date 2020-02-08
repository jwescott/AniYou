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
         var newCard = $("<div>").addClass("card").attr("style", "width:18rem;");
         var newCardBody = $("<div>").addClass("card-body");
         var title = $("<h5>").addClass("card-title");
         var img = $("<img>").addClass("card-img-top").attr("src", res.results[i].img_url);
         var synopsis = $("<p>").addClass("card-text").html(res.results[i].synopsis);
         var score = $("<p>").addClass("card-text").html(res.results[i].score);
         var rating = $("<p>").addClass("card-text").html(res.results[i].rating);
         var startToEnd = $("<p>").addClass("card-text").html(res.results[i].start_date - res.results[i].end_date);
         var numberOfEpisodes = $("<p>").addClass("card-text").attr(res.results[i].episodes);
         
         $(newCardBody).append(title);
         $(newCardBody).append(img);
         $(newCardBody).append(synopsis);
         $(newCardBody).append(score);
         $(newCardBody).append(rating);
         $(newCardBody).append(startToEnd);
         $(newCardBody).append(numberOfEpisodes);
         $(newCard).append(newCardBody);
         $(".results").append(newCard);
      };
   });

});