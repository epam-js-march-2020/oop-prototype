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
function Stuffing(option) {
  
  this.type = 'stuffing';

  // Option is 'cheese' by default
  this.option = option || 'cheese';

  // Depending on the chosen option, parameters are founded automatically in prototype
  this.price = this._definePrice(this.option);
  this.calories = this._defineCalories(this.option);


}

Stuffing.prototype = FOOD;


function Hamburger(option, stuffing) {

  this.type = 'hamburger';

  // Option is 'small' by default 
  this.option = option || 'small';

  // Default stuffing by default
  this.stuffing = stuffing || new Stuffing();
  
  // Depending on the chosen option, parameters are founded automatically in prototype
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

Hamburger.prototype = FOOD;

const burg = new Hamburger('small', new Stuffing());
const another = new Hamburger('big', new Stuffing(STUFF_POTATO_NAME));
const other = new Hamburger('small', new Stuffing(STUFF_SALAD_NAME));
const def = new Hamburger();
const stuff = new Stuffing();

console.log(burg.getParameters());
console.log(another.getParameters());
console.log(other.getParameters());
console.log(def.getName());

