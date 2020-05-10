/**
 * the class describes orders
 */

function Order() {
    if ( !(this instanceof Order) ) {
        return new Order();
    }

    this.payment = false;
    this.items = [];

    console.log('new empty order was created')
}

Object.defineProperties( Order.prototype, {

    /**
     * to get price of the order
     * @return {Number} current currency 
     */
    price: {
        get: function() {
            return this.items.reduce( function(response, el) {
                return response += el.price
            }, 0 )
        },
        configurable: false
    },

    /**
     * to get calorie content of the order 
     * @return {Number} calorie
     */
    calc: {
        get: function() {
            return this.items.reduce( function(response, el) {
                return response += el.calc;
            }, 0)
        },
        configurable: false
    },

    /**
     * to get the weight of the order
     * @return {Number} gramms
     */
    weight: {
        get: function() {
            return this.items.reduce( function(response, el) {
                return response += el;
            }, 0)
        },
        configurable: false,
    },

    /**
     * to add a position in the order
     * adds only instances of Salad Beverege or Hamburger
     * onother types ignores
     * throws th error if the order was paid
     */
    add: {
        value: function() {
            if ( this.payment ) {
                throw new Error(this.paymentErrorMessage);
            }
            var items = [].slice.call(arguments);
            items.forEach( this.adder.bind(this) );
        },
        writable: false,
        configurable: false
    },

    /**
     * function used in the add method of the class
     * used in loops that iterate arguments that were pased into the add function
     */
    adder: {
        value: function(el) {
            if ( this.payment) {
                throw new Error(this.paymentErrorMessage);
            }
            if (el instanceof Dish) {
                this.items.push(el);
                console.log('We will serve ' + el.toString() )
            } else {
                console.log("We can't serve " + el)
            }
        },
        writable: false,
        enumerable: false,
        configurable: false
    },

    /**
     * deletes a postion in the order
     * throes the error if the order was paid
     * if the passed parametr is  not a number value
     * if the list of postion of the order is emty
     * if the order does hot have such a position in the list
     */
    deletePosition: {
        value: function(positionNumber) {
            if ( this.payment) {
                throw new Error(this.paymentErrorMessage);
            }
            if ( typeof positionNumber !== 'number' || positionNumber < 1 ) {
                throw new Error("I can't delete position " + positionNumber + ". I need a positive number!!");
            }
            if ( this.items.length === 0) {
                throw new Error("The order is empty. You can't delete nothing!!");
            }
            if (positionNumber > this.items.length) {
                throw new Error("There isn't possition " + positionNumber + " in the order");
            }
            this.items.splice(positionNumber - 1, 1);
            console.log('The postion ' + positionNumber + ' have been deleted.')
        },
        writable: false,
        configurable: false,
    },

    /**
     * dalates all the positions in the list of the order
     * throws the error if the order was paid
     */
    drop: {
        value: function() {
            if ( this.payment) {
                throw new Error(this.paymentErrorMessage);
            }
            this.items = [];
            console.log('The order is empty.');
        },
        writable: false,
        configurable: false
    },

    /**
     * shows each position in the list of the order
     * and their position numbers
     * helps to find out the position number if you don't sure about it
     */
    list: {
        value: function() {
            if (this.items.length === 0) {
                console.log('The list is empty, you should add somthing.');
            } else {
                this.items.forEach( function(el, index) {
                    console.log( (index + 1), el.toString() );
                })
            }
        },
        writable: false,
        enumerable: false,
        configurable: false
    }, 
    
    /**
     * makes the order paid
     * throws the error 
     * if the order have been paid
     * if the list of the order is empty
     */
    pay: {
        value: function() {
            if (this.payment) {
                throw new Error('The order had been already paid');
            }
            if (this.items.length === 0) {
                throw new Error('Nobody can pay for an empty order!!');
            }
            this.payment = true;
            Object.defineProperty(this, "payment", {
                writable: false,
                configurable: false
            });
            Object.defineProperty(this, "items", {
                writable: false,
                configurable: false
            });
            console.log('The order is closed');
        }
    },

    /**
     * error message
     */
    paymentErrorMessage: {
        value: "The order was closed. You can't change closed order!!",
        writable: false,
        enumarable: false,
        configurable: false
    }
});