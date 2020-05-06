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

var drinkType = {};

drinkType.COLA = {
    name: 'Cola',
    price: 50,
    calories: 40
};
drinkType.COFFEE = {
    name: 'Coffee',
    price: 80,
    calories: 20
};