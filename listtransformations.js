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

//destructure this nested data structure into two variables with the string 'red' and 'orange'

var [color, color2] = [suspects[0].color, suspects[1].color];

var [{ color: firstColor }, { color: secondColor }] = suspects;

//using functions to transform a list.

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(" ")[2],
    speak() {
      console.log("my name is ", name);
    }
  };
}

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];

var suspectList = [];

x = CreateSuspectObjects("Miss Scarlet");

for (var i = 0; i < suspects.length; i++) {
  suspetsList.push(CreateSuspectObjects(suspects[i]));
}

//_.each practice

const _ = {};

_.each = function(list, callback) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      // call the callback with a list item
      callback(list[i], i, list);
    }
  } else {
    // meaning if it's an object
    //loop through list
    // call the callback with a list item
    for (var ket in list) {
      callback(list[key], key, list);
    }
  }
};

_.each(["sally", "georgie", "othername"], function(name, i) {
  if (list[i + 1]) {
    console.log(name, "is younger than", list[i + 1]);
  } else {
    console.log(name, "is the oldest");
  }
});

// _.map practice

const weapons = ["candlestick", "lead pipe", "revolver"];

const makeBroken = function(item) {
  return `broken ${item}`;
};

const brokenWeapons = _.map(weapons, makeBroken);

brokenWeapons;
// returns an array that says (ex: ['broken candlestick', 'broken pipe', 'broken revolver'])

// practicing looping with _.map

_.map = function(list, callback) {
  //create an empty array to store
  var storage = [];
  //loop
  for (var i = 0; i < list.length; i++) {
    //callback(element)
    //push it to our array
    storage.push(callback(list[i], i, list));
  }
  //return []
  return storage;
};

_.map([1, 2, 3], function(val) {
  return val + 1;
});

// same thing using each instead
_.map = function(list, callback) {
  var storage = [];
  _.each(list, function(v, i, list) {
    storage.push(callback(v, i, list));
  });
  return storage;
};

_.map([1, 2, 3], function(val) {
  return val + 1;
});

// FILTER PRACTICE

const _ = {};

_.filter = function(arr, cb) {
  //create new array
  const storage = [];
  //loop through the array
  for (let i = 0; i < arr.length; i++) {
    //check if cb returns true

    if (cb(arr[i], i, arr) === true) {
      //if returns true, push into array
      storage.push(arr[i]);
    }
  }
  //return arr
  return storage;
};

// same thing using each instead

const _ = {};

_.filter = function(arr, cb) {
  //create new array
  const storage = [];
  //loop through the array
  _.each(arr, function(val, i, list) {
    if (cb(val, i, list)) storage.push(item);
  });
  //return arr
  return storage;
};

// EXAMPLE DATA IN SLIDES

// just taking notes on filter functionality with data.

const _ = {};

_.filter(videoData, function(suspectObject) {
  return suspectObject.present;
});
