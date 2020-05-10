//Burger constructor
function Burger(size, stuffing, count, calories, price) {
    this.size = size;
    this.stuffing = stuffing;
    this.count = count;
    this.calories = calories;
    this.price = price;
}

Burger.SIZE_SMALL_PRICE = 50;
Burger.SIZE_SMALL_CALORIES = 20;
Burger.SIZE_SMALL = 'Small';

Burger.SIZE_LARGE_PRICE = 100;
Burger.SIZE_LARGE_CALORIES = 40;
Burger.SIZE_LARGE = 'Large'

Burger.STUFFING_CHEESE_PRICE = 10;
Burger.STUFFING_CHEESE_CALORIES = 20;
Burger.STUFFING_CHEESE = 'Cheese'

Burger.STUFFING_SALAD_PRICE = 20;
Burger.STUFFING_SALAD_CALORIES = 5;
Burger.STUFFING_SALAD = 'Salad'

Burger.STUFFING_POTAT_PRICE= 15;
Burger.STUFFING_POTAT_CALORIES = 10;
Burger.STUFFING_POTAT = 'Potato'

// Calculate price for burger
Burger.prototype.calculatePrice = function(){
    price = 0
        burger.getStuffing(brgStuffing);
        burger.getSize(brgSize);
        stuffing.forEach(element => {
            if(element === Burger.STUFFING_CHEESE){
                price += Burger.STUFFING_CHEESE_PRICE;
            } else if (element === Burger.STUFFING_SALAD) {
                price += Burger.STUFFING_SALAD_PRICE;
            } else if (element === Burger.STUFFING_POTAT) {
                price+=Burger.STUFFING_POTAT_PRICE;
            } else { 
                return null 
            }
        })
        if(size === Burger.SIZE_SMALL) {
            price+=Burger.SIZE_SMALL_PRICE;

        } if(size === Burger.SIZE_LARGE) {
            price+=Burger.SIZE_LARGE_PRICE
        }
        
        else {
            price+=0
        }
        price = price * brgCount.value;
        document.getElementById('brg-price').value=price;
        return price
}

// Calculate calories for burger
Burger.prototype.calculateCalories = function() {
    calories = 0
        burger.getStuffing(brgStuffing);
        burger.getSize(brgSize);
        stuffing.forEach(element => {
            if(element === Burger.STUFFING_CHEESE){
                calories += Burger.STUFFING_CHEESE_CALORIES;
            } else if (element === Burger.STUFFING_SALAD) {
                calories += Burger.STUFFING_SALAD_CALORIES;
            } else if (element === Burger.STUFFING_POTAT) {
                calories += Burger.STUFFING_POTAT_CALORIES
            } else { 
                return null 
            }
        })
        if(size === Burger.SIZE_SMALL) {
            calories += Burger.SIZE_SMALL_CALORIES;

        } if (size === Burger.SIZE_LARGE) {
            calories += Burger.SIZE_LARGE_CALORIES
        } else {
            calories += 0
        }
        calories = calories * brgCount.value;
        document.getElementById('brg-calories').value=calories;
}

// Get burger size
Burger.prototype.getSize = function(brgS) {
    brgS.forEach(element => {
        element.className === 'badge-pill badge-warning'? x = element.id:null
    });
    if(x === "L") {
        size = Burger.SIZE_LARGE 
    }else if(x === 'S') {
        size = Burger.SIZE_SMALL 
    } else {
        size = x
    } 
    return size
}

// Get burger stuffing
Burger.prototype.getStuffing = function(brgStuf) {
    stuffing = []
    brgStuf.forEach(function(element) {
        if(element.className === 'badge-pill badge-warning') {
            if(element.id === 'cheese') {
                stuffing.push(Burger.STUFFING_CHEESE)
            } else if(element.id === 'salad') {
                stuffing.push(Burger.STUFFING_SALAD)
            } else if(element.id === 'potato') {
                stuffing.push(Burger.STUFFING_POTAT)
            } else { return null }
        }
        return null   
    });
}
