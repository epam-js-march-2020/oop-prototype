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

    price += this.stuff.price;
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

    calories += this.stuff.calories;
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
    this.name = 'hamburger';
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
    this.name = 'salad';
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
    this.name = 'drink';
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

var renderOrder = function () {
    console.log(order);
    var { products } = order;

    var tmpl = _.template($('#productsTableTemplate').html());

    $('#productsTable').html(tmpl({
        order,
        products
    }));

    products.forEach(function (product) {
        $('#' + products.indexOf(product)).click({ product }, function (event) {
            var { product } = event.data;

            switch (product.name) {
                case 'hamburger': renderHamburgerEdit(product); break;
                case 'salad': renderSaladEdit(product); break;
                case 'drink': renderDrinkEdit(product); break;
            }
        });
    });
};

var closeAllEdits = function () {
    $('#hamburgerEdit').hide();
    $('#saladEdit').hide();
    $('#drinkEdit').hide();
};

var renderHamburgerEdit = function (product) {
    closeAllEdits();
    var tmpl = _.template($('#hamburgerEditTemplate').html());

    $('#hamburgerEdit').html(tmpl({
        product
    })).show();

    $('input[name*="radio"]').each(function (index, tag) {
        $(tag).click({ tag }, function (event) {
            var { tag } = event.data;
            if ($(tag).val().includes('SIZE')){
                product.setSize(product[$(tag).val()]);
            } else {
                product.setStuff(product[$(tag).val()]);
            }
            renderOrder();
        })
    });
    $('input[name =productDelete]').click(function (){
        order.removeProduct(product);
        closeAllEdits();
        renderOrder();
    });
    $('input[name =doneButton]').click(function () {
        closeAllEdits();
    });
};

var renderSaladEdit = function (product) {
    closeAllEdits();
    var tmpl = _.template($('#saladEditTemplate').html());

    $('#saladEdit').html(tmpl({
        product
    })).show();

    $('input[name*="radio"]').each(function (index, tag) {
        $(tag).click({ tag }, function (event) {
            var { tag } = event.data;
            if ($(tag).val().includes('SIZE')){
                product.setSize(product[$(tag).val()]);
            } else {
                product.setStuff(product[$(tag).val()]);
            }
            renderOrder();
        })
    });
    $('input[name =productDelete]').click(function (){
        order.removeProduct(product);
        closeAllEdits();
        renderOrder();
    });
    $('input[name =doneButton]').click(function () {
        closeAllEdits();
    });
};

var renderDrinkEdit = function (product) {
    closeAllEdits();
    var tmpl = _.template($('#drinkEditTemplate').html());

    $('#drinkEdit').html(tmpl({
        product
    })).show();

    $('input[name*="radio"]').each(function (index, tag) {
        $(tag).click({ tag }, function (event) {
            var { tag } = event.data;
            if ($(tag).val().includes('SIZE')){
                product.setSize(product[$(tag).val()]);
            } else {
                product.setStuff(product[$(tag).val()]);
            }
            renderOrder();
        })
    });
    $('input[name =productDelete]').click(function (){
        order.removeProduct(product);
        closeAllEdits();
        renderOrder();
    });
    $('input[name =doneButton]').click(function () {
        closeAllEdits();
    });
};

var addHamburger = function () {
    var newHamburger = new Hamburger();
    newHamburger.setSize(newHamburger.SIZE_SMALL);
    newHamburger.setStuff(newHamburger.STUFF_POTATO);
    order.addProduct(newHamburger);
    renderOrder();
};

var addSalad = function () {
    var newSalad = new Salad();
    newSalad.setSize(newSalad.SIZE_SMALL);
    newSalad.setStuff(newSalad.STUFF_CAESAR);
    order.addProduct(newSalad);
    renderOrder();
};
var addDrink = function () {
    var newDrink = new Drink();
    newDrink.setSize(newDrink.SIZE_SMALL);
    newDrink.setStuff(newDrink.STUFF_COLA);
    order.addProduct(newDrink);
    renderOrder();
};

var order = new Order();

$(document).ready(function () {
    $('#addHamburger').click(addHamburger);
    $('#addSalad').click(addSalad);
    $('#addDrink').click(addDrink);
    renderOrder();
});