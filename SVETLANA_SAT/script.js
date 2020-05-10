// Set page statements
function PageState() {
    currentState = new homeState(this);
    this.init = function() {
      this.change(new homeState);
    }
    this.change = function(state) {
      currentState = state;
    }
};

// Set variables
    burger = new Burger;
    salad = new Salad;
    drink = new Drink;
    order = new Order;
    ui = new UI;

    items = [];

    add = document.getElementById('add');
    addBrg = document.getElementById('add-brg');
    brg = document.getElementById('show-brg');
    brgCount = document.getElementById('brg-count');
    brgMenu = document.querySelector('.brg-constructor');
    brgSize = document.querySelector('.size').childNodes;
    brgStuffing = document.querySelector('.stuffing').childNodes;
    cancel = document.getElementById('cancel');
    cancelItem = document.getElementById('cancelItem');
    calories1 = document.getElementById('calories1');
    calories2 = document.getElementById('calories2');
    cheese = document.getElementById('cheese');
    count1 = document.getElementById("count1");
    count2 = document.getElementById("count2");
    drnk = document.getElementById('show-drk');
    drop = document.getElementById('dropOrder');
    l = document.getElementById('L');
    n = document.getElementById('N');
    orderCalories = document.getElementById('orderCalories');
    orderPrice = document.getElementById('orderPrice');
    pay = document.getElementById('pay');
    potato = document.getElementById('potato');
    price1 = document.getElementById('price1');
    price2 = document.getElementById('price2');
    s = document.getElementById('S');
    saladBrg = document.getElementById('salad');
    sld = document.getElementById('show-sld');
    sldMenu = document.querySelector('.sld-constructor');
    stuffCheese = document.getElementById('stuffCheese');
    stuffPotato = document.getElementById('stuffPotato');
    stuffSalad = document.getElementById('stuffSalad');
    table = document.getElementById('table');
    totalCalories = document.getElementById('totalCaloriesSld');
    totalPrice = document.getElementById('totalPriceSld');
    type1 = document.getElementById('type1');
    type2 = document.getElementById('type2');

// Set addEventListeners
add.addEventListener('click', order.addItemInOrder); //add Salad or Drink to Order list
addBrg.addEventListener('click', order.addBrgInOrder); //add Burger to Order list
brg.addEventListener('click', showBrgMenu); // Show Burger Menu
brgCount.addEventListener('change', ui.changeCount); // Calculate Price and Calories when Counter is changed
cancel.addEventListener('click', cancelOrder); // Hide Burger menu and return Home state
cancelItem.addEventListener('click', cancelOrder); // Hide Salad or Drink menu and return Home state
cheese.addEventListener('click', ui.chooseCheese); // Add or remove cheese from the burger
count1.addEventListener('change', ui.calcPriceCalories); // Calculate Price and Calories when Counter is changed
count2.addEventListener('change', ui.calcPriceCalories); // Calculate Price and Calories when Counter is changed
drnk.addEventListener('click', showDrinkMenu); // Show Drink Menu
drop.addEventListener('click', order.dropOrder); // Clean Order list
l.addEventListener('click', ui.chooseLargeBrg); // Choose Large Burger
pay.addEventListener('click', ui.payForOrder); // Make menu disabled
potato.addEventListener('click', ui.choosePotato);// Add or remove potato from the burger
s.addEventListener('click', ui.chooseSmallBrg); // Choose Small Burger
saladBrg.addEventListener('click', ui.chooseSalad); // Add or remove salad from the burger
sld.addEventListener('click', showSaladMenu); // Show Salad Menu
table.addEventListener('click', function(e){order.deleteItem(e.target)}) // Delete Item from Order list

// Home State
function homeState(page) {
    // set burger size to default
    n.classList.add('badge-pill' ,'badge-warning'); 

    // clear stuffing 
    cheese.classList.remove('badge-pill', 'badge-warning');
    saladBrg.classList.remove('badge-pill', 'badge-warning');
    potato.classList.remove('badge-pill', 'badge-warning');

    // get default values
    burger.getSize(brgSize); 
    burger.getStuffing(brgStuffing);
    burger.calculatePrice();
    burger.calculateCalories();

    // clean UI
    s.classList.remove('badge-pill', 'badge-warning')
    l.classList.remove('badge-pill', 'badge-warning')
    brgMenu.style.display ='none';
    sldMenu.style.display = 'none';
    document.querySelectorAll('.bread1, .cheese, .cutlet, .potato, .salad, .bread2')
            .forEach(function(el){el.classList.remove('grow')});
    document.querySelectorAll('.cheese, .potato, .salad')
            .forEach(function(element) { element.style.display = 'none'})
    brg.classList.remove('bg-warning');
    sld.classList.remove('bg-success');
    drnk.classList.remove('bg-info');
    brgCount.value = 1;
    count1.value = 0;
    count2.value = 0
};
  
// Burger State
function brgState(page) {
    brgMenu.style.display ='block';
    sldMenu.style.display = 'none';
};

// Salad State
function saladState(page) {
    sldMenu.style.display = 'block';
    type1.textContent = Salad.CESAR_TYPE;
    type2.textContent = Salad.OLIVIE_TYPE;

    // set step === 50 grams
    count2.setAttribute('step', '50');
    count1.setAttribute('step', '50');
};

// Drink State
function drinkState(page) {
    sldMenu.style.display = 'block';
    type1.textContent = Drink.COLA_TYPE;
    type2.textContent = Drink.COFFEE_TYPE;

    // remove step
    count1.removeAttribute('step');
    count2.removeAttribute('step');
}

// Instantiate pageState
page = new PageState();

// Init the first state
page.init();

// Show Burger menu and change state to Burger state
function showBrgMenu() {
    if(brgMenu.style.display === 'none') {
        page.change(new brgState);
        brg.classList.add('bg-warning');
        sld.classList.remove('bg-success');
        drnk.classList.remove('bg-info');
    } else {
        page.change(new homeState);
    }
}

// Show Salad menu and change state to Salad state
function showSaladMenu(){
    if(sldMenu.style.display === 'none' || drnk.classList.contains('bg-info')) {
        page.change(new saladState);
        sld.classList.add('bg-success')
        brgMenu.style.display = 'none'
        brg.classList.remove('bg-warning');
        drnk.classList.remove('bg-info');
        count1.value = 0;
        count2.value = 0;
        salad.getPrice();
        salad.getCalories();
        ui.calcTotalPrice();
        ui.calcTotalCalories()
    } else {
        page.change(new homeState);
    }
}

// Show Drink menu and change state to Drink state
function showDrinkMenu(){
    if(sldMenu.style.display === 'none' || sld.classList.contains('bg-success')) {
        page.change(new drinkState);
        drnk.classList.add('bg-info')
        brgMenu.style.display = 'none'
        brg.classList.remove('bg-warning')
        sld.classList.remove('bg-success');
        count1.value = 0;
        count2.value = 0;
        drink.getPrice();
        drink.getCalories();
        ui.calcTotalPrice();
        ui.calcTotalCalories()
    } else {
        page.change(new homeState);
    }
}

// Cancel => set Home state
function cancelOrder(e) {
    e.preventDefault();
    page.change(new homeState);
}
