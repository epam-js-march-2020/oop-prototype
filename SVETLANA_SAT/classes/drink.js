// Drink constructor
function Drink(name, count, calories, price) {
    this.name = name;
    this.count = count;
    this.calories = calories;
    this.price = price;
}

Drink.COLA_TYPE = 'Cola';
Drink.COLA_CALORIES = 40;
Drink.COLA_PRICE = 50;

Drink.COFFEE_TYPE = 'Coffee';
Drink.COFFEE_CALORIES = 20;
Drink.COFFEE_PRICE = 80;

// Get drink calories
Drink.prototype.getCalories = function() {
    calories1.value = count1.value * Drink.COLA_CALORIES ;
    calories2.value = count2.value * Drink.COFFEE_CALORIES;
}

// Get drink price
Drink.prototype.getPrice = function() {
    price1.value = count1.value * Drink.COLA_PRICE;
    price2.value = count2.value * Drink.COFFEE_PRICE;
} 
