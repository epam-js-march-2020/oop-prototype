function Salad(weight, type) {
    menuPosition.call(this);
    this.weight = weight;
    this.name = type.name + " salad";
    this.price = type.price / 100 * weight;
    this.calories = type.calories / 100 * weight;;
}

Salad.prototype = Object.create(menuPosition.prototype);
Salad.prototype.constructor = Salad;

/* Узнать размер порции */
Salad.prototype.getWeight = function () {
    return this.weight;
}

/* Узнать название салата */
Salad.prototype.getName = function () {
    return this.name;
}