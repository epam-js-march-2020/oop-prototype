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
    if (!this.name) {
        return "name not set";
    }
    return this.name;
};

MenuItem.prototype.getPrice = function () {
    if (!this.price) {
        return "price not set";
    }
    return this.price;
};

MenuItem.prototype.getCalories = function () {
    if (!this.calories) {
        return "calories not set";
    }
    return this.calories;
};