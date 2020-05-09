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
 * Узнать стоимость продукта
 * @returns {Number}    Стоимость продукта
 */
Product.prototype.calculatePrice = function () {
    var price = 0;
    this.stuff.forEach(function (item) {
        price += item.price;
    });
    if (this.size.coefficient) {
        price *= this.size.coefficient;
    } else {
        price += this.size.price;
    }
    return price;
};

/**
 * Узнать калорийность продукта
 * @returns {Number}    Калорийность продукта
 */
Product.prototype.calculateCalories = function () {
    var calories = 0;
    this.stuff.forEach(function (item) {
        calories += item.calories;
    });
    if (this.size.coefficient) {
        calories *= this.size.coefficient;
    } else {
        calories += this.size.calories;
    }
    return calories;
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
Hamburger.prototype.SIZE_SMALL = { name: "Small", price: 50, calories: 20 };
Hamburger.prototype.SIZE_LARGE = { name: "Large", price: 100, calories: 40 };
Hamburger.prototype.STUFF_CHEESE = { name: "cheese", price: 10, calories: 20 };
Hamburger.prototype.STUFF_SALAD = { name: "salad", price: 20, calories: 5 };
Hamburger.prototype.STUFF_POTATO = { name: "potato", price: 15, calories: 10 };

/**
 * Класс, объекты которого описывают параметры салата.
 * Наследуется от класса Product
 *
 * @constructor
 * @param size          Размер
 * @param stuff         Тип салата
 */
function Salad(size, stuff) {
    Product.call(this, size, stuff);
}

Salad.prototype = Object.create(Product.prototype);

/* Размеры, виды салатов */
Salad.prototype.SIZE_SMALL = { name: "Small", coefficient: 1 };
Salad.prototype.SIZE_MEDIUM = { name: "Medium", coefficient: 1.5 };
Salad.prototype.SIZE_LARGE = { name: "Large", coefficient: 2 };
Salad.prototype.STUFF_CAESAR = { name: "caesar", price: 100, calories: 20 };
Salad.prototype.STUFF_OLIVIE = { name: "olivie", price: 50, calories: 80 };

/**
 * Класс, объекты которого описывают параметры напитка.
 * Наследуется от класса Product
 *
 * @param size          Размер
 * @param stuff         Тип напитка
 */
function Drink(size, stuff) {
    Product.call(this, size, stuff);
}

Drink.prototype = Object.create(Product.prototype);

/* Размеры, виды напитков */
Drink.prototype.SIZE_SMALL = { name: "Small", coefficient: 1 };
Drink.prototype.SIZE_MEDIUM = { name: "Medium", coefficient: 1.5 };
Drink.prototype.SIZE_LARGE = { name: "Large", coefficient: 2 };
Drink.prototype.STUFF_COLA = { name: "cola", price: 50, calories: 40 };
Drink.prototype.STUFF_COFFEE = { name: "coffee", price: 80, calories: 20 };

/**
 * Класс, объекты которого описывают заказ
 *
 */
function Order() {
    this.products = [];
}

/**
 * Добавить продукт в заказ
 * @param product       Продукт для добавления в заказ
 */
Order.prototype.addProduct = function (product) {
    this.products.push(product);
};

/**
 * Удалить продукт из заказа
 * @param product       Продукт для удаления из заказа
 */
Order.prototype.removeProduct = function (product) {
    this.products.splice(this.products.indexOf(product), 1);
};

/**
 * Посчитать общую сумму заказа
 * @returns {Number}    Сумма заказа
 */
Order.prototype.calculateOrderPrice = function () {
    var price = 0;
    this.products.forEach(function (product) {
        price += product.calculatePrice();
    });
    return price;
};

Order.prototype.calculateOrderCalories = function () {
    var calories = 0;
    this.products.forEach(function (product) {
        calories += product.calculateCalories();
    });
    return calories;
};


var product1 = new Hamburger();
product1.setSize(product1.SIZE_LARGE);
product1.setStuff([product1.STUFF_SALAD, product1.STUFF_POTATO]);
console.log(product1);
console.log(product1.calculatePrice());
console.log(product1.calculateCalories());

var product2 = new Salad();
product2.setSize(product2.SIZE_LARGE);
product2.setStuff([product2.STUFF_OLIVIE]);
console.log(product2);
console.log(product2.calculatePrice());
console.log(product2.calculateCalories());

var product3 = new Drink();
product3.setSize(product3.SIZE_MEDIUM);
product3.setStuff([product3.STUFF_COLA]);
console.log(product3);
console.log(product3.calculatePrice());
console.log(product3.calculateCalories());

var order = new Order();
order.addProduct(product1);
order.addProduct(product2);
order.addProduct(product3);
console.log(order);
console.log(order.calculateOrderPrice());
console.log(order.calculateOrderCalories());