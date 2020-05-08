/**
 * Class Order.
 */

const OrderStatus={
    COMPLETED:"Completed",
    NEW:"NEW"
}

function Order() {
    this.items = [];
    this.status = OrderStatus.NEW ;
}

Order.prototype.addItem = function () {
    if (this.status === OrderStatus.NEW ) {
        if (this.items.length)

            arguments[0].id = order.items.reduce(function (max, o) {
                return Math.max(max, o.id);
             }, 0) + 1;
        else
            arguments[0].id = 0;

        this.items.push(arguments[0]);

        return this.items.id;

    } else
        throw "Can`t add item to cart, order is completed";
};

Order.prototype.removeItem = function (idToDelete) {
    if (this.status === OrderStatus.NEW ) {
        if(this.items.length)

            this.items.splice(this.items.findIndex(function (_ref) {
                var id = _ref.id;
                return id === idToDelete;
            }), 1);

        else throw "Items is empty";

    } else {
        throw "Can`t remove item from cart, order is completed";
    }
};

Order.prototype.payForOrder = function () {
    if (this.status === OrderStatus.NEW ) {
        this.status = OrderStatus.COMPLETED;
        return true;
    } else {
        throw "Can`t pay for order , it is completed";
    }
};

Order.prototype.getTotalPrice = function () {
    return this.items.reduce(function (acc, cur) {
        return acc + cur.getPrice();
    }, 0);
};

Order.prototype.getTotalCalories = function () {
    return this.items.reduce(function (acc, cur) {
        return acc + cur.getCalories();
    }, 0);
};