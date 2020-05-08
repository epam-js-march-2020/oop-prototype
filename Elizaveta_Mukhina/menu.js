function Order() {
    this.orderName = [];
    this.orderPrice = 0;
    this.orderCalories = 0;
}

function Food(name) {
    this.name = name;
    this.price = 0;
    this.calories = 0;
} 

function Hamburger(name, stuffing) {
    Food.call(this, name);
    this.stuffing = stuffing;
switch(name){
    case "small":
    this.price = Hamburger.SIZE_SMALL.price;
    this.calories = Hamburger.SIZE_SMALL.calories;
    break;
    case "large":
    this.price = Hamburger.SIZE_LARGE.price;
    this.calories = Hamburger.SIZE_LARGE.calories;
    break;
} 
switch(stuffing){
    case "cheese":
    this.price += Hamburger.STUFFING_CHEESE.price;
    this.calories += Hamburger.STUFFING_CHEESE.calories;
    break;
    case "salad":
    this.price += Hamburger.STUFFING_SALAD.price;
    this.calories += Hamburger.STUFFING_SALAD.calories;
    break;
    case "potato":
    this.price += Hamburger.STUFFING_POTATO.price;
    this.calories += Hamburger.STUFFING_POTATO.calories;
    break;
}
}

function Salad(name) {
    Food.call(this, name);
switch(name){
    case "ceasar":
    this.price = Salad.CEASAR.price;
    this.calories = Salad.CEASAR.calories;
    break;
    case "olivie":
    this.price = Salad.OLIVIE.price;
    this.calories = Salad.OLIVIE.calories;
    break;
} 
}

function Drink(name) {
    Food.call(this, name);
switch(name){
    case "coca-cola":
    this.price = Drink.COLA.price;
    this.calories = Drink.COLA.calories;
    break;
    case "coffee":
    this.price = Drink.COFFEE.price;
    this.calories = Drink.COFFEE.calories;
    break;
} 
}

Hamburger.prototype = Object.create(Food.prototype);
Salad.prototype = Object.create(Food.prototype);
Drink.prototype = Object.create(Food.prototype);

Hamburger.SIZE_SMALL = {price: 50, calories: 20};
Hamburger.SIZE_LARGE = {price: 100, calories: 40};
Hamburger.STUFFING_CHEESE = {price: 10, calories: 20};
Hamburger.STUFFING_SALAD = {price: 20, calories: 5};
Hamburger.STUFFING_POTATO = {price: 15, calories: 10};
Salad.CEASAR = {price: 100, calories: 20};
Salad.OLIVIE = {price: 50, calories: 80};
Drink.COLA = {price: 50, calories: 40};
Drink.COFFEE = {price: 80, calories: 20};

Hamburger.prototype.getSize = function () {
   console.log(`Hamburger size is ${this.name}`);
}

Hamburger.prototype.getStuffing = function () {
console.log(`Hamburger stuffing is ${this.stuffing}`);
}

Order.prototype.calculatePrice = function () {
console.log(`The price of your order is ${this.orderPrice} ₮`);
}

Order.prototype.calculateCalories = function () {
console.log(`The order contains ${this.orderCalories} calories`);
}

Order.prototype.addProductToOrder = function() {
if(Object.isFrozen(this.orderName)) {
console.log("Your order has already been paid");
} else {
    for(var i = 0; i<arguments.length; i++){
        this.orderName.push(arguments[i]);
    this.orderPrice += arguments[i].price;
    this.orderCalories += arguments[i].calories;
    console.log(`You added a ${arguments[i].name} with ${arguments[i].calories} calories for ${arguments[i].price} ₮ to your order`)
}
}
}

Order.prototype.removeProductFromOrder = function(item) {
 if(this.orderName.length == 0) {
    console.log(`Your order is empty`);
} else if (Object.isFrozen(this.orderName)) {
console.log("Your order has already been paid");
} else {
var index = this.orderName.indexOf(item);
if(index > -1 && this.orderName.length != 0) {
    this.orderName.splice(index, 1);
}
this.orderPrice -= item.price;
this.orderCalories -= item.calories;
console.log(`You removed a ${item.name} from your order`);
}
}

Order.prototype.orderAfterPayment = function() {
Object.freeze(this.orderName); 
    console.log("You cann't edit the order");
}

var hamburger = new Hamburger("large", "cheese");
var drink = new Drink("coffee");
var salad = new Salad("ceasar");
var order = new Order();
order.addProductToOrder(hamburger, hamburger, drink, salad);
order.removeProductFromOrder(drink);
order.orderAfterPayment(hamburger);
order.addProductToOrder(salad);
order.removeProductFromOrder(drink);
hamburger.getSize();
hamburger.getStuffing();
order.calculatePrice();
order.calculateCalories();
console.log(hamburger);
console.log(drink);
console.log(salad);
console.log(order);
