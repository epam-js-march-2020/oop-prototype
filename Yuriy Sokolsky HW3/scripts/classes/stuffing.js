/**
 * Class stuffing.
 *
 * @constructor
 * @param options.stuffing
 */
function Stuffing(options) {
    OrderItem.call(this, options);
}

Stuffing.prototype = Object.create(OrderItem.prototype);

var stuffingOptions = {};

stuffingOptions.CHEESE = {
    name: 'cheese',
    price: 10,
    calories: 20
};
stuffingOptions.SALAD = {
    name: 'salad',
    price: 20,
    calories: 5
};
stuffingOptions.POTATO = {
    name: 'potato',
    price: 15,
    calories: 10
};