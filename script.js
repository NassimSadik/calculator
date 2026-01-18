let firstNumber = '',
  secondNumber = '',
  operator = '';

function operate(firstNumber, secondNumber, operator) {
  const a = parseFloat(firstNumber);
  const b = parseFloat(secondNumber);

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b == 0 ? 'Error' : (a / b).toFixed(2);
  }
}

const display = document.querySelector('.display-text');

function updateDisplay(content) {
  display.textContent = content;
}

const numberContainer = document.querySelector('.number-container');
const numbers = '0123456789';

for (let i = 0; i < numbers.length; i++) {
  const newButton = document.createElement('button');
  if (i == 0) {
    newButton.classList.add(`zero`);
  }
  newButton.classList.add(`numbers`);
  newButton.textContent = i;

  newButton.addEventListener('click', (e) => {
    const digit = e.target.textContent;

    if (operator == '') {
      firstNumber += digit;
      updateDisplay(firstNumber);
    } else {
      secondNumber += digit;
      updateDisplay(secondNumber);
    }
  });

  numberContainer.appendChild(newButton);
}

const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach((item) => {
  item.addEventListener('click', (e) => {
    const currentOperator = e.target.textContent;

    if (operator !== '' && secondNumber !== '') {
      const result = operate(firstNumber, secondNumber, operator);
      firstNumber = String(result);
      secondNumber = '';
      updateDisplay(firstNumber);
    }

    if (currentOperator == 'C') {
      firstNumber = '';
      secondNumber = '';
      operator = '';
      updateDisplay('');
    } else if (currentOperator == '=') {
      if (firstNumber == '' || operator == '' || secondNumber == '') return;
      const result = operate(firstNumber, secondNumber, operator);
      updateDisplay(result);
    } else {
      operator = currentOperator;
    }
  });
});
