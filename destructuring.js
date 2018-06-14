//EXAMPLE
var obj = { first: "Shanelle", last: "Webster" };

var first = obj.first;
var last = obj.last;

//arrays
//match because of order
const [first, second] = [true, false];

//object
// match because of name
let { first1, second1 } = { first1: 0, second1: 1 };

// destructuring challenge

// example object

const suspect = { name: "Rusty", room: "kitchen", weapon: "candlestick" };

//extract weapon

const { name, weapon, room } = {
  name: "Rusty",
  room: "kitchen",
  weapon: "candlestick"
};

//ABOVE IS THE SAME AS

var weapon = suspect.weapon;
var location = suspect.location;
