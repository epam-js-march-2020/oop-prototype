import Product from './product';
/**
* Класс, объекты которого описывают параметры гамбургера.
* @constructor
* @param {string} size        Размер
* @param {string} type        Начинка
*/
export default function Hamburger(size, type) {
  Product.call(this, size, type);
}
Hamburger.prototype = Object.create(Product.prototype);

/* Размеры, виды начинок и добавок */
Hamburger.prototype.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.prototype.SIZE_LARGE = { price: 100, calories: 40 };
Hamburger.prototype.TYPE_CHEESE = { price: 10, calories: 20 };
Hamburger.prototype.TYPE_SALAD = { price: 20, calories: 5 };
Hamburger.prototype.TYPE_POTATO = { price: 15, calories: 10 };
