/**
* Класс, объекты которого описывают параметры салата.
* @constructor
* @param {string} size        Размер
* @param {string} type        Тип (оливье/цезарь)
*/
export default function Salad(size, type) {
    this.size = size;
    this.type = type;
  }
  
  /* Цени и калорийность 100г */
  Salad.TYPE_OLIVIE = { price: 50, calories: 80 };
  Salad.TYPE_CAESAR = { price: 100, calories: 20 };
  Salad.SIZE_SMALL = { coefficient: 1 };
  Salad.SIZE_MEDIUM = { coefficient: 1.5 };
  Salad.SIZE_LARGE = { coefficient: 2 };
  /**
  * Узнать размер салата
  * @returns {string}          Размер
  */
  Salad.prototype.getSize = function () {
    return this.size;
  };
  
  /**
  * Узнать тип салата
  * @returns {string}          Тип
  */
  Salad.prototype.getType = function () {
    return this.type;
  };
  
  /**
  * Узнать цену салата
  * @return {Number} Цена в тугриках
  */
  Salad.prototype.calculatePrice = function () {
    return Salad[this.type].price * Salad[this.size].coefficient;
  };
  
  /**
  * Узнать калорийность
  * @return {Number} Калорийность в калориях
  */
  Salad.prototype.calculateCalories = function () {
    return Salad[this.type].calories * Salad[this.size].coefficient;
  };
  