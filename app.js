var userInput = document.getElementById("input_field");
var convertedTempDiv = document.getElementById("converted_temp");

//temperature conversion functions
function toCelsius () {
  var convertedTemp = (userInput.value - 32) * .5556;
  var result;
  console.log("Converted temp: ",convertedTemp);
  if (convertedTemp > 32) {
    result = "<p class='celsius red'>" + convertedTemp + "</p>";
  } else if (convertedTemp < 0) {
    result = "<p class='celsius blue'>" + convertedTemp + "</p>";
  } else {
    result = "<p class='celsius'>" + convertedTemp + "</p>";
  }
  convertedTempDiv.innerHTML = result;
}

function toFahrenheit () {
  var convertedTemp = (userInput.value * 1.8) + 32;
  var result;
  console.log("Converted temp: ",convertedTemp);
  if (convertedTemp > 90) {
    result = "<p class='celsius red'>" + convertedTemp + "</p>";
  } else if (convertedTemp < 32) {
    result = "<p class='celsius blue'>" + convertedTemp + "</p>";
  } else {
    result = "<p class='celsius'>" + convertedTemp + "</p>";
  }
  convertedTempDiv.innerHTML = result;
}

//Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var clearButton = document.getElementById("clear");

//Figure out if the user pressed Enter after entering a value


//Figure out which radio button the user clicked, then call the relevant function
button.addEventListener("click", function determineConverter() {
  var radioButtons = document.getElementsByName("temp_input");
  for (var i = 1; i < radioButtons.length; i++) {
    if(radioButtons[i].checked && radioButtons[i].value === "celsius") {
        console.log(radioButtons[i].value + " has been checked");
        console.log("toCelsius() will run");
        toCelsius();
        break;
    } else if (radioButtons[i].checked && radioButtons[i].value === "fahrenheit") {
        console.log(radioButtons[i].value + " has been checked");
        console.log("toFahrenheit() will run");
        toFahrenheit();
      break;
    } else if (userInput.value === "") {
        alert("Please enter a temperature");
        break;
    } else if (!radioButtons[i].checked && !radioButtons[i+1].checked) {
        console.log("No scale selected");
        alert("Please select desired temperature scale.");
        break;
    }
  }
});

//Use clear button to clear user's input
clearButton.addEventListener("click", function clearInputField() {
  userInput.value = "";
  console.log("User input cleared");
});

//   // console.log("event", clickEvent);
// }

// Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);