document.getElementById("getRandomProgrammingJoke").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("programming joke");

    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
      .then(function(response){
        return response.json();
      }).then(function(json){
          console.log(json);
          console.log(json[0].id);

          let joke = "";
          joke += '<h2 id=setup>' + json[0].setup + '</h2>';

          joke += '<button id=showPunchLineButton onclick=\"unHidePunchline()\">Show Punchline</button>';

          joke += '<div id=jokePunchline style=\"display:none\">' + '<h3>' + json[0].punchline + '</h3></div>';

          document.getElementById("joke").innerHTML = joke;
      });
});

document.getElementById("getRandomJoke").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("non-programming joke");

    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then(function(response){
        return response.json();
      }).then(function(json){
          console.log(json);

          let joke = "";
          joke += '<h2 id=setup>' + json.setup + '</h2>';

          joke += '<button id=showPunchLineButton onclick=\"unHidePunchline()\">Show Punchline</button>';

          joke += '<div id=jokePunchline style=\"display:none\">' + '<h3>' + json.punchline + '</h3></div>';

          document.getElementById("joke").innerHTML = joke;
      });
});

function unHidePunchline(){
    var e = document.getElementById("jokePunchline");
    e.style.display = "block";
};
