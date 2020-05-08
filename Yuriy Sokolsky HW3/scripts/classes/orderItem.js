/**
 * Class MenuItem.
 *
 *@constructor
 *@param options.name       name of item
 *@param options.price      price of item
 *@param options.calories   calories of item
 */

function OrderItem(options) {
    this.name = options.name;
    this.price = options.price;
    this.calories = options.calories;
}

OrderItem.prototype.getName = function () {
    return this.name;
};

OrderItem.prototype.getPrice = function () {
    return this.price;
};

OrderItem.prototype.getCalories = function () {
    return this.calories;
};