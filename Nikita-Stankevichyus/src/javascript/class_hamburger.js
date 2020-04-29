/*
 * OPTIONS' NAMES
*/

// Hamburgers
const BURGER_SM_NAME = require('./consts_food_params.js').BURGER_SM_NAME;
const BURGER_BIG_NAME = require('./consts_food_params.js').BURGER_BIG_NAME;

// Stuffings
const STUFF_CHEESE_NAME = require('./consts_food_params.js').STUFF_CHEESE_NAME;
const STUFF_SALAD_NAME = require('./consts_food_params.js').STUFF_POTATO_NAME;
const STUFF_POTATO_NAME = require('./consts_food_params.js').STUFF_SALAD_NAME;


/*
 * PRICES
*/


const BURGER_SM_PRICE = require('./consts_food_params.js').BURGER_SM_PRICE;
const BURGER_BIG_PRICE = require('./consts_food_params.js').BURGER_BIG_PRICE;

// Stuffings
const STUFF_CHEESE_PRICE = require('./consts_food_params.js').STUFF_CHEESE_PRICE;
const STUFF_SALAD_PRICE = require('./consts_food_params.js').STUFF_SALAD_PRICE;
const STUFF_POTATO_PRICE = require('./consts_food_params.js').STUFF_POTATO_PRICE;



/*
 * CALORIES
*/

// Hamburgers
const BURGER_SM_CALS = require('./consts_food_params.js').BURGER_SM_CALS;
const BURGER_BIG_CALS = require('./consts_food_params.js').BURGER_BIG_CALS;

// Stuffings
const STUFF_CHEESE_CALS = require('./consts_food_params.js').STUFF_CHEESE_CALS;
const STUFF_SALAD_CALS = require('./consts_food_params.js').STUFF_SALAD_CALS;
const STUFF_POTATO_CALS = require('./consts_food_params.js').STUFF_POTATO_CALS;

// Importing FOOD object (considering it abstract class)
const FOOD = require('./abstract_class_food.js').FOOD;


// Constructor for stuffing objects
function Stuffing(option='cheese', price, calories) {
  
  this.type = 'stuffing';

  // 
  this.option = option;
  this.price = price;
  this.calories = calories;


}

Stuffing.prototype = FOOD;


function Hamburger(option, calories, stuffing) {

  this.type = 'hamburger';
  this.option = option;
  
  // Depending on the chosen option, price is founded automatically in prototype
  this.price = this.prices[option];
  this.calories = calories;

  this.stuffing = stuffing;

  this.calculateCalories = function(){

  }
}

Hamburger.prototype = FOOD;

const burg = new Hamburger('small', 1, 2, 'kek');

console.log(burg.price);

