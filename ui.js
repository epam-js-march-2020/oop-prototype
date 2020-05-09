// UI constructor
function UI(){}

//Add Item to table
UI.prototype.addItemToTable = function (item) {
    // if(items.length === 0){
    //     items.push(item)
    // }else{

    // foo(item)
    // items.forEach(element => {
    //     if(element.name === item.name) {
    //       var res = new Item(name, element.count+=item.count, element.price+=item.price,element.calorie+=item.calorie);
    //       element = res
    //     }
    //     else {
    //         items.push(item) 
    //     }
    // })
    
    
    // ;(el => el.name === item.name)


// }

    var table = document.getElementById('table');
    table.innerHTML = '';
 
    items.map(function(item) { 
    //Create TR
    var tr = document.createElement('tr');
        tdName = document.createElement('td')
        tdCount = document.createElement('td')
        tdCalorie = document.createElement('td')
        tdPrice = document.createElement('td');
        tdDel =  document.createElement('td');
        btn = document.createElement('button');
        btn.className = 'close delete-item';
        
        // if(element.name === item.name) {
            
        // tdName.innerHTML = item.name;
        // tdCount.innerHTML = item.count + element.count;
        // tdCalorie.innerHTML= item.calorie + element.price;
        // tdPrice.innerHTML= item.price + element.calorie;
        // } else {
            tdName.innerHTML = item.name;
            tdCount.innerHTML = item.count;
            tdCalorie.innerHTML= item.calorie;
            tdPrice.innerHTML= item.price;
        // }
        tdDel.appendChild(btn)     
    tr.appendChild(tdName)
    tr.appendChild(tdCount)
    tr.appendChild(tdCalorie)
    tr.appendChild(tdPrice)
    tr.appendChild(tdDel)
    table.appendChild(tr)})
      ui.calcOrderPrice();
    ui.calcOrderCalorie()
}

function foo(item) {
    items.forEach(element => {
        if(element.name === item.name) {
            element = item
            // element.count+=item.count
            // element.price+=item.price,
            // element.calorie+=item.calorie
        }
        else {
            items.push(this.item) 
        }
        
    })
}

UI.prototype.calcOrderPrice = function() {
    var res = 0
items.forEach(function(item) {
    res += item.price
})
orderPrice.value = res
};

UI.prototype.calcOrderCalorie = function() {
    var res = 0
items.forEach(function(item) {
    res += item.calorie
})
orderCalorie.value = res
}





//Delete Item 
UI.prototype.deleteItem = function(target) {
    if(target.className === 'close delete-item') {
        target.parentElement.parentElement.remove();
        items = items
        .filter(el => el.name !== target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.textContent);    
    }
    ui.calcOrderPrice();
    ui.calcOrderCalorie()
    // console.log(order.items.forEach(el=>el.name)) 
}

UI.prototype.showAlert = function(message) {
    if(!document.querySelector('.alert')) {
        div = document.createElement('div');
        div.className = 'alert alert-dismissible alert-danger mt-2';
        div.innerHTML=message;
        document.getElementById('add-brg').before(div)
            setTimeout(() => {
             div.remove();
            }, 2000);
    } else {
        return null
    } 
}