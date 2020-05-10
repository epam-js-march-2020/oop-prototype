// Salad constructor
function Salad(name, count, calories, price) {
    this.name = name;
    this.count = count;
    this.calories = calories;
    this.price = price;
}

Salad.CESAR_TYPE = 'Caesar (g)';
Salad.CESAR_CALORIES = 0.2;
Salad.CESAR_PRICE = 1;

Salad.OLIVIE_TYPE = 'Olivier (g)';
Salad.OLIVIE_CALORIES = 0.8;
Salad.OLIVIE_PRICE = 0.5;

// Get salad calories 
Salad.prototype.getCalories = function() {
    calories1.value = count1.value * Salad.CESAR_CALORIES;
    calories2.value = count2.value * Salad.OLIVIE_CALORIES;
}

// Get salad price
Salad.prototype.getPrice = function() {
    price1.value = count1.value * Salad.CESAR_PRICE;
    price2.value = count2.value * Salad.OLIVIE_PRICE;
} 
