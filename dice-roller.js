//function to return a random dice roll each time from 1-6
const rollResult = function() {  
  return Math.floor((Math.random() * 6) + 1);
};
//slice out index 0 and 1 
const numOfRolls = process.argv.slice(2);

const rollDie = function() {
  let result = [];
  //must use numOfRolls rather than numOfRolls.length, which will always be 1 here
  for (let i = 0; i < numOfRolls; i++) {
  //for each numOfRolls, return result of rollResult
    result += (rollResult());
  }
  //split into single digits, add comma and space
  result = ("" + result).split("").join(", ");
  return result;
};

console.log(`Rolled ${numOfRolls} dice: ${rollDie(numOfRolls)}`);



/* example output
> node dice-roller.js 3
Rolled 3 dice: 2, 6, 5
*/