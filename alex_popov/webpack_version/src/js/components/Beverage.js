import {Dish, inherits} from './Dish';


/**
* The class describees parametrs of a beverage
* throw an erorr if we want to make a beverage that does not exist 
* 
* @constructor
* @param type    the type of the beverage string 
*/

function Beverage(type) {
    
    if ( !(this instanceof Beverage) ) {
        return new Beverage(type);
    }
    if ( ! (type in this.typing)) {
        throw new Error(this.typeErrorMessage + this.name);
    }

    this.type = type;

    Object.defineProperties(this, {
        type: {
            writable:false,
            configurable: false
        }
    } );
    
    console.log('new ' + this.name + ' was created. Type - ' + this.type)
}

// the class is inhereted of Dish class
inherits(Dish, Beverage);

Object.defineProperties(Beverage.prototype, {
    // to get the price of the hamburger
    // return number
    price: {
        get: function() {
            return this.typing[this.type].cost;
        },
        configurable: false
    },

    // to get a calorie content of the hamburger
    // return number 
    calc: {
        get: function() {
            return this.typing[this.type].calc;
        },
        configurable: false
    },

    // name usually used when  we need to make a string of a hmburger object 
    name: {
        value: 'Bavarage',
        writable: false,
        configurable: false
    },

    // every baverage has fixed wieght
    weight: {
        value: 200,
        writable: false,
        configurable: false
    },

    //avialable types of Beverages
    // contain such parametrs as cost and calorie content of each type of the beverages
    typing: {
        value:{
            cola: {
                cost: 50,
                calc: 40,
            },
            coffee: {
                cost: 80,
                calc: 20,
            }
        },
        writable: false,
        enumerable: false,
        configurable: false
    },

    // the cuxtom to string method
    // retur string
    toString: {
        value: function() {
            return 'A cup of ' + this.type;
        },
        writable: false,
        enumerable: false,
        configurable: false
    },

    // the custom value of method
    // return number
    valueOf: {
        value: function() {
            return this.weight;
        },
        writable: false,
        inumerable: false,
        configurable: false
    }
});

export {Beverage};