function Drink(drink) {
    menuPosition.call(this);
    this.name = drink.name;
    this.price = drink.price;
    this.calories = drink.calories;
}

Drink.prototype = Object.create(menuPosition.prototype);
Drink.prototype.constructor = Drink;

/* Узнать название напитка */
Drink.prototype.getName = function () {
    return this.name;
}