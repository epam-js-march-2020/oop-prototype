/**
* Класс, объекты которого описывают параметры гамбургера.
* @constructor
* @param {string} size        Размер
* @param {string} stuffing    Начинка
*/
export default function Hamburger(size, stuffing) {
  this.size = size;
  this.stuffing = stuffing;
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { price: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { price: 15, calories: 10 };

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
Hamburger.prototype.getStuffing = function () {
  return this.stuffing;
};

/**
* Узнать цену гамбургера
* @return {Number} Цена в тугриках
*/
Hamburger.prototype.calculatePrice = function () {
  return Hamburger[this.size].price + Hamburger[this.stuffing].price;
};

/**
* Узнать калорийность
* @return {Number} Калорийность в калориях
*/
Hamburger.prototype.calculateCalories = function () {
  return Hamburger[this.size].calories + Hamburger[this.stuffing].calories;
};
