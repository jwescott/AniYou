// JS for user and password form//

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

$('.carousel').carousel({
  interval: 2000
})

$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newChirp = {
    author: $("#author").val().trim(),
    body: $("#chirp-box").val().trim(),
  };

  console.log(newChirp);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newChirp)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newChirp.author + " says: </p>");
      row.append("<p>" + newChirp.body + "</p>");
      // row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

      $("#discussion-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirp-box").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].author + " says: </p>");
      row.append("<p>" + data[i].body + "</p>");
      // row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#discussion-area").prepend(row);

    }

  }

});