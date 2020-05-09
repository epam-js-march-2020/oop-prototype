var burger = new Burger;
    ui = new UI;
    salad = new Salad;
    drink = new Drink;
    order = new Order;
    items = []
    cheese = document.getElementById('cheese');
    saladBrg = document.getElementById('salad');
    potato = document.getElementById('potato');
    stuffCheese = document.getElementById('stuffCheese');
    stuffSalad = document.getElementById('stuffSalad');
    stuffPotato = document.getElementById('stuffPotato');
    cancel = document.getElementById('cancel');
    l = document.getElementById('L');
    s = document.getElementById('S');
    n = document.getElementById('N')
    brgMenu = document.querySelector('.brg-constructor');
    brg = document.getElementById('show-brg');
    sldMenu = document.querySelector('.sld-constructor');
    sld = document.getElementById('show-sld');
    addBrg = document.getElementById('add-brg');
    brgSize = document.querySelector('.size').childNodes;
    brgStuffing = document.querySelector('.stuffing').childNodes;
    type1 = document.getElementById('type1');
    type2 = document.getElementById('type2');
    price1 = document.getElementById('price1');
    price2 = document.getElementById('price2');
    calorie1 = document.getElementById('calorie1');
    calorie2 = document.getElementById('calorie2');
    count1 = document.getElementById("count1");
    count2 = document.getElementById("count2");
    drnk = document.getElementById('show-drk');
    totalPrice = document.getElementById('totalPriceSld');
    totalCalorie = document.getElementById('totalCalorieSld');
    add = document.getElementById('add');
    orderPrice = document.getElementById('orderPrice');
    orderCalorie = document.getElementById('orderCalorie');
    drop = document.getElementById('dropOrder')
   

//addEventListeners
cheese.addEventListener('click', chooseCheese);
saladBrg.addEventListener('click', chooseSalad);
potato.addEventListener('click', choosePotato);
brgCount.addEventListener('change', changeCount);
cancel.addEventListener('click', cancelOrder);
l.addEventListener('click', chooseLargeBrg);
s.addEventListener('click', chooseSmallBrg);
sld.addEventListener('click', showSaladMenu);
drnk.addEventListener('click', showDrinkMenu)
addBrg.addEventListener('click', addBrgInOrder);
count1.addEventListener('change', calcPriceCalorie);
count2.addEventListener('change', calcPriceCalorie);
add.addEventListener('click', addItemInOrder);
drop.addEventListener('click', dropOrder);



function calcPriceCalorie() {
    if(sld.classList.contains('bg-success')) {
        salad.getPrice(); 
        salad.getCalorie();
        calcTotalPrice();
        calcTotalCalorie();
    } else {
        drink.getPrice();
        drink.getCalorie();
        calcTotalPrice();
        calcTotalCalorie();
    }
}

// choose stuffing
function chooseCheese() {
    if(size !== 'N') {
        if(stuffCheese.style.display=='none'){
            stuffCheese.style.display='block';
            // cheese.classList.add('bg-warning','rounded') 
            cheese.classList.add('badge-pill' ,'badge-warning')
        } else {
            stuffCheese.style.display='none';
            cheese.classList.remove('badge-pill' ,'badge-warning');
        }
        burger.calculatePrice();
        burger.calculateCalorie() 
    } else {
        ui.showAlert('Please, choose the size of your burger') 
    } 
}

function chooseSalad() {
    if(size !== 'N') {
        // burger.getSize(brgSize);  

        if(stuffSalad.style.display=='none'){
            stuffSalad.style.display='block';
            saladBrg.classList.add('badge-pill' ,'badge-warning');
        } else {
            stuffSalad.style.display='none';
            saladBrg.classList.remove('badge-pill' ,'badge-warning');
        }
        burger.calculatePrice();
        burger.calculateCalorie()
    } else {
        ui.showAlert('Please, choose the size of your burger') 
    }
}

function choosePotato() {
    if(size !== 'N') {
        // burger.getSize(brgSize);

        if(stuffPotato.style.display=='none'){
            stuffPotato.style.display='block';
            potato.classList.add('badge-pill' ,'badge-warning');
        } else {
            stuffPotato.style.display='none';
            potato.classList.remove('badge-pill' ,'badge-warning');
        }
        
        burger.calculatePrice();
        burger.calculateCalorie();
    } else {
        ui.showAlert('Please, choose the size of your burger') 
    }  
}

//Choose size
function chooseSmallBrg() { 
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
    burger.calculateCalorie()
    console.log(size)
}

function chooseLargeBrg() {
    document.querySelectorAll('.bread1, .cheese, .cutlet, .potato, .salad, .bread2')
            .forEach(function(el){el.classList.remove('shrink')});
    document.querySelectorAll('.bread1, .cheese, .cutlet, .potato, .salad, .bread2')
            .forEach(function(el){el.classList.add('grow')});

    n.classList.remove('badge-pill' ,'badge-warning');
    s.classList.remove('badge-pill' ,'badge-warning');
    l.classList.add('badge-pill' ,'badge-warning');
   
    burger.calculatePrice()
    burger.calculateCalorie()
    console.log(size)
}



// change count
function changeCount() {
    burger.calculatePrice();
    burger.calculateCalorie()
}

// Order constuctor
function Item(name, count, calorie, price) {
    this.name = name;
    this.count = count;
    this.calorie = calorie;
    this.price = price;
}



//Event Listeners
// document.getElementById('add').addEventListener('click', addToOrder);

// function addToOrder() {

    // var name = document.getElementById('name').textContent;
    //     count = document.getElementById('count').value;
    //     calorie = document.getElementById('calorie').value;
    //     price = document.getElementById('price').value;
    // //   console.log(name, count, calorie, price)  

    // //Instantiate item
    // var item = new Item(name, count, calorie, price)

    // //Instantiate UI
    // const ui = new UI();

    // //Add item to tanle
    // ui.addItemToTable(item)
    // console.log(ui);

    
// }

//Event Listemer for Delete
document.getElementById('table').addEventListener('click', function(e){
    var ui = new UI();
    ui.deleteItem(e.target)
    
e.preventDefault()})
    

// console.log(parseInt(brgCount.value))



function addBrgInOrder() {
    if(size !== 'N') {
        burger.getSize(brgSize);
        burger.getStuffing(brgStuffing);
        burger.calculatePrice();
        burger.calculateCalorie();
        count = parseInt(brgCount.value);
    name = 'Burger'+' '+size+' '+ stuffing
    var item = new Item(name, count, calorie, price)
    order.checkItems(item)
    // ui.addItemToTable(item)
    // ui.calcOrderPrice();
    // ui.calcOrderCalorie()
    } else {
    ui.showAlert('Please, choose the size of your burger') 
}
}
function addItemInOrder() {
    if(count1.value > 0) {
        name = type1.textContent;
        count = parseInt(count1.value);
        calorie = parseInt(calorie1.value);
        price = parseInt(price1.value);
        var item = new Item(name, count, calorie, price)
        order.checkItems(item)
        // ui.calcOrderPrice();
        // ui.calcOrderCalorie()
    } if(count2.value > 0) {
        name = type2.textContent;
        count =  parseInt(count2.value);
        calorie =  parseInt(calorie2.value);
        price =  parseInt(price2.value);
        var item = new Item(name, count, calorie, price)
        // ui.addItemToTable(item);
        // order.items.push(item)
        order.checkItems(item)
    //     ui.calcOrderPrice();
    // ui.calcOrderCalorie()
    }
}
$('#order').click(function(){

    page.change(new homeState);
    brg.setAttribute('disabled', "disabled");
    sld.setAttribute('disabled', "disabled");
    drnk.setAttribute('disabled', "disabled")
    document.querySelectorAll('.delete-item').forEach(element => element.setAttribute('disabled', "disabled"))
    
    //  ui.getItems()
    })


    function dropOrder(){
        brg.removeAttribute("disabled");
        sld.removeAttribute("disabled");
        drnk.removeAttribute("disabled")
        document.querySelectorAll('.delete-item').forEach(element => element.removeAttribute("disabled"))
    }


const PageState = function() {
    let currentState = new homeState(this);
  
    this.init = function() {
      this.change(new homeState);
    }
  
    this.change = function(state) {
      currentState = state;
    }
  };
  // Home State
const homeState = function(page) {
    n.classList.add('badge-pill' ,'badge-warning')
    burger.getSize(brgSize)
    cheese.classList.remove('badge-pill', 'badge-warning');
    saladBrg.classList.remove('badge-pill', 'badge-warning');
    potato.classList.remove('badge-pill', 'badge-warning')
    burger.getStuffing(brgStuffing)
    burger.calculatePrice();
    burger.calculateCalorie()
    s.classList.remove('badge-pill' ,'badge-warning')
    l.classList.remove('badge-pill' ,'badge-warning')
    brgMenu.style.display ='none';
    sldMenu.style.display = 'none';
    document.querySelectorAll('.bread1, .cheese, .cutlet, .potato, .salad, .bread2')
            .forEach(function(el){el.classList.remove('grow')});
    // if(document.querySelectorAll('.cheese, .potato, .salad').style.display) {
        document.querySelectorAll('.cheese, .potato, .salad').forEach(function(element) {
            element.style.display = 'none'
        })
    // }
    // console.log( document.querySelectorAll('.cheese, .potato, .salad'))
    brg.classList.remove('bg-warning');
    sld.classList.remove('bg-success');
    drnk.classList.remove('bg-info')
  };
  
  // brg State
  const brgState = function(page) {
    brgMenu.style.display ='block';
    sldMenu.style.display = 'none';
  };
  
  // Salad State
  const saladState = function(page) {
    sldMenu.style.display = 'block';
    type1.textContent = Salad.CESAR_TYPE;
    type2.textContent = Salad.OLIVIE_TYPE;
    // price1.value = Salad.CESAR_PRICE;
    // price2.value = Salad.OLIVIE_PRICE;
    // calorie1.value = Salad.CESAR_CALORIE
    // calorie2.value = Salad.OLIVIE_CALORIE
    // salad.getPrice()
  };
function  calcTotalPrice() {
    totalPrice.value = parseInt(price1.value) + parseInt(price2.value)
}

function  calcTotalCalorie() {
    totalCalorie.value = parseInt(calorie1.value) + parseInt(calorie2.value)
}
  const drinkState = function(page) {
    sldMenu.style.display = 'block';
    type1.textContent = Drink.COLA_TYPE;
    type2.textContent = Drink.COFFEE_TYPE;
    // drink.getCalorie();
    // drink.getPrice()
  }

  
  // Instantiate pageState
  const page = new PageState();
  
  // Init the first state
  page.init();
  
  // UI Vars



  brg.addEventListener('click', function() {
    if(brgMenu.style.display === 'none') {
        page.change(new brgState);
        brg.classList.add('bg-warning');
        sld.classList.remove('bg-success');
        drnk.classList.remove('bg-info');
    } else {
        // sld.classList.remove('bg-success');
        // brgMenu.style.display ='none';
        // brg.classList.remove('bg-warning')
        page.change(new homeState);
    }
})
function showSaladMenu(e){
    e.preventDefault();
    if(sldMenu.style.display === 'none' || drnk.classList.contains('bg-info')) {
        page.change(new saladState);
        sld.classList.add('bg-success')
        brgMenu.style.display = 'none'
        brg.classList.remove('bg-warning');
        drnk.classList.remove('bg-info');
        count1.value = 0;
        count2.value = 0;
        salad.getPrice();
        salad.getCalorie();
        calcTotalPrice();
        calcTotalCalorie()
    } else {
        page.change(new homeState);
        // sld.classList.remove('bg-success');
        // brg.classList.remove('bg-warning')
    }
}
function showDrinkMenu(e){
    e.preventDefault()
    if(sldMenu.style.display === 'none' || sld.classList.contains('bg-success')) {
        page.change(new drinkState);
        drnk.classList.add('bg-info')
        brgMenu.style.display = 'none'
        brg.classList.remove('bg-warning')
        sld.classList.remove('bg-success');
        count1.value = 0;
        count2.value = 0;
        drink.getPrice();
        drink.getCalorie();
        calcTotalPrice();
        calcTotalCalorie()
    } else {
        // page.change(new drinkState);
        // drink.classList.add('bg-info')
        // brgMenu.style.display = 'none'
        // brg.classList.remove('bg-warning')
        // sld.classList.remove('bg-success')
    // } else if(!saladState){
        page.change(new homeState);
        // sld.classList.remove('bg-success');
        // brg.classList.remove('bg-warning')
    }
}


function cancelOrder(e) {
    e.preventDefault();
    page.change(new homeState);
}





// brg.addEventListener('click', function() {
//     if(brgMenu.style.display === 'none') {
//         brgMenu.style.display = 'block';
//         brg.classList.add('bg-warning')
//     } else {
//         brgMenu.style.display ='none';
//         brg.classList.remove('bg-warning')
//     }
// })

