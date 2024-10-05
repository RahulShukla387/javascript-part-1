let name = prompt("enter the name "); // but this code will not run in the node js
console.log(name); 
// to run you can use this alternative
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the name: ', (firstName) => {
  console.log(firstName);
  rl.close();
});
