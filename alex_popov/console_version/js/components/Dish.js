'use strict';

/**
* the paren class for Beverage Burder  and Salad classes
*/

function Dish() {}

// contain the message that is throw if we try to make a Dish with parametrs that don't exist

Object.defineProperties(Dish.prototype, {
    typeErrorMessage: {
        value: "We don't have such a kind of ",
        writable: false,
        enumerable: false,
        configurable: false
    }
})

// the functions that allow to inherit a class of another one 

function inherits(parent, child) {
    var F = function(){};
    F.prototype = parent.prototype;
    child.prototype = new F();
    Object.defineProperty(child.prototype, 'constructor',{
        value: child,
        writable: false,
        enumerable: false,
        configurable: false
    })
}