"use strict";

/**
 * Class Order.
 */
function Order() {
    this.items = [];
    this.status = 'New';
}

Order.prototype.addItem = function () {
    if (this.status === "New") {
        if (this.items.length) arguments[0].id = order.items.reduce(function (max, o) {
            return Math.max(max, o.id);
        }, 0) + 1;else arguments[0].id = 0;
        this.items.push(arguments[0]);
        return this.items.id;
    } else throw "Can`t add item to cart, order is completed";
};

Order.prototype.removeItem = function (idToDelete) {
    if (this.items.length && this.status === "New") {
        this.items.splice(this.items.findIndex(function (_ref) {
            var id = _ref.id;
            return id == idToDelete;
        }), 1);

    } else {
        throw "Can`t remove item from cart, order is completed";
    }
};

Order.prototype.payForOrder = function () {
    if (this.status === "New") {
        this.status = "Completed";
        return true;
    } else {
        throw "Can`t pay for order , it is completed";
    }
};

Order.prototype.getTotalPrice = function () {
    var totalPrice = this.items.reduce(function (acc, cur) {
        return acc + cur.getPrice();
    }, 0);
    return totalPrice;
};

Order.prototype.getTotalCalories = function () {
    var totalCalories = this.items.reduce(function (acc, cur) {
        return acc + cur.getCalories();
    }, 0);
    return totalCalories;
};