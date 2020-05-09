/**
 * Class Hamburger.
 *
 * @constructor
 * @param size        size of burger
 * @param stuffing    stuffing of burger
 */
function Hamburger(size, stuffing) {
    this.stuffing = new Stuffing(stuffing);
    OrderItem.call(this, size);
}

Hamburger.prototype = Object.create(OrderItem.prototype);


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

Hamburger.prototype.getFullName = function () {
    return this.name + " with " + this.stuffing.getName();
};

Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
};

Hamburger.prototype.getPrice = function () {
    return this.price + this.stuffing.getPrice();
};

Hamburger.prototype.getCalories = function () {
    return this.calories+this.stuffing.getCalories();
};