/**
* Класс, объекты которого описывают параметры гамбургера.
* @constructor
* @param {string} size        Размер
* @param {string} stuffing    Начинка
*/
export default function Hamburger(size, type) {
  this.size = size;
  this.type = type;
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { price: 100, calories: 40 };
Hamburger.TYPE_CHEESE = { price: 10, calories: 20 };
Hamburger.TYPE_SALAD = { price: 20, calories: 5 };
Hamburger.TYPE_POTATO = { price: 15, calories: 10 };

/**
* Узнать размер гамбургера
* @returns {string}          Размер
*/
Hamburger.prototype.getSize = function () {
  return this.size;
};

/**
* Узнать начинку гамбургера
* @returns {string}          Начинка
*/
Hamburger.prototype.getType = function () {
  return this.type;
};

/**
* Узнать цену гамбургера
* @return {Number} Цена в тугриках
*/
Hamburger.prototype.calculatePrice = function () {
  return Hamburger[this.size].price + Hamburger[this.type].price;
};

/**
* Узнать калорийность
* @return {Number} Калорийность в калориях
*/
Hamburger.prototype.calculateCalories = function () {
  return Hamburger[this.size].calories + Hamburger[this.type].calories;
};
