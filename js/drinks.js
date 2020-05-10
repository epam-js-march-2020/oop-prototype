function Drink(name) {
    this.name = name;
} 

/* Разновидности напитков с ценой и калориями*/
Drink.COLA = {
    name: "cola",
    price: "50 тугриков",
    calories: "40 калорий"
};
Drink.COFFEE = {
    name: 'coffee',
    price: "80 тугриков",
    calories: "20 калорий"
};

/**
 * Разновидность напитков
 */
Drink.prototype.getName = function () {
    if (this.name === 'COLA') {
        return Drink.COLA;
    } else if (this.name === 'COFFEE') {
        return Drink.COFFEE;
    };
};

/**
 * Узнать цену напитка
 * @return {Number} Цена в тугриках
 */
Drink.prototype.calculatePrice = function () {
    return parseInt(this.getName().price);
};

/**
 * Узнать калорийность напитка
 * @return {Number} Калорийность в калориях
 */
Drink.prototype.calculateCalories = function () {
    return parseInt(this.getName().calories);
};

//Подключаем напитки к кнопкам
var buttonCola = document.querySelector(".cola");
buttonCola.addEventListener("click", function() { 
    createPosition(new Drink('COLA'), 'Кока-кола: ');
});

var buttonCoffee = document.querySelector(".coffee");
buttonCoffee.addEventListener("click", function() { 
    createPosition(new Drink('COFFEE'), 'Кофе: ');
});