function Order() {
    this.isPaid = false;
};

//Узнать полную стоимость заказа
Order.prototype.calculateTotalPrice = function() {
    var priceList = getSummaryList('.position__price');
    return priceList.reduce(summaryReducer, 0);
};

function getSummaryList(className) {
    return Array.prototype.slice.call(document.querySelectorAll(className));
};

function summaryReducer(accumulator, next) {
    return accumulator + parseFloat(next.value);
}

//Узнать полную калорийность заказа
Order.prototype.calculateTotalCalories = function() {
    var priceList = getSummaryList('.position__calories');
    return priceList.reduce(summaryReducer, 0);
};

//Подключаем кнопку с итоговой стоимостью и калорийностью
document.querySelector('.result').addEventListener('click', function() {
    var order = new Order();
    var resultPrice = document.querySelector('.result-price');
    resultPrice.innerHTML = 'Сумма заказа: ' + order.calculateTotalPrice();
});

document.querySelector('.result').addEventListener('click', function() {
    var order = new Order();
    var resultPrice = document.querySelector('.result-calories');
    resultPrice.innerHTML = 'Сумма калорий: ' + order.calculateTotalCalories();
});