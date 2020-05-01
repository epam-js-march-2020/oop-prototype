//'use strict'
function* idMaker() {
    var index = 0;
    for(let i = 0;1; i++)
      yield index++;
};
var gen = idMaker();


// var Subject= function (){
//     this.observers = [];

//     return {
//         subscribeObserver: function(observer){
//             this.observers.push(observer);
//         },
//         unsubscribeObserver: function(observer){
//             var index = this.observers.indexOf(observer);
//             if (index>-1){
//                 this.observers.splice(index,1);
//             }
//         },
//         notifyObserver: function(observer){
//             var index = this.observers.indexOf(observer);
//             if (index>-1){
//                 this.observers[index].notify(index);
//             }
//         },
//         notifyAllObservers: function (){
//             for (var i = 0 ; i<this.observers.length; i++){
//                 this.observers[i].notify(i);
//             }
//         }
//     };
// };
// var Observer = function (){
//     return {
//         notify: function (){
//             subTotal();
//         }
//     };
// };

// var subject = new Subject();

// var observer1 = new Observer();


// subject.subscribeObserver(observer1);
// subject.notifyObserver(observer1);


var Hamburger = function(){//pattern constructor 
    this.kkal=0;
    this.price = 0;
    this.size='Not yet chosen!';
    this.stuffing = [];
    this.name = 'Hamburger';
}

Hamburger.prototype.SIZE_SMALL = function(){
    this.size = 'small';
    this.kkal += 20;
    this.price += 50;

}
Hamburger.prototype.SIZE_LARGE = function (){
    this.size = 'large';
    this.kkal += 40;
    this.price += 100;

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
    //console.log(this.size);
    return this.size;
}
Hamburger.prototype.getPrice= function (){
    //console.log(this.price);
    return this.price;
}
Hamburger.prototype.getStuffing = function (){
    //console.log (this.stuffing);
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
        this.name = "Ceasar Salad";
    }else if (n == 'Russian'){
        this.price += 50;
        this.kkal += 80;
        this.name = "Russian Salad";
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
        this.name = "Cola";
    }else if (n == 'Coffee'){
        this.price += 80;
        this.kkal += 20;
        this.name = "Coffee";
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

var receipt = [];

function addDrink (type){
    var drink = foodFactory.createFood({
        foodType :'Drink'
    });
    drink.id = gen.next().value;
    drink.chooseType(type);
    receipt.push(drink);
    subTotal();
    //subject.notifyObserver(observer1);
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
    receipt.push(ham);
    subTotal();
    //subject.notifyObserver(observer1);
}
function addSalad (type, mass){
    var salad = foodFactory.createFood({
        foodType :'Salad'
    });
    salad.id = gen.next().value;
    salad.chooseType(type);
    salad.mass = mass;
    var saladPrice = salad.price;
    salad.price = 0.01 * mass* saladPrice;
    receipt.push (salad);
    //subject.notifyObserver(observer1);
    subTotal();
}
function subTotal (){
    //console.log (receipt);
    var price = 0;
    var kkal = 0;
    console.log('Current receipt:')
    for (var key in receipt){
        console.log('id: ' + receipt[key].id +' '+'Item: ' +  receipt[key].name +' '+ 'price: ' + receipt[key].price +' '+'kkal: ' +  receipt[key].kkal);
        if (receipt[key].mass != undefined){
            console.log ('                             Mass: '+ receipt[key].mass);
        }else if (receipt[key].size != undefined){
            console.log('     size:'  + receipt[key].size + '   stuffing : ' + receipt[key].stuffing);
        }
        price += receipt[key].getPrice();
        kkal += receipt[key].getKkal();
    }
    console.log('Subtotal:')
    console.log('Price: ' + price);
    console.log('Kkal: ' + kkal);
}
function deleteItem (id){
    receipt.splice(id,1);
    subTotal();
}
var receipts = [];
function total (){
    subTotal();
    receipts.push(receipt);
    gen = idMaker();
    receipt = [];
    console.log('Choose your new order')
}

// addDrink('Cola');
// addSalad('Ceasar');
// addHam('large','cheese,potato');
// addHam('small');

// var ham2 = getHam ('large', 'cheese,salad');
// console.log(ham2);
console.log('In order to add Drink write: addDrink(\'DrinkType\'); currently available: Cola, Coffee');
console.log('In order to add Hamburger write: addHam(\'Size\',\'Stuffing1,Stuffing2, etc\'); currently available sizes: large, small; currently available stuffing: cheese, salad, potato ');
console.log('In order to add Drink write: addSalad(\'SaladType\',mass) mass in gramms; currently available: Ceasar, Russian');
console.log('In order to delete position in receipt write: deleteItem(Id), where\'s id is a \'Id\' of item in subtotal list'); 
console.log('In order to pay the receipt write: total();')