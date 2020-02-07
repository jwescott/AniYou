$(".submitBtn").on("click", function () {
   event.preventDefault()
   var searchTerm = $(".searchInput").val();

   var queryURL = " https://jikan1.p.rapidapi.com/meta/" + searchTerm + "/anime/today"
    $.ajax({
       url: queryURL,
       method: "GET"
    }).then(function (response) {
       $(".searchInput").val("");
       console.log(response);
       for (let i = 0; i < 10; i++) {

       }
    });

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
   
   $.ajax(settings).done(function (response) {
      $(".searchInput").val("");
      console.log(response);
   });

});