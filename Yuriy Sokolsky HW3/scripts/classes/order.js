/**
 * Class Order.
 */
function Order() {
    this.items = [];
}


Order.prototype.addItem = function () {
    if (!Object.isFrozen(this.items)) {
        if (this.items.length)
            arguments[0].id = Math.max.apply(Math, this.items.map(function (o) {
                return o.id;
            })) + 1
        else arguments[0].id = 0;
        this.items.push(arguments[0]);
        return this.items
    } else
        return false;
};


Order.prototype.removeItem = function (idToDelete) {
    if (this.items.length && !Object.isFrozen(this.items)) {
        this.items.splice(this.items.findIndex(({id}) => id == idToDelete), 1);
        return this.items;
    } else {
        return false;
    }
};


Order.prototype.getOrder = function () {
    if (this.items.length) {
        return this.items
    } else {
        return false;
    }
};


Order.prototype.payForOrder = function () {
    if (!Object.isFrozen(this.items)) {
        this.items.forEach(function (item) {
            if (!item.name) {
                for (var key in item) {
                    item[key] = Object.freeze(item[key]);
                }
            }
            item = Object.freeze(item);
        });
        this.items = Object.freeze(this.items);
        return true;
    } else {
        return false
    }
};


Order.prototype.totalPrice = function () {
    var totalPrice = this.items.reduce(function (acc, cur) {
        if (!cur.price) {
            return acc + cur.calculatePrice();
        }
        return acc + cur.price;
    }, 0);
    return totalPrice;
};


Order.prototype.totalCalories = function () {
    var totalCalories = this.items.reduce(function (acc, cur) {
        if (!cur.calories) {
            return acc + cur.calculateCalories();
        }
        return acc + cur.calories;
    }, 0);
    return totalCalories;
};
