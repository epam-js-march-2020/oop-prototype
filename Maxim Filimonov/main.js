'use strict'
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

var ham1 = new Hamburger();
ham1.SIZE_LARGE();
ham1.STUFFING('cheese');
ham1.getPrice();
console.log ('123');