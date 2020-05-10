function menuPosition(name, price, calories) {
    this.name = name;
    this.price = price;
    this.calories = calories;
}

/* Узнать цену гамбургера */
menuPosition.prototype.calculatePrice = function () {
    return this.price;
}

/* Узнать калорийность */
menuPosition.prototype.calculateCalories = function () {
    return this.calories;
}
/* Узнать название позиции */
menuPosition.prototype.getName = function () {
    return this.name;
}