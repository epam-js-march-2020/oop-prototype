// Order constructor
function Order(name, count, calories, price) {
    this.name = name;
    this.count = count;
    this.calories = calories;
    this.price = price;
}

// Check the availability of item in the Order list 
Order.prototype.checkItems = function(item) {
    if(items.length === 0) {
        items.push(item)
    } else {
    if(items.every(element => element.name !== item.name)) {
        items.push(item)
        } else {
            items.forEach(el => {
                if(el.name===item.name){
                    el.count += item.count;
                    el.calories+=item.calories;
                    el.price+=item.price
                    }})
        }
    }
    ui.addItemToTable()
}

// Delete Item from the Order list 
Order.prototype.deleteItem = function(target) {
    if(target.className === 'close delete-item') {
        target.parentElement.parentElement.remove();
        items = items
        .filter(el => 
            el.name !== target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.textContent);    
    }
    order.calcOrderPrice();
    order.calcOrderCalories()
}

// Calculate Total Order Price
Order.prototype.calcOrderPrice = function() {
    var res = 0
items.forEach(function(item) {
    res += item.price
})
orderPrice.value = res
};

// Calculate Total Order Calories
Order.prototype.calcOrderCalories = function() {
    var res = 0
items.forEach(function(item) {
    res += item.calories
})
orderCalories.value = res
}

// Add Burger to the Order list
Order.prototype.addBrgInOrder = function() {
    if(size !== 'N') {
        burger.getSize(brgSize);
        burger.getStuffing(brgStuffing);
        burger.calculatePrice();
        burger.calculateCalories();
        count = parseInt(brgCount.value);
    name = 'Burger'+' '+size+' '+ stuffing
    var item = new Order(name, count, calories, price)
    order.checkItems(item)
    } else {
    ui.showAlert('Please, choose the size of your burger', addBrg, 'alert-danger') 
    }
}

// Add Salad or Drink to the Order list
Order.prototype.addItemInOrder = function() {
    if(count1.value > 0) {
        name = type1.textContent;
        count = parseInt(count1.value);
        calories = parseInt(calories1.value);
        price = parseInt(price1.value);
        var item = new Order(name, count, calories, price)
        order.checkItems(item)
    } if(count2.value > 0) {
        name = type2.textContent;
        count =  parseInt(count2.value);
        calories =  parseInt(calories2.value);
        price =  parseInt(price2.value);
        var item = new Order(name, count, calories, price)
        order.checkItems(item)
     } 
        if (count2.value == 0 && count1.value == 0){
        ui.showAlert('Please, choose something', document.querySelector('.bottom-row'), 'alert-danger')
    }
}

// Clean the Order list
Order.prototype.dropOrder = function(){
    items = []
    ui.addItemToTable()
}
