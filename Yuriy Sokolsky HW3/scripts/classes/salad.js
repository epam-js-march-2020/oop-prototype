/**
 * Class Salad.
 *
 * @constructor
 * @param options.salad
 * @param weight    weight of salad
 */
function Salad(options, weight) {
    MenuItem.call(this, options);
    this.weight = weight;
}

Salad.prototype = Object.create(MenuItem.prototype);

var saladType = {};

saladType.CEASAR = {
    name: 'Ceasar',
    price: 100,
    calories: 20
};
saladType.OLIVIE = {
    name: 'Olivie',
    price: 50,
    calories: 80
};


Salad.prototype.getPrice = function () {
    return this.price / 100 * this.weight;
};

Salad.prototype.getCalories = function () {
    return this.calories / 100 * this.weight;
};