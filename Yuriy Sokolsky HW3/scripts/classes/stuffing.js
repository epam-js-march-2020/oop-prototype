/**
 * Class stuffing.
 *
 * @constructor
 * @param size        size of burger
 * @param stuffing    stuffing of burger
 */
function Stuffing(options,stuffing) {
    MenuItem.call(this, options);
}

Stuffing.prototype = Object.create(MenuItem.prototype);


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