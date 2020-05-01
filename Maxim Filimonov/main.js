'use strict'
function* idMaker() {
    var index = 0;
    for(let i = 0;1; i++)
      yield index++;
};
var gen = idMaker();
var Subject= function (){
    this.observers = [];


    return {
        subscribeObserver: function(observer){
            this.observers.push(observer);
        },
        unsubscribeObserver: function(observer){
            var index = this.observers.indexOf(observer);
            if (index>-1){
                this.observers.splice(index,1);
            }
        },
        notifyObserver: function(observer){
            var index = this.observers.indexOf(observer);
        }
    }
}
var Hamburger = function(){//pattern constructor 
    this.kkal=0;
    this.price = 0;
    this.size='Not yet chosen!';
    this.stuffing = [];
}

Hamburger.prototype.SIZE_SMALL = function(){
    this.size = 'small';
    this.kkal += 20;
    this.price += 50;

}
Hamburger.prototype.SIZE_LARGE = function (){
    this.size = 'large';
    this.kkal += 40;
    this.price += 10;

}
Hamburger.prototype.STUFFING= function(n){
    if (n =='cheese'){
        this.price += 10;
        this.kkal += 20;
    }else if (n == 'salad'){
        this.price += 20;
        this.kkal += 5;
    }else if (n == 'potato'){
        this.price += 15;
        this.kkal += 10;
    }else{
        return console.log('There\'s no such stuffing try again');
    }
    this.stuffing.push(n);
}
Hamburger.prototype.getSize= function (){
    console.log(this.size);
    return this.size;
}
Hamburger.prototype.getPrice= function (){
    console.log(this.price);
    return this.price;
}
Hamburger.prototype.getStuffing = function (){
    console.log (this.stuffing);
    return this.stuffing;
}
Hamburger.prototype.getKkal = function (){
    return this.kkal;
}

function Salad (){
    this.kkal=0;
    this.price = 0;
    this.type = 'Please choose your salad\'s type';
}
Salad.prototype.chooseType = function(n){
    if (n =='Ceasar'){
        this.price += 100;
        this.kkal += 20;
    }else if (n == 'Russian'){
        this.price += 50;
        this.kkal += 80;
    }else{
        return console.log('There\'s no such salad try again');
    }
    this.type = n;
}
Salad.prototype.getType = function(){
    return this.type;
}

Salad.prototype.getPrice = Hamburger.prototype.getPrice;
Salad.prototype.getKkal = Hamburger.prototype.getKkal;


function Drink (){
    this.kkal=0;
    this.price = 0;
    this.type = 'Please choose your drink\'s type';
}

Drink.prototype.chooseType = function(n){
    if (n =='Cola'){
        this.price += 50;
        this.kkal += 40;
    }else if (n == 'Coffee'){
        this.price += 80;
        this.kkal += 20;
    }else{
        return console.log('There\'s no such drink try again');
    }
    this.type = n;
}

Drink.prototype.getType = Salad.prototype.getType;
Drink.prototype.getPrice = Hamburger.prototype.getPrice;
Drink.prototype.getKkal = Hamburger.prototype.getKkal;


function FoodFactory (){}; //factory?

FoodFactory.prototype.createFood = function(options){
    switch(options.foodType){
        case 'Hamburger':
            this.foodType = Hamburger;
            break;
        case 'Salad':
            this.foodType = Salad;
            break;
        case 'Drink':
            this.foodType = Drink;
            break;
        default:
            this.foodType= Hamburger;
            break;
    }
    return new this.foodType(options);
};

var foodFactory = new FoodFactory ();

// var drink1 = foodFactory.createFood({
//     foodType :'Drink'
// });
// var salad1 = foodFactory.createFood({
//     foodType :'Salad'});
// var ham1 = foodFactory.createFood({
//     foodType :'Hamburger'});
// ham1.SIZE_LARGE();
// ham1.STUFFING('cheese');
// ham1.getPrice();
// drink1.chooseType('Cola');
// console.log(drink1.getKkal());
// console.log (drink1);
// console.log (salad1);
// console.log (ham1);

var recipe = [];

function addDrink (type){
    var drink = foodFactory.createFood({
        foodType :'Drink'
    });
    drink.id = gen.next().value;
    drink.chooseType(type);
    recipe.push(drink);
}
// var drink2 = getDrink('Cola');
// console.log (drink2);

function addHam (size, stuffingStr){
    var ham = foodFactory.createFood({
        foodType :'Hamburger'
    });
    if (size == 'small'){
        ham.SIZE_SMALL();
    }else if(size == 'large'){
        ham.SIZE_LARGE();
    }else{
        console.log('Size is not correct');
        return '';
    }
    if (stuffingStr != undefined){
        var stuffingArr = stuffingStr.split(',');
        for (var key in stuffingArr){
            ham.STUFFING(stuffingArr[key]);
        }
    }
    ham.id = gen.next().value;
    recipe.push(ham);
}
function addSalad (type){
    var salad = foodFactory.createFood({
        foodType :'Salad'
    });
    salad.id = gen.next().value;
    salad.chooseType(type);
    recipe.push (salad);
}
function subTotal (){
    console.log (recipe);
    var price = 0;
    var kkal = 0;
    for (var key in recipe){
        price += recipe[key].getPrice();
        kkal += recipe[key].getKkal();
    }
    console.log('Price: ' + price);
    console.log('Kkal: ' + kkal);
}

addDrink('Cola');
addSalad('Ceasar');
addHam('large','cheese,potato');
addHam('small');
subTotal();

// var ham2 = getHam ('large', 'cheese,salad');
// console.log(ham2);