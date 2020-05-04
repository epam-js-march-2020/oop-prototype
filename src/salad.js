import Product from './product';

/**
* Класс, объекты которого описывают параметры салата.
* @constructor
* @param {string} size        Размер
* @param {string} type        Тип (оливье/цезарь)
*/
export default function Salad(size, type) {
  Product.call(this, size, type);
}
Salad.prototype = Object.create(Product.prototype);

/* Цена и калорийность 100г */
Salad.prototype.TYPE_OLIVIE = { price: 50, calories: 80 };
Salad.prototype.TYPE_CAESAR = { price: 100, calories: 20 };
Salad.prototype.SIZE_SMALL = { coefficient: 1 };
Salad.prototype.SIZE_MEDIUM = { coefficient: 1.5 };
Salad.prototype.SIZE_LARGE = { coefficient: 2 };
Salad.prototype.name = 'Salad';
