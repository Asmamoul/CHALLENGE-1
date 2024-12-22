// Script: challenge one

// Variable containing the message
let message = "There is no war in Ba Sing Se";

// Function to count words in the message
function countWords(text) {
  // Split the string by spaces and filter out empty strings
  return text.split(" ").filter((word) => word.trim() !== "").length;
}

// Count the words in the message
let wordCount = countWords(message);

// Output the word count
console.log(`The message contains ${wordCount} words.`);

// New functionality: Display countries with their capitals
let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capital = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];

// Loop through the arrays and display the country-capital pairs
for (let i = 0; i < countries.length; i++) {
  console.log(
    `Your country: ${countries[i]} has the capital named: ${capital[i]}.`
  );
}

// Titan fate predictor
let randomizer = Math.floor(Math.random() * 4); // Random number between 0 and 3
let fate;

switch (randomizer) {
  case 0:
    fate = "A certain victory";
    break;
  case 1:
    fate = "Not so certain victory";
    break;
  case 2:
    fate = "An uneasy victory";
    break;
  default:
    fate = "Your fate is unclear, ô chosen undead";
}

// Output the fate
console.log(`The Titan predicts: ${fate}`);

// Function to determine the season based on the month
function checkSeason(month) {
  month = month.toLowerCase(); // Convert to lowercase for case-insensitive comparison

  if (["september", "october", "november"].includes(month)) {
    return "Autumn";
  } else if (["december", "january", "february"].includes(month)) {
    return "Winter";
  } else if (["march", "april", "may"].includes(month)) {
    return "Spring";
  } else if (["june", "july", "august"].includes(month)) {
    return "Summer";
  } else {
    return "Invalid month. Please enter a valid month name.";
  }
}

// Example usage
let currentMonth = "December";
console.log(`The current season is: ${checkSeason(currentMonth)}`);
