/**
* Класс, объекты которого описывают параметры продукта.
* @constructor
* @param {string} size        Размер
* @param {string} type        Тип
*/
export default function Product(size, type) {
    this.size = size;
    this.type = type;
}

/**
* Узнать цену
* @return {Number} Цена в тугриках
*/
Product.prototype.calculatePrice = function () {
    if (this[this.size].coefficient) { 
        return this[this.type].price * this[this.size].coefficient;
    }
    return this[this.size].price + this[this.type].price;
};

/**
* Узнать калорийность
* @return {Number} Калорийность в калориях
*/
Product.prototype.calculateCalories = function () {
    if (this[this.size].coefficient) { 
        return this[this.type].calories * this[this.size].coefficient;
    }
    return this[this.size].calories + this[this.type].calories;
};
