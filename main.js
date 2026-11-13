const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}

function calculator() {
  rl.question('Enter first number: ', (n1) => {
    rl.question('Enter second number: ', (n2) => {
      rl.question('Enter operation (add/subtract/multiply/divide): ', (op) => {
        try {
          const a = Number(n1);
          const b = Number(n2);
          let result;

          if (op === 'add') result = add(a, b);
          else if (op === 'subtract') result = subtract(a, b);
          else if (op === 'multiply') result = multiply(a, b);
          else if (op === 'divide') result = divide(a, b);
          else throw new Error('Unknown operation');

          console.log(`Result: ${result}`);
        } catch (err) {
          console.log(`Error: ${err.message}`);
        } finally {
          rl.close();
        }
      });
    });
  });
}

calculator();