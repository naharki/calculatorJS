let input = document.getElementById('input');

//this code takes the value and pass to input 
function appendToInput(value) {
  input.value += value;
}
// this clears the input or set to ' '
function clearInput() {
  input.value = '';
}

// Actual calculation with try and catch for error handeling 
function calculate() {
  try {
    let result = eval(input.value);
    input.value = result;
  } catch (error) {
    alert('Invalid calculation');
  }
}

