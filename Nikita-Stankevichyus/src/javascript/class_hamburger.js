
// Importing FOOD object (considering it abstract class)
const FOOD = require('./abstract_class_food.js').FOOD;


// Constructor for stuffing objects
module.exports.Stuffing = function(option) {
  
  this.type = 'stuffing';

  // Option is 'cheese' by default
  this.option = option || 'cheese';

  // Depending on the chosen option, parameters are founded automatically in the prototype
  this.price = this._definePrice(this.option);
  this.calories = this._defineCalories(this.option);


}

module.exports.Stuffing.prototype = FOOD;


module.exports.Hamburger = function(option, stuffing) {

  this.type = 'hamburger';

  // Option is 'small' by default 
  this.option = option || 'small';

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

