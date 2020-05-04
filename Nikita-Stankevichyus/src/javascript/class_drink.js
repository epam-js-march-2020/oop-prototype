const DRINK_TYPE = require('./consts_food_params.js').DRINK_TYPE;
const DRINK_COLA_NAME = require('./consts_food_params.js').DRINK_COLA_NAME;

// Not used. Here in case it's requested to change default value
const DRINK_COFFEE_NAME = require('./consts_food_params.js').DRINK_COFFEE_NAME;


// Importing FOOD object (considering it abstract class)
const FOOD = require('./abstract_class_food.js').FOOD;

// Constructor for drinks objects
module.exports.Drink = function(option) {
  
  this.type = DRINK_TYPE;

  // Option is cola by default
  this.option = option || DRINK_COLA_NAME;

  // Depending on the chosen option, parameters are founded automatically in the prototype
  this.price = this._definePrice(this.option);
  this.calories = this._defineCalories(this.option);


}

// Setting prototype
module.exports.Drink.prototype = FOOD;
