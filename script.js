"use strict";

// DOM Elements
display = document.getElementById('display');

// Display numbers
function appendToDisplay(item) {
  display.value += item;
  return display;
}

// All Clear Button
function clearDisplay() {
  display.value = '';
}

// Calculate Result
function calculateResult() {
  display.value = eval(display.value);
}