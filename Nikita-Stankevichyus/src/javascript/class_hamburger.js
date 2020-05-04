const BURGER_TYPE = require('./consts_food_params.js').BURGER_TYPE;

const BURGER_SM_NAME = require('./consts_food_params.js').BURGER_SM_NAME;

// Not used. Here in case it's requested to change default value
const BURGER_BIG_NAME = require('./consts_food_params.js').BURGER_BIG_NAME;


const STUFF_TYPE = require('./consts_food_params.js').STUFF_TYPE;

const STUFF_CHEESE_NAME = require('./consts_food_params.js').STUFF_CHEESE_NAME;

// Not used. Here in case it's requested to change default value
const STUFF_SALAD_NAME = require('./consts_food_params.js').STUFF_SALAD_NAME;
const STUFF_POTATO_NAME = require('./consts_food_params.js').STUFF_POTATO_NAME;




// Importing FOOD object (considering it abstract class)
const FOOD = require('./abstract_class_food.js').FOOD;


// Constructor for stuffing objects
module.exports.Stuffing = function(option) {
  
  this.type = STUFF_TYPE;

  // Option is cheese by default
  this.option = option || STUFF_CHEESE_NAME;

  // Depending on the chosen option, parameters are founded automatically in the prototype
  this.price = this._definePrice(this.option);
  this.calories = this._defineCalories(this.option);


}

module.exports.Stuffing.prototype = FOOD;


module.exports.Hamburger = function(option, stuffing) {

  this.type = BURGER_TYPE;

  // Option is small by default 
  this.option = option || BURGER_SM_NAME;

  // Default stuffing by default
  this.stuffing = stuffing || new Stuffing();
  
  // Depending on the chosen option, parameters are founded automatically in the prototype
  this.price = this._definePrice(this.option);
  this.calories = this._defineCalories(this.option);

  // Calculates total parameters for hamburger with stuffing
  this._calculatePrice = function(){
    return this.price + this.stuffing.price;
  }  

  this._calculateCalories = function(){
    return this.calories + this.stuffing.calories;
  }


}

// Setting prototype
module.exports.Hamburger.prototype = FOOD;

