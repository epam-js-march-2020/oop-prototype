/**
* The class describees parametrs of a Saladss
* throw an erorr if we want to make a beverage that does not exist 
* and we pass not a number as weight parametr
* 
* @constructor
* @param type      the type of salad string 
* @param weight    the weight of hamburger number
*/

function Salad(type, weight) {

    if (! (this instanceof Salad)) {
        return new Salad(type, weight)
    }
    if (! (type in this.typing) ) {
        throw new Error(this.typeErrorMessage + this.name)
    }
    if (typeof weight != 'number') {
        throw new Error('The weight argument must be a Number')
    }

    this.type = type;
    this.weight = weight;
    console.log('new ' + this.name + ' created. Type - ' + this.type + '. Weight - ' + this.weight)
}

inherits(Dish, Salad);

Object.defineProperties(Salad.prototype, {

    /**
     * to get price of the salsd 
     * @return {Number} current currency
     */
    price:{
        get: function() {
            return Math.ceil( this.typing[this.type].cost * (this.weight / 100) );
        },
        configurable: false
    },
    
    /**
     * to get calorie content of the salsd 
     * @return {Number} calorie
     */
    calc: {
        get: function() {
            return this.typing[this.type].calc * (this.weight / 100);
        },
        configurable: false
    },

    /**
     * name of the type of the dish 
     */
    name: {
        value: 'Salad',
        writable: false,
        configurable: false
    },

    /**
     * avialable types of salad
     * contain information about 
     * price and calorie content 
     */
    typing: {
        value: {
            cesar: {
                cost: 100,
                calc: 20
            },
            olivier: {
                cost: 50,
                calc: 80
            }
        },
        writable: false,
        enumerable: false,
        configurable: false
    },

    /**
     * custom toString method
     * @return {string} 
     */
    toString: {
        value: function() {
            return this.name + ' ' + this.type + ' - ' + this.weight + ' gramm'
        },
        writable: false,
        enumerable: false,
        configurable: false
    },

    /**
     * custom valueOf method
     * @return {Number} weight
     */
    valueOf: {
        value: function() {
            return this.weight;
        },
        writable: false,
        enumerable: false,
        configurable: false
    }
});