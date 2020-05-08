/**
 * Class Drink.
 *
 * @constructor
 * @param options.drink
 */
function Drink(options) {
    MenuItem.call(this, options);
}

Drink.prototype = Object.create(MenuItem.prototype);

var drinkOptions = {};

drinkOptions.COLA = {
    name: 'Cola',
    price: 50,
    calories: 40
};
drinkOptions.COFFEE = {
    name: 'Coffee',
    price: 80,
    calories: 20
};
