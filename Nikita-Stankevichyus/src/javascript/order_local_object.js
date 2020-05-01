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