/**
* Класс, объекты которого описывают параметры напитка.
* @constructor
* @param {string} size        Размер
* @param {string} type        Тип (кофе/кола)
*/
export default function Drink(size, type) {
  this.size = size;
  this.type = type;
}

/* Цени и калорийность 100г */
Drink.TYPE_COFFEE = { price: 80, calories: 20 };
Drink.TYPE_COLA = { price: 50, calories: 40 };
Drink.SIZE_SMALL = { coefficient: 1 };
Drink.SIZE_MEDIUM = { coefficient: 1.5 };
Drink.SIZE_LARGE = { coefficient: 2 };

/**
* Узнать размер напитка
* @returns {string}          Размер
*/
Drink.prototype.getSize = function () {
  return this.size;
};

/**
* Узнать тип напитка
* @returns {string}          Тип
*/
Drink.prototype.getType = function () {
  return this.type;
};

/**
* Узнать цену напитка
* @return {Number} Цена в тугриках
*/
Drink.prototype.calculatePrice = function () {
  return Drink[this.type].price * Drink[this.size].coefficient;
};

/**
* Узнать калорийность
* @return {Number} Калорийность в калориях
*/
Drink.prototype.calculateCalories = function () {
  return Drink[this.type].calories * Drink[this.size].coefficient;
};
