// Functions for basic arithmetic operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Error: Zero division error!" : a / b;

// Variables to hold the numbers and operator for the operation
let firstNum = 0;
let secondNum = 0;
let operator = "";
let result = 0; // Initialize result with a default value

// Function to perform the operation based on the operator
const operate = (firstNum, operator, secondNum) => {
    switch (operator) {
        case "+": 
            return add(firstNum, secondNum);
        case "-": 
            return subtract(firstNum, secondNum);
        case "x": 
            return multiply(firstNum, secondNum);
        case "÷": 
            return divide(firstNum, secondNum);
        case "%": 
            return firstNum % secondNum;
        default: 
            return "Error: Unsupported operator!";
    }
};

// Query selectors for the calculation and result display elements
const calculationContainer = document.querySelector('.calculation-container');
const resultContainer = document.querySelector('.result-container');

// Variables to hold the current calculation and result
let calculation = [];

// Update the calculation display element
const updateCalculationDisplay = () => {
    calculationContainer.textContent = calculation.join('');
};

// Function to handle input from the buttons
const handleInput = (value) => {
    if (value === "DEL") {
        // If the DEL button is pressed, remove the last character from the calculation
        calculation.pop();  // Use pop to remove the last element
    } else if (value === "=") {
        // When '=' is pressed, evaluate the calculation
        parseCalculation();
    } else {
        // Otherwise, add the value of the button to the calculation
        calculation.push(value);
    }

    // Update the calculation display with the new calculation
    updateCalculationDisplay();
};

// Function to parse the calculation string and extract numbers and operator
const parseCalculation = () => {
    const operators = ["+", "-", "x", "÷", "%"];
    let operatorFound = false;

    for (let i = 0; i < calculation.length; i++) {
        if (operators.includes(calculation[i])) {
            operator = calculation[i];
            firstNum = parseFloat(calculation.slice(0, i).join(''));
            secondNum = parseFloat(calculation.slice(i + 1).join(''));
            operatorFound = true;
            break;
        }
    }

    if (operatorFound) {
        result = operate(firstNum, operator, secondNum);
        resultContainer.textContent = result;
        calculation = [result]; // Store result to continue calculation
    } else {
        resultContainer.textContent = "Error: Invalid calculation!";
    }
};

// Add event listeners to all button elements
const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleInput(button.value);
    });
});
