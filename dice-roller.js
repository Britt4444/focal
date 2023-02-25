//return a random dice roll each time from 1-6
const rollResult = function () {
  return Math.floor((Math.random() * 6) + 1);
}
const numOfRolls = process.argv.slice(2);

const rollDie = function (n) {
  let result = [];
  for (let i = 0; i < numOfRolls; i++) {
    result += (rollResult());
  }
  return result; 
};

console.log(`Rolled ${numOfRolls} dice: ${rollDie(numOfRolls)}`);



/* example output
> node dice-roller.js 3
Rolled 3 dice: 2, 6, 5
*/