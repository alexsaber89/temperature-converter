var userInput = document.getElementById("input_field");
var convertedTempDiv = document.getElementById("converted_temp");

//Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var clearButton = document.getElementById("clear");

//check if user checked a radio button
//check if user entered a value
function inputValidation() {
  var userInputText = document.getElementById("input_field").value;
  var radioButtons = document.getElementsByName("temp_input");
  console.log("Radio buttons value: ",radioButtons);

  //passes both the requested scale and the user's input to determineConverter()
  if (radioButtons[0].checked) {
    determineConverter(radioButtons[0].value, userInputText);
  } else if (radioButtons[1].checked) {
    determineConverter(radioButtons[1].value, userInputText);
  } else {
    console.log("No scale selected");
    alert("Please select desired temperature scale.");
  }
  if (userInputText === "") {
    alert("Please enter a temperature");
  }
}

//determine which scale conversion to run
//uses scale passed in by inputValidation()
function determineConverter(scale, userInputText) {
  console.log("Scale: ",scale);
  if(scale === "celsius") {
    console.log(scale + " has been checked");
    console.log("toCelsius() will run");

    //passes user's input as argument for toCelsius()
    toCelsius(userInputText);
  } else {
    console.log(scale + " has been checked");
    console.log("toFahrenheit() will run");

    //passes user's input as argument for toFahrenheit()
    toFahrenheit(userInputText);
  }
}

//celsius temperature conversion functions
function toCelsius(rawTemp) {
  var convertedToCelsius = (rawTemp - 32) * .5556;
  var result;
  console.log("Converted temp: ",convertedToCelsius);
  if (convertedToCelsius > 32) {
    result = "<p class='celsius red'>" + convertedToCelsius + "</p>";
  } else if (convertedToCelsius < 0) {
    result = "<p class='celsius blue'>" + convertedToCelsius + "</p>";
  } else {
    result = "<p class='celsius'>" + convertedToCelsius + "</p>";
  }
  convertedTempDiv.innerHTML = result;
}

//fahrenheit temperature conversion functions
function toFahrenheit(rawTemp) {
  var convertedToFahrenheit = (rawTemp * 1.8) + 32;
  var result;
  console.log("Converted temp: ",convertedToFahrenheit);
  if (convertedToFahrenheit > 90) {
    result = "<p class='celsius red'>" + convertedToFahrenheit + "</p>";
  } else if (convertedToFahrenheit < 32) {
    result = "<p class='celsius blue'>" + convertedToFahrenheit + "</p>";
  } else {
    result = "<p class='celsius'>" + convertedToFahrenheit + "</p>";
  }
  convertedTempDiv.innerHTML = result;
}

//Figure out if the user pressed Enter after entering a value
userInput.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    determineConverter();
  }
});

//Determine which radio button the user clicked, then run callback inputValidation
button.addEventListener("click", inputValidation);

//Use clear button to clear user's input
function clearInputField() {
  userInput = "";
  console.log("User input cleared");
};
clearButton.addEventListener("click", clearInputField);