const TYPES = require('./consts_food_params').TYPES;
const OPTIONS = require('./consts_food_params').OPTIONS;

// Importing FOOD object (considering it abstract class)
const FOOD = require('./abstract_class_food.js');

// Constructor for drinks objects
function Salad(option) {
  
  FOOD.call(this, TYPES.SALAD_TYPE, option || OPTIONS.SALAD_CEASER_NAME);
  // this.type = SALAD_TYPE;

  // // Option is 'cola' by default
  // this.option = option || SALAD_CEASER_NAME;

  // // Depending on the chosen option, parameters are founded automatically in the prototype
  // this.price = this._definePrice(this.option);
  // this.calories = this._defineCalories(this.option);


}

Salad.prototype = Object.create(FOOD.prototype);
module.exports.Salad = Salad;
// Setting prototype
// module.exports.Salad.prototype = FOOD;
