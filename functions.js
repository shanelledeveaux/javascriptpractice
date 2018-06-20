//FUNCTIONS IN DEPTH

//THINGS IN CURLY BRACKETS DO NOT RUN UNLESS THEY ARE INVOKED!!! DUH. BUT HARD TO REMEMBER.

// FUNCTION DEFINITION COMES AFTER THE "FUNCTION" KEYWORD.

// FUNCTION NAME DEPENDS ON SCOPE.

// FUNCTION BODY COMES IN THE RETURN OR IN A CONSOLE.LOG.

// INVOCATION USUALLY HAPPEN IN PARETHESIS. COULD BE IN A MEATHOD.

// PARAMETERS ARE VARIABLE NAMES, ARGUMENTS ARE THE VALUES.

// SIDE EFFECT IS ANYTHING THAT REACHES OUTSIDE OF A THE CURLY BRACES.

//take filtered data and move it into an array of strings.

const suspectsName = _.map(suspects, suspect => {
  return suspects.name;
});

//spread operator gathers extra data at the end and puts it into an array.

const createTuple = (a, b, c, ...d) => {
  console.log(arguments);
  return [[a, c], [b, d]];
};

createTuple("It", "be", "could", "anyone", "no one");

// you have to have a function keyword to use an argument keyword.

const createTuple = function(a, b, c, ...d) {
  console.log(arguments);
  return [[a, c], [b, d]];
};

createTuple("It", "be", "could", "anyone", "no one");
