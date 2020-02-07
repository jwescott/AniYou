$(".submitBtn").on("click", function () {
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
});