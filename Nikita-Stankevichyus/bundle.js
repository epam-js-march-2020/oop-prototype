(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const ORDER = require('./src/javascript/order_local_object.js').ORDER;

const Hamburger = require('./src/javascript/class_hamburger.js').Hamburger;
const Stuffing = require('./src/javascript/class_hamburger.js').Stuffing;
const Salad = require('./src/javascript/class_salad.js').Salad;
const Drink = require('./src/javascript/class_drink.js').Drink;

// <option> html elements from <select>
const OPTIONS = $('#select option').toArray();

// Forms for adding a certain food
const FOODS = $('.food').toArray();

// Aside section of the page to chose desirable position and it's parameters
const ASIDE = $('aside');

// Setting options to show corresponding foods forms
OPTIONS.forEach(function(element){
 
  $(element).click(function(){

    // All forms are hidden
    FOODS.forEach(function(element){
      $(element).addClass('hidden');
    })

    // Except for the needed one
    ASIDE.find('.'+$(element).val()).removeClass('hidden');

  })
});

Object.defineProperty(String.prototype, 'myCapitalize', {

  value: function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
  },

  enumerable: false,
});

$('.aside__burgers_form').submit(function(event){
  event.preventDefault();
  
  
  ORDER.add(new Hamburger($('.aside__burgers_form').find('.size_radio:checked').val(),
            new Stuffing($('.aside__burgers_form').find('.stuffing_radio:checked').val())));

});

$('.aside__salads_form').submit(function(event){
  event.preventDefault();

  ORDER.add(new Salad($('.aside__salads_form').find(':checked').val()));

});

$('.aside__drinks_form').submit(function(event){
  event.preventDefault();

  ORDER.add(new Drink($('.aside__drinks_form').find(':checked').val()));

});


ORDER.render();
},{"./src/javascript/class_drink.js":3,"./src/javascript/class_hamburger.js":4,"./src/javascript/class_salad.js":5,"./src/javascript/order_local_object.js":7}],2:[function(require,module,exports){
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

  // Sets product's price depending on the option of the food
  _definePrice(option) {
    return this._prices[option];
  },

  // Sets product's calories depending on the option of the food
  _defineCalories(option) {
    return this._calories[option];
  },

  // Type is basic type of the food (Hamburger/Salad/Drink)
  getType() {
    return this.type;
  },

  // Option is advanced type of the food (For hamburgers it's size, for drink this is either cola or coffee, etc)
  getOption() {
    return this.option;
  },

  // Name is option + type (and stuffing in case of hamburgers)
  getName() {
    return this.option + ' ' + this.type + (this.stuffing ? ' with ' + this.stuffing.getName() : '');
  },

  // Gettin price. If object is hamburger -- price is calculated via corresponding method
  getPrice() {
    return (this._calculatePrice ? this._calculatePrice() : this.price);
  },

   // Gettin calories. If object is hamburger -- calories are calculated via corresponding method
  getCalories() {
    return (this._calculateCalories ? this._calculateCalories() : this.calories);
  },

  // Parameters are price + calories with measurement units. It takes hamburger's stuffing in consideration too
  getParameters() {
    return (this._calculatePrice ? this._calculatePrice() : this.price) + 'tg' + ' ' 
         + (this._calculateCalories ? this._calculateCalories() : this.calories) + 'cal';
  },

  // getName + getParameters. Mainly for testing matters
  getFullDescription() {
    return this.getName() + ' ' + this.getParameters();
  },

  // Size is method specific for hamburgers. Not sure if it's needed
  geSize() {
    return this.size ? this.size : '';
  },

  // Stuffing is method specific for hamburgers. Not sure if it's needed
  getStuffing() {
    return this.stuffing ? this.stuffing : '';
  },


  // 'Database' with prices for each food option
  _prices: {

    [BURGER_SM_NAME]: BURGER_SM_PRICE,
    [BURGER_BIG_NAME]: BURGER_BIG_PRICE,

    [STUFF_CHEESE_NAME]: STUFF_CHEESE_PRICE,
    [STUFF_SALAD_NAME]: STUFF_SALAD_PRICE,
    [STUFF_POTATO_NAME]: STUFF_POTATO_PRICE,

    [SALAD_CEASER_NAME]: SALAD_CEASER_PRICE,
    [SALAD_OLIVIE_NAME]: SALAD_OLIVIE_PRICE,

    [DRINK_COLA_NAME]: DRINK_COLA_PRICE,
    [DRINK_COFFEE_NAME]: DRINK_COFFEE_PRICE,

  },

  // 'Database' with calories for each food option
  _calories: {

    [BURGER_SM_NAME]: BURGER_SM_CALS,
    [BURGER_BIG_NAME]: BURGER_BIG_CALS,

    [STUFF_CHEESE_NAME]: STUFF_CHEESE_CALS,
    [STUFF_SALAD_NAME]: STUFF_SALAD_CALS,
    [STUFF_POTATO_NAME]: STUFF_POTATO_CALS,

    [SALAD_CEASER_NAME]: SALAD_CEASER_CALS,
    [SALAD_OLIVIE_NAME]: SALAD_OLIVIE_CALS,

    [DRINK_COLA_NAME]: DRINK_COLA_CALS,
    [DRINK_COFFEE_NAME]: DRINK_COFFEE_CALS,
    
  },


}

},{"./consts_food_params.js":6}],3:[function(require,module,exports){
/*
 * OPTIONS' NAMES
*/

const DRINK_COLA_NAME = require('./consts_food_params.js').DRINK_COLA_NAME;
const DRINK_COFFEE_NAME = require('./consts_food_params.js').DRINK_COFFEE_NAME;

// Importing FOOD object (considering it abstract class)
const FOOD = require('./abstract_class_food.js').FOOD;

// Constructor for drinks objects
module.exports.Drink = function(option) {
  
  this.type = 'drink';

  // Option is 'cola' by default
  this.option = option || 'cola';

  // Depending on the chosen option, parameters are founded automatically in the prototype
  this.price = this._definePrice(this.option);
  this.calories = this._defineCalories(this.option);


}

module.exports.Drink.prototype = FOOD;

},{"./abstract_class_food.js":2,"./consts_food_params.js":6}],4:[function(require,module,exports){
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

module.exports.Hamburger.prototype = FOOD;


},{"./abstract_class_food.js":2,"./consts_food_params.js":6}],5:[function(require,module,exports){
/*
 * OPTIONS' NAMES
*/

const SALAD_CEASER_NAME = require('./consts_food_params.js').SALAD_CEASER_NAME;
const SALAD_OLIVIE_NAME = require('./consts_food_params.js').SALAD_OLIVIE_NAME;

// Importing FOOD object (considering it abstract class)
const FOOD = require('./abstract_class_food.js').FOOD;

// Constructor for drinks objects
module.exports.Salad = function(option) {
  
  this.type = 'salad';

  // Option is 'cola' by default
  this.option = option || 'ceaser';

  // Depending on the chosen option, parameters are founded automatically in the prototype
  this.price = this._definePrice(this.option);
  this.calories = this._defineCalories(this.option);


}

module.exports.Salad.prototype = FOOD;

},{"./abstract_class_food.js":2,"./consts_food_params.js":6}],6:[function(require,module,exports){
// Parameteres for food


/*
 * OPTIONS' NAMES
*/

// NOTE: Option name and size is the same for burgers
// Hamburgers
module.exports.BURGER_SM_NAME = 'small';
module.exports.BURGER_BIG_NAME = 'big';

// Stuffings
module.exports.STUFF_CHEESE_NAME = 'cheese';
module.exports.STUFF_SALAD_NAME = 'salad';
module.exports.STUFF_POTATO_NAME = 'potato';

// Salads
module.exports.SALAD_CEASER_NAME = 'ceaser';
module.exports.SALAD_OLIVIE_NAME = 'olivie';

// Drinks
module.exports.DRINK_COLA_NAME = 'cola';
module.exports.DRINK_COFFEE_NAME = 'coffee';


/*
 * PRICES
*/

// Hamburgers
module.exports.BURGER_SM_PRICE = 50;
module.exports.BURGER_BIG_PRICE = 100;

// Stuffings
module.exports.STUFF_CHEESE_PRICE = 10;
module.exports.STUFF_SALAD_PRICE = 20;
module.exports.STUFF_POTATO_PRICE = 15;

// Salads
module.exports.SALAD_CEASER_PRICE = 100;
module.exports.SALAD_OLIVIE_PRICE = 50;

// Drinks
module.exports.DRINK_COLA_PRICE = 50;
module.exports.DRINK_COFFEE_PRICE = 80;


/*
 * CALORIES
*/

// Hamburgers
module.exports.BURGER_SM_CALS = 20;
module.exports.BURGER_BIG_CALS = 40;

// Stuffings
module.exports.STUFF_CHEESE_CALS = 20;
module.exports.STUFF_SALAD_CALS = 5;
module.exports.STUFF_POTATO_CALS = 10;

// Salads
module.exports.SALAD_CEASER_CALS = 20;
module.exports.SALAD_OLIVIE_CALS = 80;

// Drinks
module.exports.DRINK_COLA_CALS = 40;
module.exports.DRINK_COFFEE_CALS = 20;
},{}],7:[function(require,module,exports){
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

const Hamburger = require('./class_hamburger.js').Hamburger;
const Stuffing = require('./class_hamburger.js').Stuffing;

function Position(jQueryElement, foodItem) {
  this.jQueryElement = jQueryElement;
  this.foodItem = foodItem;
}

module.exports.ORDER = {
  collection: [],

  hamburgersForm: $('.aside__burgers_form'),
  saladsForm: $('.aside__salads_form'),
  drinksForm: $('.aside__drinks_form'),

  forms: [this.hamburgersForm, this.saladForm, this.drinksForm],

  positionTemplate: _.template($('#position_template').html()),

  forEach(callback) {
    this.collection.forEach(callback);
  },

  add(item) {
    this.collection.push(item);
    this.render();
  },

  delete(item) {
    this.collection.splice(this.collection.indexOf(item), 1);
  },

  totalPrice() {
    return this.collection.reduce(function(accumulator, current){
      return accumulator + current.getPrice();
    }, 0)
  },

  totalCalories() {
    return this.collection.reduce(function(accumulator, current){
      return accumulator + current.getCalories();
    }, 0)
  },

  inputInit(form, input, text){
    form.find(input).val(text);
    form.find(input).siblings('label').text(text.myCapitalize());
  },

  render() { 

    this.inputInit(this.hamburgersForm, '#size--big', BURGER_BIG_NAME);
    this.inputInit(this.hamburgersForm, '#size--small', BURGER_SM_NAME);
    this.inputInit(this.hamburgersForm, '#stuffing--cheese', STUFF_CHEESE_NAME);
    this.inputInit(this.hamburgersForm, '#stuffing--salad',  STUFF_SALAD_NAME);
    this.inputInit(this.hamburgersForm, '#stuffing--potato', STUFF_POTATO_NAME);

    this.inputInit(this.saladsForm, '#salad--ceaser', SALAD_CEASER_NAME);
    this.inputInit(this.saladsForm, '#salad--olivie', SALAD_OLIVIE_NAME);

    this.inputInit(this.drinksForm, '#drink--coffee', DRINK_COFFEE_NAME);
    this.inputInit(this.drinksForm, '#drink--cola', DRINK_COLA_NAME);

    const positionTemplate = this.positionTemplate;
    const absoluteThis = this;

    $('#positions').empty();

    this.collection.forEach(function(element, index){
      $(positionTemplate({
        id: 'position_'+index,
        description: element.getName().myCapitalize(),
        parameters: element.getParameters(),
      })
      ).appendTo('#positions')

      element.position = new Position($('#position_'+index), element);
      
      const deleteHandler = function() {
        this.delete(element);
        this.render();
      }

      element.position.jQueryElement.find('.position_delete').click(deleteHandler.bind(absoluteThis));
    })

    $('#clear').click(function(){
      absoluteThis.forEach(function(element){
        absoluteThis.delete(element);
        absoluteThis.render();
      })
    })

    $('.content__form').submit(function(event){
      event.preventDefault();
      $('button').attr('disabled', true);
    })
    
    $('#total_price').html('Total price: '.concat(this.collection.length > 0 ? this.totalPrice() : '0') + 'tg');
    $('#total_calories').text('Total calories: '.concat(this.collection.length > 0 ? this.totalCalories() : '0') + 'cal');
  },

  commit() {

  },

  clear() {
    this.forEach(this.delete());
    this.render();
  },


}
},{"./class_hamburger.js":4,"./consts_food_params.js":6}]},{},[1]);
