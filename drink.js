function Drink(name, count, calorie, price) {
    this.name = name;
    this.count = count;
    this.calorie = calorie;
    this.price = price;
}

Drink.COLA_TYPE = 'Cola';
Drink.COLA_CALORIE = 40;
Drink.COLA_PRICE = 50;

Drink.COFFEE_TYPE = 'Coffee';
Drink.COFFEE_CALORIE = 20;
Drink.COFFEE_PRICE = 80;

Drink.prototype.getCalorie = function() {
    calorie1.value = count1.value * Drink.COLA_CALORIE ;
    calorie2.value = count2.value * Drink.COFFEE_CALORIE;
}

Drink.prototype.getPrice = function() {
    // console.log( Drink.COLA_PRICE,Drink.COFFEE_PRICE)
    price1.value = count1.value * Drink.COLA_PRICE;
    price2.value = count2.value * Drink.COFFEE_PRICE;
} 

Drink.prototype.setType = function() {
    
}