// Select DOM elements
<<<<<<< HEAD
const display = document.getElementById("calc-display");
const buttons = document.querySelectorAll(".btn");
const startButton = document.getElementById("start-btn");
const speechOutput = document.getElementById("speech-output");
const resultOutput = document.getElementById("result");
=======
const display = document.getElementById('calc-display');
const buttons = document.querySelectorAll('.btn');
const startButton = document.getElementById('start-btn');
const speechOutput = document.getElementById('speech-output');
const resultOutput = document.getElementById('result');
>>>>>>> a51d011e481f3fdad2e1922a4636633c6bb45ce8

// Initialize speech recognition API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
<<<<<<< HEAD
recognition.lang = "en-US";
=======
recognition.lang = 'en-US';
>>>>>>> a51d011e481f3fdad2e1922a4636633c6bb45ce8
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Initialize expression variable
<<<<<<< HEAD
let currentExpression = "";

// Handle traditional button input
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      // Clear the display and reset the expression
      display.value = "";
      currentExpression = "";
    } else if (value === "=") {
      // Evaluate the current expression
      try {
        const result = eval(currentExpression);
        display.value = result;
        currentExpression = result.toString(); // Set result as the new expression
      } catch {
        display.value = "Error";
        currentExpression = "";
      }
    } else {
      // Append the button value to the current expression
      currentExpression += value;
      display.value = currentExpression;
    }
  });
});

// Start speech recognition when button is clicked
startButton.addEventListener("click", () => {
  recognition.start();
=======
let currentExpression = '';

// Handle traditional button input
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            // Clear the display and reset the expression
            display.value = '';
            currentExpression = '';
        } else if (value === '=') {
            // Evaluate the current expression
            try {
                const result = eval(currentExpression);
                display.value = result;
                currentExpression = result.toString(); // Set result as the new expression
            } catch {
                display.value = 'Error';
                currentExpression = '';
            }
        } else {
            // Append the button value to the current expression                                                                                                     
            currentExpression += value;
            display.value = currentExpression;
        }
    });
});

// Start speech recognition when button is clicked
startButton.addEventListener('click', () => {
    recognition.start();
>>>>>>> a51d011e481f3fdad2e1922a4636633c6bb45ce8
});

// Handle voice recognition result
recognition.onresult = (event) => {
<<<<<<< HEAD
  const speech = event.results[0][0].transcript.trim(); // Get recognized speech
  speechOutput.textContent = `You said: "${speech}"`;

  // Convert voice command to expression and calculate
  const result = calculateExpression(speech);
  resultOutput.textContent = result;
  display.value = result; // Also display the result in the calculator screen
  currentExpression = result.toString(); // Store result for next operation
=======
    const speech = event.results[0][0].transcript.trim();  // Get recognized speech
    speechOutput.textContent = `You said: "${speech}"`;

    // Convert voice command to expression and calculate
    const result = calculateExpression(speech);
    resultOutput.textContent = result;
    display.value = result;  // Also display the result in the calculator screen
    currentExpression = result.toString();  // Store result for next operation
>>>>>>> a51d011e481f3fdad2e1922a4636633c6bb45ce8
};

// Speech recognition error handling
recognition.onerror = (event) => {
<<<<<<< HEAD
  speechOutput.textContent = `Error occurred: ${event.error}`;
=======
    speechOutput.textContent = `Error occurred: ${event.error}`;
>>>>>>> a51d011e481f3fdad2e1922a4636633c6bb45ce8
};

// Parse and evaluate math expressions from voice input
function calculateExpression(expression) {
<<<<<<< HEAD
  // Convert spoken words to mathematical symbols
  expression = expression.toLowerCase();
  expression = expression.replace(/plus/g, "+");
  expression = expression.replace(/minus/g, "-");
  expression = expression.replace(/times/g, "*");
  expression = expression.replace(/multiplied by/g, "*");
  expression = expression.replace(/divided by/g, "/");

  try {
    const result = eval(expression); // Evaluate the math expression
    return result ? result : "Couldn't compute that!"; // Return result or error
  } catch (e) {
    return "Error in calculation!"; // Return an error if evaluation fails
  }
=======
    // Convert spoken words to mathematical symbols
    expression = expression.toLowerCase();
    expression = expression.replace(/plus/g, '+');
    expression = expression.replace(/minus/g, '-');
    expression = expression.replace(/times/g, '*');
    expression = expression.replace(/multiplied by/g, '*');
    expression = expression.replace(/divided by/g, '/');
    
    try {
        const result = eval(expression);  // Evaluate the math expression
        return result ? result : "Couldn't compute that!";  // Return result or error
    } catch (e) {
        return "Error in calculation!";  // Return an error if evaluation fails
    }
>>>>>>> a51d011e481f3fdad2e1922a4636633c6bb45ce8
}
