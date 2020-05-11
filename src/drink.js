import Product from './product';

/**
* Класс, объекты которого описывают параметры напитка.
* @constructor
* @param {string} size        Размер
* @param {string} type        Тип (кофе/кола)
*/
export default function Drink(size, type) {
  Product.call(this, size, type);
}
Drink.prototype = Object.create(Product.prototype);

/* Цена и калорийность 100г */
Drink.prototype.TYPE_COFFEE = { price: 80, calories: 20 };
Drink.prototype.TYPE_COLA = { price: 50, calories: 40 };
Drink.prototype.SIZE_SMALL = { coefficient: 1 };
Drink.prototype.SIZE_MEDIUM = { coefficient: 1.5 };
Drink.prototype.SIZE_LARGE = { coefficient: 2 };
Drink.prototype.name = 'Drink';
