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
