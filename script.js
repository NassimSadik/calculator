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

const numberContainer = document.querySelector(".number-container")
const numbers = '0123456789'

for (let i = 0; i < numbers.length; i++) {
  const newButton = document.createElement("button")
  newButton.classList.add(`button-${i}`)
  newButton.textContent = `${numbers[i]}`

  numberContainer.appendChild(newButton)
}