// Selecting elements
const result = document.getElementById("result");

// Function to insert characters in the result field
function insertChar(char) {
  result.value += char;
}

// Function to delete the last character in the result field
function deleteChar() {
  result.value = result.value.slice(0, -1);
}

// Function to clear the result field
function clearScreen() {
  result.value = "";
}

// Function to evaluate the expression in the result field
function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}
