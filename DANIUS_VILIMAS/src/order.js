function Order() {
    this.positions = Array.from(arguments);
    this.paid = false;
}

Order.prototype.getOrderInfo = function () {
    console.log("Your Order:");
    this.positions.forEach(function (it) {
        console.log("- " + it.getName() + " " + it.calculatePrice() + " tug.");
    });
    //return this.items;
}

Order.prototype.calculateTotalPrice = function () {
    var totalPrice = 0;
    this.positions.forEach(function (it) {
        totalPrice += it.calculatePrice();
    });
    return totalPrice;
}
Order.prototype.pay = function () {
    if (this.paid) {
        console.log('Order has already been paid.');
    } else {
        this.paid = true;
        Object.freeze(this);
        console.log('You successfully paid for your order!');
    }
}
Order.prototype.calculateTotalCalories = function () {
    var totalCalories = 0;
    this.positions.forEach(function (it) {
        totalCalories += it.calculateCalories();
    });
    return totalCalories;
}

Order.prototype.deletePosition = function (position) {
    if (this.paid) {
        console.log('Order has already been paid.\nYou cannot delete position from paid order!');
    } else {
        this.positions.splice(this.positions.indexOf(position), 1);
    }
}

Order.prototype.addPosition = function (position) {
    if (this.paid) {
        console.log('Order has already been paid.\nYou cannot add new position!');
    } else {
        this.positions.push(position);
    }
}

/*writeable:false*/