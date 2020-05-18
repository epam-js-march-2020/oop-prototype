//'use strict'

//var gen = 0;


var Subject= function (){// some kind of Observer pattern
    this.observers = [];
    var that= this;


    return {
        subscribeObserver: function(observer){
            //debugger;
            that.observers.push(observer); 
        },
        unsubscribeObserver: function(observer){
            var index = that.observers.indexOf(observer);
            if (index>-1){
                that.observers.splice(index,1);
            }
        },
        notifyObserver: function(observer){
            var index = that.observers.indexOf(observer);
            if (index>-1){
                that.observers[index].notify(index);
            }
        },
        notifyAllObservers: function (){
            for (var i = 0 ; i<that.observers.length; i++){
                that.observers[i].notify(i);
            }
        }
    };
};



var BasketModule = (function(){// pattern module
    var receipts = [];
    var priceHistory = [];
    var kkalHistory = [];
    var sum = 0;
    var ksum=0;
    var receipt = [];
    var gen = 0;
    return {
        addHam: function (size, stuffingStr){
            var ham = foodFactory.createFood({
                foodType :'Hamburger'
            });
            if (size == 'small'){
                ham.SIZE_SMALL();
            }else if(size == 'large'){
                ham.SIZE_LARGE();
            }else{
                console.log('Size is not correct');
                return ;
            }
            if (stuffingStr != undefined){
                var stuffingArr = stuffingStr.split(',');
                for (var key in stuffingArr){
                    ham.STUFFING(stuffingArr[key]);
                }
            }
            ham.id = gen++;
            receipt.push(ham);
            //this.subTotal();
            //subject.notifyObserver(observer1);
        },
        addSalad: function (type, mass){
            var salad = foodFactory.createFood({
                foodType :'Salad'
            });
            salad.id = gen++;
            salad.chooseType(type);
            if (mass != NaN){
                salad.mass = mass;
                var saladKkal = salad.kkal;
                var saladPrice = salad.price;
                salad.price = 0.01 * mass* saladPrice;
                salad.kkal = 0.01 * mass* saladKkal;
            } else {
                console.log('mass is not a number');
                return;
            }
            if (salad.type != 0){
                receipt.push(salad);
            }else{
                return ;
            }
            //subject.notifyObserver(observer1);
            //this.subTotal();
        },
        addDrink: function (type){ // console commands
            var drink = foodFactory.createFood({
                foodType :'Drink'
            });
            drink.id = gen++;
            drink.chooseType(type);
            if (drink.type != 0){
                receipt.push(drink);
            }else{
                return;
            }
            //this.subTotal();
            //subject.notifyObserver(observer1);
        },
        subTotal: function (){ //tracking current receipt status
            //console.log (receipt);
            var price = 0;
            var kkal = 0;
            console.log('Current receipt:')
            for (var key in receipt){
                console.log('id: ' + key /*    receipt.indexOf(receipt[key]) ahahahahahahh didnt notice that before commiting*/ +' '+'Item: ' +  receipt[key].name +' '+ 'price: ' + receipt[key].price +' '+'kkal: ' +  receipt[key].kkal);
                if (receipt[key].mass != undefined){
                    console.log ('                             Mass: '+ receipt[key].mass);
                }else if (receipt[key].size != undefined){
                    console.log('     size:'  + receipt[key].size + '   stuffing : ' + receipt[key].stuffing);
                }
                price += receipt[key].price;
                kkal += receipt[key].kkal;
            }
            sum = price;
            ksum = kkal;
            console.log('Subtotal:')
            console.log('Price: ' + sum);
            console.log('Kkal: ' + ksum);
        },
        deleteItem: function (id){
            receipt.splice(id,1);
            //gen--;
            //this.subTotal();
        },
        pay: function(){
            //this.subTotal();
            receipts.push(receipt);
            priceHistory.push(sum);
            kkalHistory.push(ksum);
            receipt = [];
            sum = 0;
            ksum=0;
            gen = 0;
            console.log('Your new order:')
        },
        checkHistory:  function(){//checks previous receipts
            console.log(receipts);
            console.log(priceHistory);
            console.log(kkalHistory);
        }



    }
})();


var Observer = function (){// observer pattern 2nd part
    return {
        notify: function (){
            BasketModule.subTotal();
        }
    };
};

var subject = new Subject();

var observer1 = new Observer();


subject.subscribeObserver(observer1);



var Hamburger = function(){//pattern constructor 
    this.kkal=0;
    this.price = 0;
    this.size='0';
    this.stuffing = [];
    this.name = 'Hamburger';
};

Hamburger.prototype.SIZE_SMALL = function(){
    this.size = 'small';
    this.kkal += 20;
    this.price += 50;

};
Hamburger.prototype.SIZE_LARGE = function (){
    this.size = 'large';
    this.kkal += 40;
    this.price += 100;

};
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
};


function Salad (){
    this.kkal=0;
    this.price = 0;
    this.type = 0;
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
};



function Drink (){
    this.kkal=0;
    this.price = 0;
    this.type = 0;
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
};



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


//adding facade ? :)

var hamburger = function (options,op){
    BasketModule.addHam(options,op);
    subject.notifyObserver(observer1);
    
};
var drink = function (options){
    BasketModule.addDrink(options);
    subject.notifyObserver(observer1);
};
var salad = function (options,op){
    BasketModule.addSalad(options,op);
    subject.notifyObserver(observer1);
};
var deleteItem = function (options){
    BasketModule.deleteItem(options);
    subject.notifyObserver(observer1);
};
var pay = function(){
    subject.notifyObserver(observer1);
    BasketModule.pay();
}
var foodFactory = new FoodFactory ();

console.log('In order to add Drink write: drink(\'DrinkType\'); currently available drink types: Cola, Coffee');
console.log('In order to add Hamburger write: hamburger(\'Size\',\'Stuffing1,Stuffing2, etc\'); currently available sizes: large, small; currently available stuffing: cheese, salad, potato ');
console.log('In order to add Drink write: salad(\'SaladType\',mass) mass in gramms; currently available salad types: Ceasar, Russian');
console.log('In order to delete position in receipt write: deleteItem(Id), where\'s id is a \'Id\' of item in subtotal list'); 
console.log('In order to pay the receipt write: pay();');