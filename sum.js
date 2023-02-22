let args = process.argv.slice(2);
//convert remaining array items to integers
let argsInt = args.map(Number);
//function using reduce to sum all array items
const sumOfArgs = argsInt.reduce((a, b) => {
  return a + b;
});
console.log(sumOfArgs);
