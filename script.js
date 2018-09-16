//We will add colors using rgb
const colors = ["red", "blue", "purple", "green", "brown", "orange"];
$("#new-quote").click(function() {
  let index = Math.floor(Math.random()*colors.length);
  $("body").css("background-color", colors[index]);
  $("#text").css("color", colors[index]);
  $("#author").css("color",colors[index]);
  $("#tweet").css("background-color", colors[index]);
  $("#new-quote").css("background-color", colors[index]);
});

//Generate a new quote using quotes by design API

$("#new-quote").on('click', function() {
  $.getJSON({url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", cache: false})
  .then(function(event) {
    $("#text").html("<em>" + event[0].content + "</em>");
    $("#author").html("-" + event[0].title);
  })
});

//add a tweet button that encodes text into tweet
function TweetThis() {
  var text = $("#text").text() + $("#author").text();
  window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(text));
};