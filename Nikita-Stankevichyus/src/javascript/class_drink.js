const TYPES = require('./consts_food_params').TYPES;
const OPTIONS = require('./consts_food_params').OPTIONS;

// Importing FOOD object (considering it abstract class)
const FOOD = require('./abstract_class_food.js');

// Constructor for drinks objects
function Drink(option) {

  FOOD.call(this, TYPES.DRINK_TYPE, option || OPTIONS.DRINK_COFFEE_NAME);

}

Drink.prototype = Object.create(FOOD.prototype);

module.exports.Drink = Drink;
// module.exports.Drink = function(option) {
  
//   this.type = DRINK_TYPE;

//   // Option is cola by default
//   this.option = option || DRINK_COLA_NAME;

//   // Depending on the chosen option, parameters are founded automatically in the prototype
//   this.price = this._definePrice(this.option);
//   this.calories = this._defineCalories(this.option);


// }

// // Setting prototype
// module.exports.Drink.prototype = FOOD;
