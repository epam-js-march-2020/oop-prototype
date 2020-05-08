/**
 * Class Hamburger.
 *
 * @constructor
 * @param size        size of burger
 * @param stuffing    stuffing of burger
 */
function Hamburger(size, stuffing) {
    this.stuffing = new Stuffing(stuffing);
    MenuItem.call(this, size);
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


Hamburger.prototype.getStuffing = function () {
    var stuffing = this.stuffing;
    return stuffing;
};


Hamburger.prototype.getPrice = function () {
    return this.price + this.stuffing.price;
};

Hamburger.prototype.getCalories = function () {
    return this.calories+this.stuffing.calories;
};