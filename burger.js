//Burger constructor

function Burger(size, stuffing, count, calorie, price) {
    this.size = size;
    this.stuffing = stuffing;
    this.count = count;
    this.calorie = calorie;
    this.price = price;
}

Burger.SIZE_SMALL_PRICE = 50;
Burger.SIZE_SMALL_CALORIE = 20;
Burger.SIZE_SMALL = 'Small';

Burger.SIZE_LARGE_PRICE = 100;
Burger.SIZE_LARGE_CALORIE = 40;
Burger.SIZE_LARGE = 'Large'

Burger.STUFFING_CHEESE_PRICE = 10;
Burger.STUFFING_CHEESE_CALORIE = 20;
Burger.STUFFING_CHEESE = 'Cheese'

Burger.STUFFING_SALAD_PRICE = 20;
Burger.STUFFING_SALAD_CALORIE = 5;
Burger.STUFFING_SALAD = 'Salad'

Burger.STUFFING_POTAT_PRICE= 15;
Burger.STUFFING_POTAT_CALORIE = 10;
Burger.STUFFING_POTAT = 'Potato'


    brgCount = document.getElementById('brg-count');

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

Burger.prototype.calculateCalorie = function() {
    calorie = 0
        burger.getStuffing(brgStuffing);
        burger.getSize(brgSize);
        stuffing.forEach(element => {
            if(element === Burger.STUFFING_CHEESE){
                calorie += Burger.STUFFING_CHEESE_CALORIE;
            } else if (element === Burger.STUFFING_SALAD) {
                calorie += Burger.STUFFING_SALAD_CALORIE;
            } else if (element === Burger.STUFFING_POTAT) {
                calorie += Burger.STUFFING_POTAT_CALORIE
            } else { 
                return null 
            }
        })
        if(size === Burger.SIZE_SMALL) {
            calorie += Burger.SIZE_SMALL_CALORIE;

        } if (size === Burger.SIZE_LARGE) {
            calorie += Burger.SIZE_LARGE_CALORIE
        } else {
            calorie += 0
        }
        calorie = calorie * brgCount.value;
        document.getElementById('brg-calorie').value=calorie;
}

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
