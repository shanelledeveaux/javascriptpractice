// Create an object using bracket and dot notation that represents the characters and related data you may find in a game of Clue.

var game = {};

game.murderer = "?";

//use arrays when making a list, objects when you need to label
game["weapons"] = [
  { type: "lasers", location: "lab" },
  { type: "angry cats", location: "lab" },
  { type: "dish soap", location: "lab" }
];

game.name = [];

game.name[0] = "Miss Scarlet";
game.name.push("Mr. Green")[
  //now the array will look like:
  ("Miss Scarlet", "Mr. Green")
];
