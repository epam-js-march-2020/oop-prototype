
const OPTIONS = require('./consts_food_params.js').OPTIONS;
const PRICES = require('./consts_food_params.js').PRICES;
const CALORIES = require('./consts_food_params.js').CALORIES;

function FOOD(type, option) {

  this.type = type;
  this.option = option;

  this.price = this._definePrice(this.option);
  this.calories = this._defineCalories(this.option);

}

FOOD.prototype._definePrice = function(option) {
  return this._prices[option];
}

FOOD.prototype._defineCalories = function(option) {
  return this._calories[option];
}

FOOD.prototype.getType = function() {
  return this.type;
},

// Option is advanced type of the food (For hamburgers it's size, for drink this is either cola or coffee, etc)
FOOD.prototype.getOption = function(){
  return this.option;
},

// Name is option + type
FOOD.prototype.getName = function(){
  return this.option + ' ' + this.type;
},

// Gettin price. If object is hamburger -- price is calculated via corresponding method
FOOD.prototype.getPrice = function(){
  return this.price;
},

 // Gettin calories. If object is hamburger -- calories are calculated via corresponding method
FOOD.prototype.getCalories = function(){
  return this.calories;
},

// Parameters are price + calories with measurement units. It takes hamburger's stuffing in consideration too
FOOD.prototype.getParameters = function(){
  return this.price + 'tg' + ' ' 
       + this.calories + 'cal';
},

// getName + getParameters. Mainly for testing matters
FOOD.prototype.getFullDescription = function(){
  return this.getName() + ' ' + this.getParameters();
},

// Size is method specific for hamburgers. Not sure if it's needed
FOOD.prototype.geSize = function(){
  return this.size ? this.size : '';
},

// Stuffing is method specific for hamburgers. Not sure if it's needed
FOOD.prototype.getStuffing = function(){
  return this.stuffing ? this.stuffing : '';
},

// Those are crying for map data structure
FOOD.prototype._prices = {

  [OPTIONS.BURGER_SM_NAME]: PRICES.BURGER_SM_PRICE,
  [OPTIONS.BURGER_BIG_NAME]: PRICES.BURGER_BIG_PRICE,

  [OPTIONS.STUFF_CHEESE_NAME]: PRICES.STUFF_CHEESE_PRICE,
  [OPTIONS.STUFF_SALAD_NAME]: PRICES.STUFF_SALAD_PRICE,
  [OPTIONS.STUFF_POTATO_NAME]: PRICES.STUFF_POTATO_PRICE,

  [OPTIONS.SALAD_CEASER_NAME]: PRICES.SALAD_CEASER_PRICE,
  [OPTIONS.SALAD_OLIVIE_NAME]: PRICES.SALAD_OLIVIE_PRICE,

  [OPTIONS.DRINK_COLA_NAME]: PRICES.DRINK_COLA_PRICE,
  [OPTIONS.DRINK_COFFEE_NAME]: PRICES.DRINK_COFFEE_PRICE,

}

FOOD.prototype._calories ={

  [OPTIONS.BURGER_SM_NAME]: CALORIES.BURGER_SM_CALS,
  [OPTIONS.BURGER_BIG_NAME]: CALORIES.BURGER_BIG_CALS,

  [OPTIONS.STUFF_CHEESE_NAME]: CALORIES.STUFF_CHEESE_CALS,
  [OPTIONS.STUFF_SALAD_NAME]: CALORIES.STUFF_SALAD_CALS,
  [OPTIONS.STUFF_POTATO_NAME]: CALORIES.STUFF_POTATO_CALS,

  [OPTIONS.SALAD_CEASER_NAME]: CALORIES.SALAD_CEASER_CALS,
  [OPTIONS.SALAD_OLIVIE_NAME]: CALORIES.SALAD_OLIVIE_CALS,

  [OPTIONS.DRINK_COLA_NAME]: CALORIES.DRINK_COLA_CALS,
  [OPTIONS.DRINK_COFFEE_NAME]: CALORIES.DRINK_COFFEE_CALS,
  
}

module.exports = FOOD;

