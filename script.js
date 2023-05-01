// Get the HTML elements we need to manipulate
const foodNameInput = document.getElementById("food-name");
const caloriesInput = document.getElementById("calories");
const foodListDiv = document.getElementById("food-list");
const submitButton = document.getElementById("submit");
const totalCaloriesField = document.getElementById("total-calories");

// Define a variable to hold the total number of calories
let totalCalories = 0;

// Add the calories of the banana and hotdog to the total calories
totalCalories += 100 + 370;

// Add an event listener to the submit button to handle new food submissions
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Get the food name and number of calories input values
  const foodName = foodNameInput.value;
  const calories = parseInt(caloriesInput.value);

  // Add the new food to the list
  const foodItemDiv = document.createElement("div");
  foodItemDiv.className = "food-item";
  const foodNameSpan = document.createElement("span");
  foodNameSpan.textContent = foodName;
  const caloriesSpan = document.createElement("span");
  caloriesSpan.textContent = calories;
  foodItemDiv.appendChild(foodNameSpan);
  foodItemDiv.appendChild(caloriesSpan);
  foodListDiv.appendChild(foodItemDiv);

  // Add the calories to the total
  totalCalories += calories;

  // Update the total calories field value
  totalCaloriesField.value = totalCalories;

  // Clear the food name and calories input fields
  foodNameInput.value = "";
  caloriesInput.value = "";
});
