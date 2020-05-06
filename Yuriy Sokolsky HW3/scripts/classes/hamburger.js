/**
 * Class Hamburger.
 *
 * @constructor
 * @param size        size of burger
 * @param stuffing    stuffing of burger
 */
function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
}

Hamburger.prototype = Object.create(MenuItem.prototype);


var hamburgerOptions = {};

hamburgerOptions.SIZE_SMALL = {
    name: 'Small burger',
    price: 50,
    calories: 20
};
hamburgerOptions.SIZE_LARGE = {
    name: 'Large burger',
    price: 100,
    calories: 40
};
hamburgerOptions.STUFFING_CHEESE = {
    name: 'cheese',
    price: 10,
    calories: 20
};
hamburgerOptions.STUFFING_SALAD = {
    name: 'salad',
    price: 20,
    calories: 5
};
hamburgerOptions.STUFFING_POTATO = {
    name: 'potato',
    price: 15,
    calories: 10
};


Hamburger.prototype.getName = function () {
    if (!this.size.name) {
        return "name not set";
    }
    return this.size.name;
};

Hamburger.prototype.getStuffing = function () {
    var stuffing = this.stuffing;
    return stuffing;
};


Hamburger.prototype.getPrice = function () {
    var stufPrice = this.stuffing.price
    this.price = this.size.price + stufPrice;
    return this.price;
};

Hamburger.prototype.getCalories = function () {
    var stufCalories = this.stuffing.calories;
    this.calories = this.size.calories + stufCalories;
    return this.calories;
};