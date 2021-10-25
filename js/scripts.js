$(document).ready(function() {
  $("form#favorite-things").submit(function(event) {
    event.preventDefault();
    const favOne = $("input#fav-things-1").val();
    const favTwo = $("input#fav-things-2").val();
    const favThree = $("input#fav-things-3").val();
    const favArray = [favOne, favTwo, favThree];
    favArray.push("hello");
    favArrayNew = favArray.concat(favArray);

    const brandNewArray = [];
    brandNewArray.push(favArrayNew[1], favArrayNew[0], favArrayNew[2]);
    
    brandNewArray.forEach(function(thing) {
      $("#fav-things-list").append("<li>" + thing + "!</li>");
    });
  });  
});

