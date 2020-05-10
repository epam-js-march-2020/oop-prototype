Hamburger.SIZE_SMALL = {
    name: 'Small',
    price: 50,
    calories: 20
}
Hamburger.SIZE_LARGE = {
    name: 'Large',
    price: 100,
    calories: 40
}

Hamburger.STUFFING_CHEESE = {
    name: 'Cheese',
    price: 10,
    calories: 20
}

Hamburger.STUFFING_SALAD = {
    name: 'Salad',
    price: 20,
    calories: 5
}

Hamburger.STUFFING_POTATO = {
    name: 'Potato',
    price: 15,
    calories: 10
}

Salad.OLIVIE = {
    name: 'Olivie',
    price: 50,
    calories: 80
}

Salad.CAESAR = {
    name: 'Caesar',
    price: 100,
    calories: 20
}

Drink.COFFEE = {
    name: 'Coffee',
    price: 80,
    calories: 20
}

Drink.COKE = {
    name: "Coke",
    price: 50,
    calories: 40
}
/*var hamburgers = [new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE), new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO)];
var salads = [new Salad(100, Salad.OLIVIE), new Salad(200, Salad.CAESAR)];
var drinks = [new Drink(Drink.COFFEE), new Drink(Drink.COKE)];*/

var order = new Order(new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE), new Salad(200, Salad.CAESAR), new Drink(Drink.COFFEE));

order.getOrderInfo();
console.log("Total cal.: " + order.calculateTotalCalories());
console.log("Total price.: " + order.calculateTotalPrice());

console.log("--------------Удаляем кофе из заказа");
order.deletePosition(new Drink(Drink.COFFEE));
order.getOrderInfo();
console.log("Total cal.: " + order.calculateTotalCalories());
console.log("Total price.: " + order.calculateTotalPrice());

console.log("--------------Добавим колу в заказ");
order.addPosition(new Drink(Drink.COKE));
order.getOrderInfo();
console.log("Total cal.: " + order.calculateTotalCalories());
console.log("Total price.: " + order.calculateTotalPrice());

console.log("--------------Платим за заказ");
order.pay();

console.log("--------------Пробуем изменить заказ");
order.addPosition(new Drink(Drink.COKE));
order.deletePosition(new Drink(Drink.COKE));