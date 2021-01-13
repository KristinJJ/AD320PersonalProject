"use strict"
function replaceTrivia() {
  var mainDiv = document.getElementById("changeable");
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  mainDiv.style.backgroundColor = randomColor;    
    
  var trivable = document.getElementById('trivable');

  fetch("http://numbersapi.com/random?json", {
    method: "GET",
  })
    .then((response) => {
      console.log(response);
      response.json().then(json => trivable.innerText = json.text);
    })
    .catch((err) => {
      console.error(err);
    });
}

