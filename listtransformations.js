const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange"
    },
    {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
};

// what will this return?

game["suspects"];
//[{name: 'Rusty'}, {name: 'Miss Scarlet'}]

//Loop through suspects array

function susLoop() {
  for (let i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i]);
  }
}

susLoop();

//Loop through all the properties of the suspect objects in the suspects array, mark them if you think they are guilty

var gameLoop = function() {
  for (var i = 0; i < games.suspects.length; i++) {
    for (var key in game.suspects[i]) {
      if (game.suspects[i][key] === "Rusty") {
        console.log("Found");
      } else {
        console.log("next time!");
      }
    }
  }
};
