// define Food constructor
function Food(pName, pCalories) {
    this.name = pName;
    this.calories = parseInt(pCalories);
  }

  // initialize food array with two items
  var foods = [
    new Food("Banana", 100),
    new Food("Hot Dog", 470)
  ];

  // display food array in console
  console.log(foods);

 