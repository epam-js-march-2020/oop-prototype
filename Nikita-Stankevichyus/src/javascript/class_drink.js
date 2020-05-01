/*
 * OPTIONS' NAMES
*/

const DRINK_COLA_NAME = require('./consts_food_params.js').DRINK_COLA_NAME;
const DRINK_COFFEE_NAME = require('./consts_food_params.js').DRINK_COFFEE_NAME;

// Importing FOOD object (considering it abstract class)
const FOOD = require('./abstract_class_food.js').FOOD;

// Constructor for drinks objects
function Drink(option) {
  
  this.type = 'drink';

  // Option is 'cola' by default
  this.option = option || 'cola';

  // Depending on the chosen option, parameters are founded automatically in the prototype
  this.price = this._definePrice(this.option);
  this.calories = this._defineCalories(this.option);


}

Drink.prototype = FOOD;

const kek = new Drink();
const shek = new Drink(DRINK_COLA_NAME);
const cheburek = new Drink(DRINK_COFFEE_NAME);

console.log(kek.getFullDescription());
console.log(shek.getFullDescription());
console.log(cheburek.getFullDescription());