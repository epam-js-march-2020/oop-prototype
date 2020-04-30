/**
* Класс, объекты которого описывают параметры заказа.
* @constructor
* @param {Array} products        Продукты
*/
export default function Order(...products) {
	this.closed = false;
	this.products = products;
}

/**
* Добавить продукт в заказ
* @param {Object} product        Добавляемый продукт
*/
Order.prototype.add = function (product) {
	this.products.push(product);
};

/**
* Убрать продукт из заказа
* @param {Object} product        Удаляемый продукт
*/
Order.prototype.remove = function (product) {
	this.products.splice(this.products.indexOf(product), 1);
};

/**
* Узнать размер заказа
* @returns {Number}          Размер
*/
Order.prototype.getSize = function () {
	return this.products.length;
};

/**
* Узнать стоимость заказа
* @return {Number} Цена в тугриках
*/
Order.prototype.calculatePrice = function () {
	return this.products.reduce((acc, curr) => acc += curr.calculatePrice(), 0);
};

/**
* Узнать калорийность заказа
* @return {Number} Калорийность в калориях
*/
Order.prototype.calculateCalories = function () {
	return this.products.reduce((acc, curr) => acc += curr.calculateCalories(), 0);
};
