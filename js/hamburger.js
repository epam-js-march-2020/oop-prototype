function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
} 

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {
    price: "50 тугриков",
    calories: "20 калорий"
};
Hamburger.SIZE_LARGE = {
    price: "100 тугриков",
    calories: "40 калорий"
};
Hamburger.STUFFING_CHEESE = {
    price: "10 тугриков",
    calories: "20 калорий"
};
Hamburger.STUFFING_SALAD = {
    price: "20 тугриков",
    calories: "5 калорий"
};
Hamburger.STUFFING_POTATO = {
    price: "15 тугриков",
    calories: "10 калорий"
};

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {
    if (this.size === 'SIZE_SMALL') {
        return Hamburger.SIZE_SMALL;
    } else if (this.size === 'SIZE_LARGE') {
        return Hamburger.SIZE_LARGE;
    };
};

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {
    if (this.stuffing === 'STUFFING_CHEESE') {
        return Hamburger.STUFFING_CHEESE;
    } else if (this.stuffing === 'STUFFING_SALAD') {
        return Hamburger.STUFFING_SALAD;
    } else {
        return Hamburger.STUFFING_POTATO;
    };
};

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {
    return parseInt(this.getSize().price) + parseInt(this.getStuffing().price);
};

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {
    return parseInt(this.getSize().calories) + parseInt(this.getStuffing().calories);
};


// Подключаем маленький бургер с  выбраными начинками к кнопкам и добавляем кнопку удаления позиции из заказа
var buttonSmallBurCheeze = document.querySelector(".stuffing_cheese_small");
buttonSmallBurCheeze.addEventListener("click", function() { 
    createPosition(new Hamburger('SIZE_SMALL', 'STUFFING_CHEESE'), 'Маленький бургер с сыром:');
});

function createPosition(hamburger, prefix) {
    var order = document.querySelector('.order');
    var burgerPrice = hamburger.calculatePrice();
    var burgerCalories = hamburger.calculateCalories();

    var div = document.createElement('div');
    div.className = 'position';
    div.innerHTML = prefix + burgerPrice + " тугриков." + " Калорийность: " + burgerCalories + " калорий.";

    var deleteIcon = document.createElement('span');
    deleteIcon.className = 'delete-position';
    deleteIcon.innerHTML = '&times;';
    bindDeleteEvent(deleteIcon);

    var priceInput = createPositionStore(burgerPrice, 'position__price');
    var caloriesInput = createPositionStore(burgerCalories, 'position__calories');

    div.append(deleteIcon, priceInput, caloriesInput);
    order.prepend(div);
}

function createPositionStore(sum, elementClass) {
    var input = document.createElement('input');
    input.type = 'hidden';
    input.value = sum;
    input.className = elementClass;
    return input;
}

function bindDeleteEvent(element) {
    element.addEventListener('click', function(event) {
        var target = event.target;
        var closestPosition = target.closest('.position');
        closestPosition.remove();
    })
}


document.querySelector(".stuffing_potato_small").addEventListener("click",function() { 
    createPosition(new Hamburger('SIZE_SMALL', 'STUFFING_POTATO'), 'Маленький бургер с картошкой:');
});

var buttonSmallBurSalad = document.querySelector(".stuffing_salad_small");
buttonSmallBurSalad.addEventListener("click", function() { 
    createPosition(new Hamburger('SIZE_SMALL', 'STUFFING_SALAD'), 'Маленький бургер с салатом:');
});

// Подключаем большой бургер с начинками к кнопкам
var buttonLargeBurCheese = document.querySelector(".stuffing_cheese_large");
buttonLargeBurCheese.addEventListener("click", function() { 
    createPosition(new Hamburger('SIZE_LARGE', 'STUFFING_CHEESE'), 'Большой бургер с сыром:');
});

var buttonLargeBurPotato = document.querySelector(".stuffing_potato_large");
buttonLargeBurPotato.addEventListener("click", function() { 
    createPosition(new Hamburger('SIZE_LARGE', 'STUFFING_POTATO'), 'Большой бургер с картошкой:');
});

var buttonLargeBurSalad = document.querySelector(".stuffing_salad_large");
buttonLargeBurSalad.addEventListener("click", function() { 
    createPosition(new Hamburger('SIZE_LARGE', 'STUFFING_SALAD'), 'Большой бургер с салатом:');
});