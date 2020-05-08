/**
 * Class MenuItem.
 *
 *@constructor
 *@param options.name       name of item
 *@param options.price      price of item
 *@param options.calories   calories of item
 */
function MenuItem(options) {
    this.name = options.name;
    this.price = options.price;
    this.calories = options.calories;
}

MenuItem.prototype.getName = function () {
    return this.name;
};

MenuItem.prototype.getPrice = function () {
    return this.price;
};

MenuItem.prototype.getCalories = function () {
    return this.calories;
};