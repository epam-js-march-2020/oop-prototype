let totalCart = 0;
let currentBurger = [];
let totalPrice = 0;
let totalCalories = 0;


function showStuffing() {
  document.querySelector('.stuffing').style.display = 'block';
  document.querySelector('.salads').style.display = 'none';
}

function hideStuffing() {
  document.querySelector('.stuffing').style.display = 'none';
}


function hideBorders() {
  let borderSelect = document.querySelector('.product-border');
 borderSelect ? borderSelect.classList.remove('product-border') : null;
}

function showBorders() {

  let productBorder = event.target.closest('.menu-column');
  (productBorder) ? productBorder.classList.add('product-border') : null;
}


function makeCurrentBurger() {
  hideBorders();
  showBorders();
  showStuffing();
  currentBurger = [];
  currentBurger.push(event.target.dataset.type);
}

function playSound() {
  document.getElementById('myAudio').play()
}

function finishBurgerOrder() {
hideStuffing();
hideBorders();

if (event.target.dataset.type) {
currentBurger.push(event.target.dataset.type);
console.log('totalCart', totalCart)
console.log('current burger', currentBurger);
let burger =  new  CreateHamburger(currentBurger[0], currentBurger[1]);
burger.calculatePrice();
burger.calculateCalories();
totalCart  +=  1;
playSound();
burger.render()
}
}


function cartPriceCaloriesRender() {
document.querySelector('#totalPrice').innerHTML = `Price: ${totalPrice}`;
document.querySelector('#totalCalories').innerHTML = `Calories: ${totalCalories}`;
document.querySelector('#cart').innerHTML = `Cart: ${totalCart}`;

let orderButton = document.querySelector('#order_button');
let resetButton = document.querySelector('#reset')
if (totalCart > 0) 
{
  orderButton.style.display = 'block'; 
resetButton.style.display = 'block' 
} else {
   orderButton.style.display = "none"; 
   resetButton.style.display="none" }

}


function deleteItem() {
let deleteItem = event.target.parentElement;
deleteItem.style.display = 'none';
let price = deleteItem.dataset.price;
let calories = deleteItem.dataset.calories;
totalPrice -= price;
totalCalories -= calories;
totalCart -= 1;
cartPriceCaloriesRender();
}

function CreateHamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    name = `${this.size} burger with ${this.stuffing}`

    options = {
     small: {price: 50, calories: 20},
     big: {price: 100, calories: 40},
    cheese: {price: 10, calories: 20},
    salad: {price: 20, calories: 5},
    potato: {price: 15, calories: 10}
    }
}

CreateHamburger.prototype.calculatePrice = function() {
  console.log('Price: ', options[this.size].price + options[this.stuffing].price);
  totalPrice += options[this.size].price + options[this.stuffing].price;
  currentPrice = options[this.size].price + options[this.stuffing].price;
}

CreateHamburger.prototype.calculateCalories = function() {
  console.log('Calories: ', options[this.size].calories + options[this.stuffing].calories);
  totalCalories += options[this.size].calories + options[this.stuffing].calories;
  currentCalories = options[this.size].calories + options[this.stuffing].calories;
}


  CreateHamburger.prototype.render = function() {
    document.querySelector('.order').innerHTML += `
    <p class="order_list" data-price=${currentPrice} data-calories=${currentCalories}>${name}   <button class="btn_order_list" onclick="deleteItem()">Х</button></p>
    `;
    cartPriceCaloriesRender();
  }


function showSalad() {
  hideBorders();
  showBorders();
document.querySelector('.salads').style.display = 'block';
document.querySelector('.stuffing').style.display = 'none';
}

function hideSalad() {
  document.querySelector('.salads').style.display = 'none';
    }


function makeSalad() {
showSalad();
// hideBorders();

  options = {
    caesar: {price: 100, calories: 20},
    olivie: {price: 50, calories: 80}
  }

let name = event.target.dataset.type;
let saladFullName = `salad ${name}`;
let saladPrice = options[name].price;
let saladCalories = options[name].calories;
totalPrice += saladPrice;
totalCalories += saladCalories;
totalCart += 1;

//render
hideSalad();
document.querySelector('.order').innerHTML += `
<p class="order_list" data-price="${saladPrice}" data-calories="${saladCalories}">${saladFullName}  <button class="btn_order_list" onclick="deleteItem()">X</button></p>
`;
cartPriceCaloriesRender();
playSound();
}


function makeDrink() {
  hideSalad();
  hideStuffing();
  hideBorders();
  showBorders();
  let name = event.target.dataset.type;
  options = {
    cola: {price: 50, calories: 40},
    coffee: {price: 80, calories: 20}
  };

  let drinkPrice = options[name].price;
  let drinkCalories = options[name].calories;
  totalPrice += drinkPrice;
  totalCalories += drinkCalories;
  totalCart += 1;


document.querySelector('.order').innerHTML += `
<p class="order_list" data-price="${drinkPrice}" data-calories="${drinkCalories}">${name}  <button class="btn_order_list" onclick="deleteItem()">X</button></p>
`;
cartPriceCaloriesRender();
playSound();
 }

 function renderOrderInfo() {
   document.querySelector('#order_completed_info').innerHTML = `
   Total items: ${totalCart}<br>
   Price: ${totalPrice} tugrix<br>
   Total calories: ${totalCalories}
      `;
 }

 function newOrder() {
  totalCart = 0;
  currentBurger = [];
  totalPrice = 0;
  totalCalories = 0;
  document.querySelector('.order').innerHTML = `<h2>Your order:</h2>
  <div class="info" style="display: flex;">
  <h4 id="cart"></h4>
  <h4 id="totalPrice"></h4>
  <h4 id="totalCalories"></h4>
  </div>`;
  cartPriceCaloriesRender();
 }




