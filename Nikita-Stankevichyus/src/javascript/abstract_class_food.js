/*
 * OPTIONS' NAMES
*/


// Hamburgers
const BURGER_SM_NAME = require('./consts_food_params.js').BURGER_SM_NAME;
const BURGER_BIG_NAME = require('./consts_food_params.js').BURGER_BIG_NAME;

// Stuffings
const STUFF_CHEESE_NAME = require('./consts_food_params.js').STUFF_CHEESE_NAME;
const STUFF_SALAD_NAME = require('./consts_food_params.js').STUFF_SALAD_NAME;
const STUFF_POTATO_NAME = require('./consts_food_params.js').STUFF_POTATO_NAME;

// Salads
const SALAD_CEASER_NAME = require('./consts_food_params.js').SALAD_CEASER_NAME;
const SALAD_OLIVIE_NAME = require('./consts_food_params.js').SALAD_OLIVIE_NAME;

// Drinks
const DRINK_COLA_NAME = require('./consts_food_params.js').DRINK_COLA_NAME;
const DRINK_COFFEE_NAME = require('./consts_food_params.js').DRINK_COFFEE_NAME;





/*
 * PRICES
*/


const BURGER_SM_PRICE = require('./consts_food_params.js').BURGER_SM_PRICE;
const BURGER_BIG_PRICE = require('./consts_food_params.js').BURGER_BIG_PRICE;

// Stuffings
const STUFF_CHEESE_PRICE = require('./consts_food_params.js').STUFF_CHEESE_PRICE;
const STUFF_SALAD_PRICE = require('./consts_food_params.js').STUFF_SALAD_PRICE;
const STUFF_POTATO_PRICE = require('./consts_food_params.js').STUFF_POTATO_PRICE;

// Salads
const SALAD_CEASER_PRICE = require('./consts_food_params.js').SALAD_CEASER_PRICE;
const SALAD_OLIVIE_PRICE = require('./consts_food_params.js').SALAD_OLIVIE_PRICE;

// Drinks
const DRINK_COLA_PRICE = require('./consts_food_params.js').DRINK_COLA_PRICE;
const DRINK_COFFEE_PRICE = require('./consts_food_params.js').DRINK_COFFEE_PRICE;


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

// Salads
const SALAD_CEASER_CALS = require('./consts_food_params.js').SALAD_CEASER_CALS;
const SALAD_OLIVIE_CALS = require('./consts_food_params.js'). SALAD_OLIVIE_CALS;

// Drinks
const DRINK_COLA_CALS = require('./consts_food_params.js').DRINK_COLA_CALS;
const DRINK_COFFEE_CALS = require('./consts_food_params.js').DRINK_COFFEE_CALS;

module.exports.FOOD = {


  getType() {
    return this.type;
  },

  getPrice() {
    return this.price;
  },

  getCalories() {
    return this.calories;
  },

  getOption() {
    return this.option;
  },

  getName() {
    return this.option + ' ' + this.type;
  },

  getParameters() {
    return this.price + 'tg' + ' ' + this.calories + 'cal';
  },

  geSize() {
    return this.size ? this.size : '';
  },

  getStuffing() {
    return this.stuffing ? this.stuffing : '';
  },

  prices: {
    [BURGER_SM_NAME]: 'kek',
  }


}
