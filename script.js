let currentInput = '';
let operator = '';
let previousInput = '';

const display = document.getElementById('display');

// Function to append a number to the display
function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

// Function to set the operator
function setOperator(op) {
    if (currentInput === '') return; // Do nothing if the display is empty
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}

// Function to perform the calculation
function calculate() {
    if (currentInput === '' || previousInput === '' || operator === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero');
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    // Update the display with the result
    display.value = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}
