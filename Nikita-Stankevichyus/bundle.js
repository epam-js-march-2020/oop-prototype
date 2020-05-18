(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// Importing ORDER local object. It handles dynamic elements
const ORDER = require('./src/javascript/order_local_object.js').ORDER;

// Importing food classes
const Hamburger = require('./src/javascript/class_hamburger.js').Hamburger;
const Stuffing = require('./src/javascript/class_hamburger.js').Stuffing;
const Salad = require('./src/javascript/class_salad.js').Salad;
const Drink = require('./src/javascript/class_drink.js').Drink;


// Not sure if 'forEach' method is ES6, but I wrote my polyfill
Object.defineProperty(Array.prototype, 'myForEach', {

  value: function(callback){

    for(let i = 0; i < this.length; i++){

      // Invoking callback with apparent context
      callback.call(this, this[i], i);
    }

  },

  enumerable: false,
});


// This method turn first letter in the string to upper case
Object.defineProperty(String.prototype, 'myCapitalize', {

  value: function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
  },

  enumerable: false,
});

const SELECT = $('#select');

// <option> html elements from <select>
const OPTIONS = $('#select option').toArray();

// Forms for adding a certain food
const FOODS = $('.food').toArray();

// Aside section of the page to chose desirable position and it's parameters
const ASIDE = $('aside');

SELECT.change( function(){

  //All forms are hidden
  FOODS.myForEach(function(element){

    $(element).addClass('hidden');

  })

  // Except for the needed one
  ASIDE.find('.'+SELECT.find(':selected').val()).removeClass('hidden');

});

// Setting options to show corresponding foods forms
// NOTE: This event listener DOES NOT WORK ON MOBILE VERSION
// OPTIONS.myForEach(function(element){
 
//   $(element).click(function(){

//     // All forms are hidden
//     FOODS.myForEach(function(element){

//       $(element).addClass('hidden');

//     })

//     // Except for the needed one
//     ASIDE.find('.'+$(element).val()).removeClass('hidden');

//   })
// });


// Hamburger adding form submition
$('.aside__burgers_form').submit( function(event) {

  event.preventDefault();
  
  // Forming new Hamburger object (with stuffing object inside) initialized with checked radio-buttons
  // And adding it to the order 
  ORDER.add(new Hamburger($('.aside__burgers_form').find('.size_radio:checked').val(),
            new Stuffing($('.aside__burgers_form').find('.stuffing_radio:checked').val())));

});


// Salad adding form submition
$('.aside__salads_form').submit( function(event) {

  event.preventDefault();

  // Forming new Salad object initialized with checked radio-buttons and adding it to the order
  ORDER.add(new Salad($('.aside__salads_form').find(':checked').val()));

});


// Drink adding form submition
$('.aside__drinks_form').submit( function(event) {

  event.preventDefault();

  // Forming new Drink object initialized with checked radio-buttons and adding it to the order
  ORDER.add(new Drink($('.aside__drinks_form').find(':checked').val()));

});

// First render to initialize dynamic elements
ORDER.render();
},{"./src/javascript/class_drink.js":3,"./src/javascript/class_hamburger.js":4,"./src/javascript/class_salad.js":5,"./src/javascript/order_local_object.js":7}],2:[function(require,module,exports){

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


},{"./consts_food_params.js":6}],3:[function(require,module,exports){
const TYPES = require('./consts_food_params').TYPES;
const OPTIONS = require('./consts_food_params').OPTIONS;

// Importing FOOD object (considering it abstract class)
const FOOD = require('./abstract_class_food.js');

// Constructor for drinks objects
function Drink(option) {

  FOOD.call(this, TYPES.DRINK_TYPE, option || OPTIONS.DRINK_COFFEE_NAME);

}

Drink.prototype = Object.create(FOOD.prototype);

module.exports.Drink = Drink;

},{"./abstract_class_food.js":2,"./consts_food_params":6}],4:[function(require,module,exports){
const TYPES = require('./consts_food_params').TYPES;
const OPTIONS = require('./consts_food_params').OPTIONS;


// Importing FOOD object (considering it abstract class)
const FOOD = require('./abstract_class_food.js');


// Constructor for stuffing objects
function Stuffing (option) {

  FOOD.call(this, TYPES.STUFF_TYPE, option || OPTIONS.STUFF_CHEESE_NAME)

}

Stuffing.prototype = Object.create(FOOD.prototype);


function Hamburger(option, stuffing) {

  FOOD.call(this, TYPES.BURGER_TYPE, option || OPTIONS.BURGER_SM_NAME);
  this.stuffing = stuffing || new Stuffing();
  
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


},{"./abstract_class_food.js":2,"./consts_food_params":6}],5:[function(require,module,exports){
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

},{"./abstract_class_food.js":2,"./consts_food_params":6}],6:[function(require,module,exports){
// Parameteres for food

/*
 * TYPES' NAMES
*/

module.exports.TYPES = {
  BURGER_TYPE: 'hamburger',
  STUFF_TYPE: 'stuffing',
  SALAD_TYPE: 'salad',
  DRINK_TYPE: 'drink',
}

/*
 * OPTIONS' NAMES
*/

module.exports.OPTIONS = {

  // Hamburgers
  BURGER_SM_NAME: 'small',
  BURGER_BIG_NAME: 'big',

  // Stuffings
  STUFF_CHEESE_NAME: 'cheese',
  STUFF_SALAD_NAME: 'salad',
  STUFF_POTATO_NAME: 'potato',

  // Salads
  SALAD_CEASER_NAME: 'ceaser',
  SALAD_OLIVIE_NAME: 'olivie',

  // Drinks
  DRINK_COLA_NAME: 'cola',
  DRINK_COFFEE_NAME: 'coffee',

}

/*
 * PRICES
*/

module.exports.PRICES = {

  // Hamburgers
  BURGER_SM_PRICE: 50,
  BURGER_BIG_PRICE: 100,

  // Stuffings
  STUFF_CHEESE_PRICE: 10,
  STUFF_SALAD_PRICE: 20,
  STUFF_POTATO_PRICE: 15,

  // Salads
  SALAD_CEASER_PRICE: 100,
  SALAD_OLIVIE_PRICE: 50,

  // Drinks
  DRINK_COLA_PRICE: 50,
  DRINK_COFFEE_PRICE: 80,

}

/*
 * CALORIES
*/

module.exports.CALORIES = {

  // Hamburgers
  BURGER_SM_CALS: 20,
  BURGER_BIG_CALS: 40,

  // Stuffings
  STUFF_CHEESE_CALS: 20,
  STUFF_SALAD_CALS: 5,
  STUFF_POTATO_CALS: 10,

  // Salads
  SALAD_CEASER_CALS: 20,
  SALAD_OLIVIE_CALS: 80,

  // Drinks
  DRINK_COLA_CALS: 40,
  DRINK_COFFEE_CALS: 20,

}


},{}],7:[function(require,module,exports){
const OPTIONS = require('./consts_food_params').OPTIONS;


// Additional class for storagin position html-element and reference to corresponding food item
function Position(jQueryElement, foodItem) {
  
  // jQuery object of the html element
  this.jQueryElement = jQueryElement;

  // Reference to the corresponding food item
  this.foodItem = foodItem;
}

// Local object handling dynamic elements
module.exports.ORDER = {
  
  // Array in which food items are storaged
  collection: [],

  // Forms. These are used to initialize position adding forms
  hamburgersForm: $('.aside__burgers_form'),
  saladsForm: $('.aside__salads_form'),
  drinksForm: $('.aside__drinks_form'),

  // This could come in handy
  forms: [this.hamburgersForm, this.saladForm, this.drinksForm],

  // Template for adding position html element
  positionTemplate: _.template($('#position_template').html()),


  // Overriding (defining) myForEach for ORDER LO
  myForEach(callback) {
    this.collection.myForEach(callback);
  },

  // Pushes item to the collection and re-renders 
  add(item) {
    this.collection.push(item);
    this.render();
  },

  // Delets item from the collection and re-renders
  delete(item) {
    this.collection.splice(this.collection.indexOf(item), 1);
    this.render();
  },

  // Calculates total price of the order vie 'reduce' method
  totalPrice() {
    return this.collection.reduce(function(accumulator, current){
      return accumulator + current.getPrice();
    }, 0)
  },

  // Calculates total calories of the order via 'reduce' method
  totalCalories() {
    return this.collection.reduce(function(accumulator, current){
      return accumulator + current.getCalories();
    }, 0)
  },

  // Initializes position adding form
  // NOTE: Maybe it's better to incapsulate this method as function into 'render' method
  inputInit(form, input, text){
    form.find(input).val(text);
    form.find(input).siblings('label').text(text.myCapitalize());
  },

  // Main method that initializes food adding forms, and render dynamic elements (positions) into page
  render() { 
    

    /*
     * Initializing position adding forms
    */

    // Hamburgers (+stuffings)
    this.inputInit(this.hamburgersForm, '#size--big', OPTIONS.BURGER_BIG_NAME);
    this.inputInit(this.hamburgersForm, '#size--small', OPTIONS.BURGER_SM_NAME);
    this.inputInit(this.hamburgersForm, '#stuffing--cheese', OPTIONS.STUFF_CHEESE_NAME);
    this.inputInit(this.hamburgersForm, '#stuffing--salad',  OPTIONS.STUFF_SALAD_NAME);
    this.inputInit(this.hamburgersForm, '#stuffing--potato', OPTIONS.STUFF_POTATO_NAME);

    // Salads
    this.inputInit(this.saladsForm, '#salad--ceaser', OPTIONS.SALAD_CEASER_NAME);
    this.inputInit(this.saladsForm, '#salad--olivie', OPTIONS.SALAD_OLIVIE_NAME);

    // Drinks
    this.inputInit(this.drinksForm, '#drink--coffee', OPTIONS.DRINK_COFFEE_NAME);
    this.inputInit(this.drinksForm, '#drink--cola', OPTIONS.DRINK_COLA_NAME);

    // Thus ES5 functions can find info storaged in this (meaning ORDER)
    const positionTemplate = this.positionTemplate;

    // Thus ES5 function can understand what should be meant by 'this'
    // There are other paths to solve this, but I'll stick to that
    const absoluteThis = this;

    // Emptiing order list before rendering it anew
    $('#positions').empty();

    // Rendering position html elements where they belong
    this.collection.myForEach(function(element, index){

      $(positionTemplate({

        // ID of the each position is 'position_<corresponding_item_index_in_collection>' 
        id: 'position_'+index,

        // 'myCapitalize' method is defined directly in String.prototype in index.js
        // It turns first letter to upper case
        description: element.getName().myCapitalize(),
        parameters: element.getParameters(),
      })
      ).appendTo('#positions')

      // Writing position object to corresponding food item
      element.position = new Position($('#position_'+index), element);
      
      // Handler for clicking delete position button event 
      const deleteHandler = function() {
        this.delete(element);
        this.render();
      }

      // Apparently binding context to the handler
      element.position.jQueryElement.find('.position_delete').click(deleteHandler.bind(absoluteThis));

    })

    // Clear button delets all positions from the order
    $('#clear').click(function(){
      absoluteThis.myForEach(function(element){
        absoluteThis.delete(element);
      })
    })

    // Submit is 'Commit' button. It's meaning that order is paid
    $('.content__form').submit(function(event){
      event.preventDefault();
      $('button').attr('disabled', true);
    })
    
    // Calculating and rendering total price and total calories
    $('#total_price').html('Total price: '.concat(this.collection.length > 0 ? this.totalPrice() : '0') + 'tg');
    $('#total_calories').text('Total calories: '.concat(this.collection.length > 0 ? this.totalCalories() : '0') + 'cal');
  },

}
},{"./consts_food_params":6}]},{},[1]);
