let firstNumber, secondNumber, operator;

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
  }
}

console.log(operate(10, 11, '+')); 
// Expected output : 21
