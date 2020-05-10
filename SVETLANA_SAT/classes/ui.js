// UI constructor
function UI(){}

// Actions with burger
// Choose Small size
UI.prototype.chooseSmallBrg = function() { 
    if(document.querySelector('.bread1').className == 'bread1 grow') {
        document.querySelectorAll('.bread1, .cheese, .cutlet, .potato, .salad, .bread2')
                .forEach(function(el){el.classList.remove('grow')});
        document.querySelectorAll('.bread1, .cheese, .cutlet, .potato, .salad, .bread2')
                .forEach(function(el){el.classList.add('shrink')})
    }

    n.classList.remove('badge-pill' ,'badge-warning');
    l.classList.remove('badge-pill' ,'badge-warning');
    s.classList.add('badge-pill' ,'badge-warning');

    burger.calculatePrice();
    burger.calculateCalories();
}

// Choose Large size
UI.prototype.chooseLargeBrg = function() {
    document.querySelectorAll('.bread1, .cheese, .cutlet, .potato, .salad, .bread2')
            .forEach(function(el){el.classList.remove('shrink')});
    document.querySelectorAll('.bread1, .cheese, .cutlet, .potato, .salad, .bread2')
            .forEach(function(el){el.classList.add('grow')});

    n.classList.remove('badge-pill' ,'badge-warning');
    s.classList.remove('badge-pill' ,'badge-warning');
    l.classList.add('badge-pill' ,'badge-warning');
   
    burger.calculatePrice()
    burger.calculateCalories()
}

// Choose stuffing
UI.prototype.chooseCheese = function() {
    if(size !== 'N') { // if size isn't default
        if(stuffCheese.style.display=='none'){
            stuffCheese.style.display='block';
            cheese.classList.add('badge-pill' ,'badge-warning')
        } else {
            stuffCheese.style.display='none';
            cheese.classList.remove('badge-pill' ,'badge-warning');
        }
        burger.calculatePrice();
        burger.calculateCalories() 
    } else {
        ui.showAlert('Please, choose the size of your burger', addBrg, 'alert-danger') 
    } 
}

UI.prototype.chooseSalad = function() {
    if(size !== 'N') { // if size isn't default
        if(stuffSalad.style.display=='none'){
            stuffSalad.style.display='block';
            saladBrg.classList.add('badge-pill' ,'badge-warning');
        } else {
            stuffSalad.style.display='none';
            saladBrg.classList.remove('badge-pill' ,'badge-warning');
        }
        burger.calculatePrice();
        burger.calculateCalories()
    } else {
        ui.showAlert('Please, choose the size of your burger', addBrg, 'alert-danger') 
    }
}

UI.prototype.choosePotato = function() {
    if(size !== 'N') { // if size isn't default
        if(stuffPotato.style.display=='none'){
            stuffPotato.style.display='block';
            potato.classList.add('badge-pill' ,'badge-warning');
        } else {
            stuffPotato.style.display='none';
            potato.classList.remove('badge-pill' ,'badge-warning');
        }
        
        burger.calculatePrice();
        burger.calculateCalories();
    } else {
        ui.showAlert('Please, choose the size of your burger', addBrg, 'alert-danger') 
    }  
}

// Change count
UI.prototype.changeCount =  function() {
    burger.calculatePrice();
    burger.calculateCalories()
}

// Render items in the table
UI.prototype.addItemToTable = function (item) {
    table.innerHTML = '';
    items.map(function(item) { 
    // create <tr>
    var tr = document.createElement('tr');
        tdName = document.createElement('td')
        tdCount = document.createElement('td')
        tdCalories = document.createElement('td')
        tdPrice = document.createElement('td');
        tdDel =  document.createElement('td');
        btn = document.createElement('button');
        btn.className = 'close delete-item';
        tdName.innerHTML = item.name;
        tdCount.innerHTML = item.count;
        tdCalories.innerHTML= item.calories;
        tdPrice.innerHTML= item.price;
        tdDel.appendChild(btn);

    tr.appendChild(tdName)
    tr.appendChild(tdCount)
    tr.appendChild(tdCalories)
    tr.appendChild(tdPrice)
    tr.appendChild(tdDel)
    table.appendChild(tr)})
    order.calcOrderPrice();
    order.calcOrderCalories()
}

// Calculate calories for salad or drink when counter is changed
UI.prototype.calcPriceCalories = function() {
    if(sld.classList.contains('bg-success')) {
        salad.getPrice(); 
        salad.getCalories();
        ui.calcTotalPrice();
        ui.calcTotalCalories();
    } else {
        drink.getPrice();
        drink.getCalories();
        ui.calcTotalPrice();
        ui.calcTotalCalories();
    }
}

// To make menu disabled after paiment and show success alert or show warning alert
UI.prototype.payForOrder = function(){
    if(items.length !== 0) {
        if(pay.textContent !== 'Back to menu'){
            ui.showAlert('You successfully paid for your order. We already started to prepare it', 
                          document.querySelector('.lead'), 'alert-success')
            page.change(new homeState);
           
            brg.setAttribute('disabled', "disabled");
            sld.setAttribute('disabled', "disabled");
            drnk.setAttribute('disabled', "disabled");
            drop.style.display = 'none'; 
            document.querySelectorAll('.delete-item')
                    .forEach(element => element.setAttribute('disabled', "disabled"))
            pay.textContent = 'Back to menu'
        } else {
            location.reload()
           
        }
        
    } else {
    ui.showAlert('Your order is empty', document.querySelector('.lead'), 'alert-danger')
    }
}

// Calculate total calories for salad or drink 
UI.prototype.calcTotalPrice = function() {
    totalPrice.value = parseInt(price1.value) + parseInt(price2.value)
}

// Calculate total price for salad or drink 
UI.prototype.calcTotalCalories = function() {
    totalCalories.value = parseInt(calories1.value) + parseInt(calories2.value)
}

//Show alert 
UI.prototype.showAlert = function(message, el, cl) {
    if(!document.querySelector('.alert')) {
        div = document.createElement('div');
        div.className = 'alert alert-dismissible font-weight-bold h5 mt-2';
        div.classList.add(cl)
        div.innerHTML = message;
        el.before(div)
            setTimeout(() => {
             div.remove();
            }, 3000);
    } else {
        return null
    } 
}
