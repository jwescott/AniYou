$(".submitBtn").on("click", function () {
   var searchTerm = $(".searchInput").val();
   var queryURL = " https://jikan1.p.rapidapi.com/meta/" + searchTerm + "/anime/today"
    $.ajax({
       url: queryURL,
       method: "GET"
    }).then(function (response) {
       console.log(response)
    });
});