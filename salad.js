function Salad(name, count, calorie, price) {
    this.name = name;
    this.count = count;
    this.calorie = calorie;
    this.price = price;
}

Salad.CESAR_TYPE = 'Caesar';
Salad.CESAR_CALORIE = 20;
Salad.CESAR_PRICE = 100;

Salad.OLIVIE_TYPE = 'Olivier';
Salad.OLIVIE_CALORIE = 80;
Salad.OLIVIE_PRICE = 50;

Salad.prototype.getCalorie = function() {
    calorie1.value = count1.value * Salad.CESAR_CALORIE;
    calorie2.value = count2.value * Salad.OLIVIE_CALORIE;
}

Salad.prototype.getPrice = function() {
    price1.value = count1.value * Salad.CESAR_PRICE;
    price2.value = count2.value * Salad.OLIVIE_PRICE;
} 

Salad.prototype.setType = function() {
    
}