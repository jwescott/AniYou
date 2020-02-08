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
   $.ajax(settings).then(function (response) {
      $(".searchInput").val("");

     

      var animeArray = []
      for (let i = 0; i < 10; i++) {

         animeArray.push(response.results[i])

      }


      sessionStorage.setItem("newAnime", JSON.stringify(animeArray));
      location.href="/top10"


   


});



   

});



if(window.location.pathname.indexOf("/top10")>-1){

   var animeArray =  JSON.parse(sessionStorage.getItem("newAnime"))

   console.log(animeArray);
   

    for (let i = 0; i < 5; i++) {
            console.log (animeArray[i]);

            location.href="/top10"
             var row = $("<div class = 'row'>")


            var column1 = $("<div class = 'col-sm-6'>")
            var card1 = $("<div class = 'card'>")

            var image1 = $("<img class = 'card-img-top'>")
            image1.attr("src", animeArray[i].image_url)



            var body1 = $("<div class = 'card-body'>")


            var header1 = $("<h5 class = 'card-title'>")
            header1.append( animeArray[i].title)

            var p1 = $("<p class = 'card-text'>")
            p1.append( animeArray[i].synopsis)

            var list1 = $("<ul class = 'list-group list-group-flush'>")
            var item1a = $("<li class = 'list-group-item'>")
            item1a.append( animeArray[i].score)
            var item1b = $("<li class = 'list-group-item'>")
            item1b.append( animeArray[i].rated)
            var item1c = $("<li class = 'list-group-item'>")
            item1c.append( animeArray[i].episodes)
            var item1d = $("<li class = 'list-group-item'>")
            item1d.append( animeArray[i].start_date+" to "+ animeArray[i].end_date)

            body1.append(header1, p1)
            list1.append(item1a, item1b, item1c, item1d)
            card1.append(image1, body1, list1)
            column1.append(card1)
            var column2 = $("<div class = 'col-sm-6'>")
            var card2 = $("<div class = 'card'>")
            var image2 =$("<img class = 'card-img-top'>")
            image2.attr("src", animeArray[i+1].image_url)
            var body2 = $("<div class = 'card-body'>")
             var header2 = $("<h5 class = 'card-title'>")
             header2.append( animeArray[i+1].title)
             var p2 = $("<p class = 'card-text'>")
             p2.append( animeArray[i+1].synopsis)
             var list2 = $("<ul class = 'list-group list-group-flush'>")
             var item2a = $("<li class = 'list-group-item'>")
             item2a.append( animeArray[i+1].score)
             var item2b = $("<li class = 'list-group-item'>")
             item2b.append( animeArray[i+1].rated)
             var item2c = $("<li class = 'list-group-item'>")
             item2c.append( animeArray[i+1].episodes)
             var item2d = $("<li class = 'list-group-item'>")
             item2d.append( animeArray[i+1].start_date+" to "+ animeArray[i+1].end_date)
             body2.append(header2, p2)
             list2.append(item2a, item2b, item2c, item2d)
             card2.append(image2, body2, list2)
             column2.append(card2)

             row.append(column1, column2)
            $("#results").append(row)

     }
}