/**
 * Класс, объекты которого описывают параметры продукта.
 *
 * @constructor
 * @param size          Размер
 * @param stuff         Начинка
 */
function Product(size, stuff) {
    this.size = size;
    this.stuff = stuff;
}

/**
 * Получить размер
 * @returns {String}    Размер
 */
Product.prototype.getSize = function () {
    return this.size;
};

/**
 * Получить начинку
 * @returns {String}    Начинка
 */
Product.prototype.getStuff = function () {
    return this.stuff;
};

/**
 * Изменить размер
 * @param size          Размер
 */
Product.prototype.setSize = function (size) {
    this.size = size;
};

/**
 * Изменить начинку
 * @param stuff         Начинка
 */
Product.prototype.setStuff = function (stuff) {
    this.stuff = stuff;
};

/**
 * Класс, объекты которого описывают параметры гамбургера.
 * Наследуется от класса Product
 *
 * @constructor
 * @param size     Размер
 * @param stuff    Начинка
 */
function Hamburger(size, stuff) {
    Product.call(this, size, stuff);
}

Hamburger.prototype = Object.create(Product.prototype);

/* Размеры, виды начинок и добавок */
Hamburger.prototype.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.prototype.SIZE_LARGE = { price: 100, calories: 40 };
Hamburger.prototype.STUFF_CHEESE = { price: 10, calories: 20 };
Hamburger.prototype.STUFF_SALAD = { price: 20, calories: 5 };
Hamburger.prototype.STUFF_POTATO = { price: 15, calories: 10 };

/**
 * Класс, объекты которого описывают параметры салата.
 * Наследуется от класса Product
 *
 * @constructor
 * @param size     Размер
 * @param stuff    Начинка
 */
function Salad(size, stuff) {
    Product.call(this, size, stuff);
}

Salad.prototype = Object.create(Product.prototype);

/* Размеры, виды салатов */
Salad.prototype.SIZE_SMALL = { coefficient: 1 };
Salad.prototype.SIZE_MEDIUM = { coefficient: 1.5 };
Salad.prototype.SIZE_LARGE = { coefficient: 2 };
Salad.prototype.STUFF_CAESAR = { price: 100, calories: 20 };
Salad.prototype.STUFF_OLIVIE = { price: 50, calories: 80 };

/**
 * Класс, объекты которого описывают параметры напитка.
 * Наследуется от класса Product
 *
 * @param size
 * @param stuff
 */
function Drink(size, stuff) {
    Product.call(this, size, stuff);
}

Drink.prototype = Object.create(Product.prototype);

/* Размеры, виды напитков */
Drink.prototype.SIZE_SMALL = { coefficient: 1 };
Drink.prototype.SIZE_MEDIUM = { coefficient: 1.5 };
Drink.prototype.SIZE_LARGE = { coefficient: 2 };
Drink.prototype.STUFF_COLA = { price: 50, calories: 40 };
Drink.prototype.STUFF_COFFEE = { price: 80, calories: 20 };
