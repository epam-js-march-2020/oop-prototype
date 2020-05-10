function Salad(name) {
    this.name = name;
} 

/*Цена и калорийность салатов*/
Salad.CAESAR = {
    name: "caesar",
    price: "100 тугриков",
    calories: "20 калорий"
};
Salad.OLIVE = {
    name: "olive",
    price: "50 тугриков",
    calories: "80 калорий"
};

/**
 * Узнать вид салата
 */
Salad.prototype.getName = function () {
    if (this.name === 'CAESAR') {
        return Salad.CAESAR;
    } else if (this.name === 'OLIVE') {
        return Salad.OLIVE;
    };
};

/**
 * Узнать цену салата за 100г.
 * @return {Number} Цена в тугриках
 */
Salad.prototype.calculatePrice = function () {
    return parseInt(this.getName().price);
};

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Salad.prototype.calculateCalories = function () {
    return parseInt(this.getName().calories);
};

//Подключаем салаты к кнопкам
var buttonCaesar = document.querySelector(".caesar");
buttonCaesar.addEventListener("click", function() { 
    createPosition(new Salad('CAESAR'), 'Салат цезарь 100г: ');
});

var buttonOlive = document.querySelector(".olive");
buttonOlive.addEventListener("click", function() { 
    createPosition(new Salad('OLIVE'), 'Салат оливье 100г: ');
});