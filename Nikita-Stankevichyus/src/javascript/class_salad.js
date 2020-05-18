const TYPES = require('./consts_food_params').TYPES;
const OPTIONS = require('./consts_food_params').OPTIONS;

// Importing FOOD object (considering it abstract class)
const FOOD = require('./abstract_class_food.js');

// Constructor for drinks objects
function Salad(option) {
  
  FOOD.call(this, TYPES.SALAD_TYPE, option || OPTIONS.SALAD_CEASER_NAME);

}

Salad.prototype = Object.create(FOOD.prototype);
module.exports.Salad = Salad;
