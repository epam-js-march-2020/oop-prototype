import {Dish, inherits} from './Dish';

/**
* The class describees parametrs of a hamburger
* throw an erorr if we want to make a beverage that does not exist 
* 
* @constructor
* @param type    the type of hamburger string 
* @param size    the size of hamburger string
*/

function Burger(type, size) {

    if (! (this instanceof Burger)) {
        return new Burger(type, size);
    }
    if (! (size in this.sizing) ) {
        throw new Error("We don't heve such a size of " + this.name );
    }
    if (! (type in this.typing) ) {
        throw new Error(this.typeErrorMessage + this.name );
    }

    this.size = size;
    this.type = type;
    console.log('new ' + this.name + ' was created. Type - ' + this.type + '. Size - ' + this.size)
}

// the class is inherited of the Dish class
inherits(Dish, Burger);

Object.defineProperties(Burger.prototype, {

    /**
     * to get price of the hamburger 
     * @return {Number} current currency
     */
    price: {
        get: function() {
            return this.sizing[this.size].cost + this.typing[this.type].cost;
        },
        configurable: false
    },

    /**
     * to get calorie content of the hamburger
     * @return {Number} calories
     */
    calc: {
        get: function() {
            return this.sizing[this.size].calc + this.typing[this.type].calc;
        },
        configurable: false
    },

    /**
     * available types of hambergers
     * contain information of cost and calorie content 
     * of each type of hamburger
     */
    typing: {
        value: {
            cheese: {
                cost: 10,
                calc: 20
            },
            salad: {
                cost: 20,
                calc: 5
            },
            potato: {
                cost: 15,
                calc: 10
            }
        },
        writable: false,
        enumerable: false,
        configurable: false, 
    },

    /**
     * avialable sizes of hamburgers
     * contain information about cost and calorie content
     */
    sizing: {
        value: {
            big: {
                cost: 100,
                calc: 40,
                weight: 300
            },
            small: {
                cost: 50,
                calc: 20,
                weight: 150
            }
        },
        writable: false,
        enumerable: false,
        configurable: false, 
    },

    /**
     * name property usually used in the coustom toString methods
     */
    name: {
        value: 'Burger',
        writable: false,
        configurable: false
    },

    /**
     * the custom toString method
     * @return {string}
     */
    toString: {
        value: function() {
            return this.size + ' ' + this.name + ' with ' + this.type;
        },
        writable: false,
        enumerable: false,
        configurable: false, 
    },

    /**
     * the custo value of method
     * @return {number} weight
     */
    valueOf: {
        value: function() {
            var stuffWeight = this.size == 'small' ? 15 : 25;
            return this.sizing[this.size].weight + stuffWeight;
        },
        writable: false,
        enumerable: false,
        configurable: false, 
    },
    
});

export {Burger};