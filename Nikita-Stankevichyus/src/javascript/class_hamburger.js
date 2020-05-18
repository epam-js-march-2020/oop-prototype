const TYPES = require('./consts_food_params').TYPES;
const OPTIONS = require('./consts_food_params').OPTIONS;


// Importing FOOD object (considering it abstract class)
const FOOD = require('./abstract_class_food.js');


// Constructor for stuffing objects
function Stuffing (option) {

  FOOD.call(this, TYPES.STUFF_TYPE, option || OPTIONS.STUFF_CHEESE_NAME)
  
  // this.type = STUFF_TYPE;

  // // Option is cheese by default
  // this.option = option || STUFF_CHEESE_NAME;

  // // Depending on the chosen option, parameters are founded automatically in the prototype
  // this.price = this._definePrice(this.option);
  // this.calories = this._defineCalories(this.option);


}

Stuffing.prototype = Object.create(FOOD.prototype);

// module.exports.Stuffing.prototype = FOOD;


function Hamburger(option, stuffing) {


  FOOD.call(this, TYPES.BURGER_TYPE, option || OPTIONS.BURGER_SM_NAME);
  this.stuffing = stuffing || new Stuffing();
  // this.type = BURGER_TYPE;

  // // Option is small by default 
  // this.option = option || BURGER_SM_NAME;

  // // Default stuffing by default
  // this.stuffing = stuffing || new Stuffing();
  
  // // Depending on the chosen option, parameters are founded automatically in the prototype
  // this.price = this._definePrice(this.option);
  // this.calories = this._defineCalories(this.option);

  // // Calculates total parameters for hamburger with stuffing
  // this._calculatePrice = function(){
  //   return this.price + this.stuffing.price;
  // }  

  // this._calculateCalories = function(){
  //   return this.calories + this.stuffing.calories;
  // }


}

Hamburger.prototype = Object.create(FOOD.prototype);

// Calculates total parameters for hamburger with stuffing
Hamburger.prototype._calculatePrice = function(){
  return this.price + this.stuffing.price;
}  

Hamburger.prototype._calculateCalories = function(){
  return this.calories + this.stuffing.calories;
}

Hamburger.prototype.getName = function(){
  return this.option + ' ' + this.type + (this.stuffing ? ' with ' + this.stuffing.getName() : '');
}
// Gettin price
Hamburger.prototype.getPrice = function(){
  return (this._calculatePrice ? this._calculatePrice() : this.price);
}

// Gettin calories
Hamburger.prototype.getCalories = function(){
  return (this._calculateCalories ? this._calculateCalories() : this.calories);
}

// Parameters are price + calories with measurement units. It takes hamburger's stuffing in consideration too
Hamburger.prototype.getParameters = function(){
  return (this._calculatePrice ? this._calculatePrice() : this.price) + 'tg' + ' ' 
       + (this._calculateCalories ? this._calculateCalories() : this.calories) + 'cal';
}

module.exports.Stuffing = Stuffing;
module.exports.Hamburger = Hamburger;

// // Setting prototype
// module.exports.Hamburger.prototype = FOOD;

