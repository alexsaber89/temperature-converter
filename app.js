var userInput = document.getElementById("input_field");
var convertedTempDiv = document.getElementById("converted_temp");

function toCelsius () {
  var convertedTemp = (userInput.value - 32) * .5556;
  console.log("Converted temp: ",convertedTemp);
  convertedTempDiv.innerHTML += "<p>" + convertedTemp + "</p>";
}

function toFahrenheit () {
  var convertedTemp = (userInput.value * 1.8) + 32;
  console.log("Converted temp: ",convertedTemp);
  convertedTempDiv.innerHTML += "<p>" + convertedTemp + "</p>";
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter() {
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
    } else if (!radioButtons[i].checked && !radioButtons[i+1].checked) {
      console.log("No scale selected");
      alert("Please select desired temperature scale.");
      break;
    }
  }
}

//   // console.log("event", clickEvent);
// }

// Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);