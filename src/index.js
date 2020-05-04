import "./style.css";


//MENU
function Menu(type, quantity) {
    this.type = type;
    this.quantity = quantity;
    this.name = type.name;
    console.log('this.name', this.name)
    console.log('this.type', this.type) //obj
}

var menu = new Menu('hamburger', 3);
// console.log('menu', menu)

Menu.prototype.getType = function () {
    return this.type;
};
console.log('getType', menu.getType()) //hamburger

Menu.prototype.calculatePrice = function () {
    return this.quantity * this.type.price;  // hamburder.price or salad.price
  };

  Menu.prototype.calculateCalories = function () {
      return this.quantity * this.type.calories;
  }

  Menu.prototype.getName = function () {
    return this.name;
  };
  
console.log('getName', menu.getName()) //hamburger


// HAMBURGER


function Hamburger(size, stuffing, quantity) {
    Menu.call(this, size, quantity);
    this.stuffing = stuffing;
    this.name = size.name + ' burger ' + stuffing.name;
  };

// function Hamburger(type, stuffing, quantity) {
//   Menu.call(this, type, quantity);
//   this.stuffing = stuffing;
//   //this.name = size.name + ' hamburger ' + stuffing.name;
//   //this.name = size.name + ' hamburger ';
// };


  Hamburger.prototype = Object.create(Menu.prototype);
  Hamburger.prototype.constructor = Hamburger;
  
  console.log('Hamburger.name', Hamburger.name); //Ham
  
  Hamburger.SIZE_SMALL = {
    name: 'Small',
    price: 50,
    calories: 20
  };
  Hamburger.SIZE_LARGE = {
    name: 'Big',
    price: 100,
    calories: 40
  };


  Hamburger.STUFFING_CHEESE = {
    name: 'Cheese',
    price: 10,
    calories: 20
  };
  Hamburger.STUFFING_SALAD = {
    name: 'Salad',
    price: 20,
    calories: 5
  };
  Hamburger.STUFFING_POTATO = {
    name: 'Potato',
    price: 15,
    calories: 10
  };





//собрать гамбургер
var hamburgerSection = document.querySelector('.content__item-hamburger');
var hamburgerName = hamburgerSection.querySelector('.form__total-item-name');
var hamburgerSum = hamburgerSection.querySelector('.form__total-item-sum');
var hamburgerCalory = hamburgerSection.querySelector('.form__total-item-calories');
var hamburgerCount = hamburgerSection.querySelector('.form__input-quantity');
var hamburgerAddBtn = hamburgerSection.querySelector('.form__add-btn');

hamburgerSection.addEventListener('change', function() {
   getFullHamburgerOrder()
});



function getFullHamburgerOrder() {

 var sizeData = hamburgerSection.querySelector('[name=hamburger-size]:checked')
 var stuffingData = hamburgerSection.querySelector('[name=hamburger-stuffing]:checked')
 var hamburgerCount = hamburgerSection.querySelector('.form__input-quantity');
 if (sizeData && stuffingData) {
   var stuffingDataValue = stuffingData.dataset;
   var sizeDataValue = sizeData.dataset;
   console.log('stuffingDataValue', stuffingDataValue) //obj {type: "STUFFING_CHEESE", stuffing: "Cheese", priceStuffing: "10", caloryStuffing: "20"}

   hamburgerName.textContent = sizeDataValue.size + ' hamburger with' + ' ' + stuffingDataValue.stuffing
   hamburgerSum.textContent = parseInt(sizeDataValue.price, 10) + parseInt(stuffingDataValue.priceStuffing, 10) * hamburgerCount.value;
   hamburgerCalory.textContent = (parseInt(sizeDataValue.calory, 10) + parseInt(stuffingDataValue.caloryStuffing, 10)) * hamburgerCount.value +  ' cal';;
 }
      

}




hamburgerAddBtn.addEventListener('click', function(e) {
 e.preventDefault()
 var dataSize = hamburgerSection.querySelector('[name=hamburger-size]:checked').dataset;
 var dataStuffing = hamburgerSection.querySelector('[name=hamburger-stuffing]:checked').dataset
 var quantity = hamburgerSection.querySelector('.form__input-quantity').value;
 if(dataSize && dataStuffing) {
  var hamburger = new Hamburger(Hamburger[dataSize.type], Hamburger[dataStuffing.type], quantity)
  order.addDishes(hamburger);
  getOrderData();
  calcTotalOrder()

 }


})






//SALAD


function Salad(type, quantity) {
    Menu.call(this, type, quantity);
  };


  //console.log('Salad', new Salad('cesar', 5)) //{type: "cesar", quantity: 5, name: undefined}
  Salad.prototype = Object.create(Menu.prototype);
  //console.log('Salad.prototype', Salad.prototype)


  Salad.prototype.constructor = Salad;

Salad.CAESAR = {
    name: 'Caesar',
    price: 100,
    calories: 20
  };
  
  Salad.OLIVIE = {
    name: 'olivie',
    price: 50,
    calories: 80
  };


  // DRINKS

    function Drink(type, quantity) {
        Menu.call(this, type, quantity);
    };
    Drink.prototype = Object.create(Menu.prototype);
    Drink.prototype.constructor = Drink;
    //console.log('Drink.prototype', Drink.prototype);

    Drink.COLA = {
      name: 'Cola',
      price: 40,
      calories: 80
    };

    Drink.COFFEE = {
      name: 'Coffee',
      price: 80,
      calories: 20
    };
  


  //ORDER

  function Order() {
    // this.items = []
    this.items = [].slice.call(arguments); // преобразования массивоподобных объектов в новый массив Array.
    this.isPaid = false; //
  }

  Order.prototype.getItems = function () { //элементы заказа
    return this.items;
  };

 Order.prototype.getPaymentInfo = function () {
     return this.isPaid
 }

 Order.prototype.payOrder = function () {
  this.isPaid = true;
  console.log('Your order is paid');
};


 //add menu item
 Order.prototype.addDishes = function (menuItem) {
   if(!this.isPaid) { //если не оплачена
       this.items.push(menuItem)
   }
    else {
        console.log('позиция уже оплачена')
    }
 }

 Order.prototype.deleteDishes = function (el) {
     if(!this.isPaid) {     //если не оплачена 
        //console.log('позиция не оплачена')  // оставить массив без этой позиции
        // this.items= this.items.reduce(function(res, el, index) {
        //   this.items.indexOf(el) == index ? res.push(el) : result;
        //   console.log('result', result)
        //   return result;
        // }, [])
        this.items = this.items.filter((item, i) => {
          return i !== Number(el)
         //return el.indexOf == i;
        })
     } else {
        console.log('позиция уже оплачена')
     }
 }


 Order.prototype.calcTotalPrice = function () {
    var total = 0;
     if (this.items.length == 0) {
         console.log('нет позиций')
         //return total
     } else {
        return this.items.reduce((total, item) => {
           total +=item.calculatePrice();
           return total;
        }, 0)
      //return total;
     }
   //return total;
 };

 Order.prototype.calcTotalCalories = function () { 
    //var totalCal = 0;
    if (this.items.length == 0) {
        console.log('нет позиций')
        //return total
    } else {
       return this.items.reduce((totalCal, item) => {
        totalCal +=item.calculateCalories() //получаем метод из родительского МЕНЮ
        return totalCal;
       }, 0)
    }
    // return totalCal;
 }



 //create order

 var container = document.querySelector('.content') // контейнер с карточками 


 var order = new Order()

 var saladSection = document.querySelector('.content__item-salad');
 var saladName = saladSection.querySelector('.form__total-item-name');
 var saladSum = saladSection.querySelector('.form__total-item-sum');
 var saladCalory = saladSection.querySelector('.form__total-item-calories')
 var saladAddBtn = saladSection.querySelector('.form__add-btn');
 var saladCount = saladSection.querySelector('.form__input-quantity')

 saladSection.addEventListener('change', function() {
    getFullSaladOrder()
 })

 

 saladAddBtn.addEventListener('click', function(e) {
  e.preventDefault()
    var { type } = saladSection.querySelector('input:checked').dataset;
    
   var weight = saladSection.querySelector('.form__input-quantity').value;

//Salad(type, quantity) 
   var salad = new Salad(Salad[type], weight / 100) //создаем объект салата

   //добавляем в заказ:
   order.addDishes(salad);
   getOrderData();
   //total order
   calcTotalOrder();

 })

 function getFullSaladOrder () {
    var { salad, price, calory } = saladSection.querySelector('input:checked').dataset
    //console.log('type SALAD:', { salad, price, calory }) //{type: "OLIVIE", price: "50", calory: "80"}

    saladName.textContent = salad;
    //console.log('saladName.textContent', saladName.textContent);
    saladSum.textContent = price + ' tu';
    saladCalory.textContent = (calory * saladCount.value) / 100 + ' cal';
 }


 var drinksSection = document.querySelector('.content__item-drinks');
 var drinkName = drinksSection.querySelector('.form__total-item-name');
 var drinkSum = drinksSection.querySelector('.form__total-item-sum');
 var drinkCalory = drinksSection.querySelector('.form__total-item-calories');
 var drinkCount = drinksSection.querySelector('.form__input-quantity');
 var drinksAddBtn = drinksSection.querySelector('.form__add-btn');



 drinksSection.addEventListener('change', function() {
    getFullDrinkOrder()
 })




 drinksAddBtn.addEventListener('click', function(e) {
   e.preventDefault()
    var { type } = drinksSection.querySelector('input:checked').dataset;
    //console.log('type:', type)
   var count = drinksSection.querySelector('.form__input-quantity').value;

//Salad(type, quantity) 
   var drink = new Drink(Drink[type], count) //создаем объект салата
   //console.log('drink', drink)
   //добавляем в заказ:
   order.addDishes(drink);
   getOrderData();
   //total order
   calcTotalOrder()

 })



 function getFullDrinkOrder() {
    var {drink, price, calory} = drinksSection.querySelector('input:checked').dataset;

    drinkName.textContent = drink;
    drinkSum.textContent = price + ' tu';
    drinkCalory.textContent = (calory * drinkCount.value) +  ' cal';
 }



//  //собрать гамбургер
//  var hamburgerSection = document.querySelector('.content__item-hamburger');
//  var hamburgerName = hamburgerSection.querySelector('.form__total-item-name');
//  var hamburgerSum = hamburgerSection.querySelector('.form__total-item-sum');
//  var hamburgerCalory = hamburgerSection.querySelector('.form__total-item-calories');
//  var hamburgerCount = hamburgerSection.querySelector('.form__input-quantity');
//  var hamburgerAddBtn = hamburgerSection.querySelector('.form__add-btn');

//  hamburgerSection.addEventListener('change', function() {
//     getFullHamburgerOrder()
//  });



// function getFullHamburgerOrder() {

//   var sizeData = hamburgerSection.querySelector('[name=hamburger-size]:checked')
//   var stuffingData = hamburgerSection.querySelector('[name=hamburger-stuffing]:checked')
//   var hamburgerCount = hamburgerSection.querySelector('.form__input-quantity');
//   if (sizeData && stuffingData) {
//     var stuffingDataValue = stuffingData.dataset;
//     var sizeDataValue = sizeData.dataset;
//     hamburgerName.textContent = sizeDataValue.size + ' hamburger with' + ' ' + stuffingDataValue.stuffing
//     hamburgerSum.textContent = parseInt(sizeDataValue.price, 10) + parseInt(stuffingDataValue.priceStuffing, 10) * hamburgerCount.value;
//     hamburgerCalory.textContent = (parseInt(sizeDataValue.calory, 10) + parseInt(stuffingDataValue.caloryStuffing, 10)) * hamburgerCount.value +  ' cal';;
//   }
       

// }




// hamburgerAddBtn.addEventListener('click', function(e) {
//   e.preventDefault()
//   // var dataSize = hamburgerSection.querySelector('[name=hamburger-size]:checked').dataset;
//   // var dataStuffing = hamburgerSection.querySelector('[name=hamburger-stuffing]:checked').dataset
//   // var quantity = hamburgerSection.querySelector('.form__input-quantity').value;


//   // console.log('dataSize', dataSize) //{type: "SIZE_SMALL", size: "Small", price: "50", calory: "20"}
//   // console.log('dataStuffing', dataStuffing) //{type: "STUFFING_CHEESE", stuffing: "Cheese", priceStuffing: "10", caloryStuffing: "20"}
//   // console.log('quantity', quantity)
//   // if(dataSize && dataStuffing) {
//   //   var hamburger = new Hamburger(Hamburger[dataSize.type], quantity, Hamburger[dataStuffing.type])
//   //   console.log('HAMBURGER', hamburger);
//   //   order.addDishes(hamburger);
//   //   getOrderData();
//   // calcTotalOrder()
//   // }
//  })





var orderContainer = document.querySelector('.order');
var payBtn = orderContainer.querySelector('.order__pay');
var orderList = orderContainer.querySelector('.order__list');
var totalSum = orderContainer.querySelector('.order__sum');
var totalCalories = orderContainer.querySelector('.order__calory');
var value = document.querySelectorAll('.order__sum--value')


//собираем данные
function getOrderData() {
  var orderArray = order.getItems();
  orderList.innerHTML = '';
  console.log('getOrderData', orderArray)
  orderArray.forEach(function(item,  index) {
    var orderItem = document.createElement('li');
    orderItem.classList.add('order__list-item');
    var delBtn = document.createElement('button');
    delBtn.classList.add('order__list-delete-item');
    delBtn.textContent = 'X';
    // console.log('orderItem', orderItem);
    var position = item.name + ' ' + item.quantity +  ', ' + 'PRICE: ' + parseInt(item.type.price, 10) * parseInt(item.quantity, 10) + ' ' + ' tu' + ' TOTAL CALORIES: ' + parseInt(item.type.calories, 10) * parseInt(item.quantity) + ' cal';
    if(item.stuffing) {
      var position = item.name + ' ' + item.quantity +  ', ' + 'PRICE: ' + (parseInt(item.type.price, 10) + parseInt(item.stuffing.price, 10)) * parseInt(item.quantity, 10) + '' + ' tu' + ' TOTAL CALORIES: ' + (parseInt(item.type.calories, 10) + (parseInt(item.stuffing.calories, 10))) * parseInt(item.quantity) + ' cal';
    }
    orderItem.textContent = position;
    orderItem.setAttribute('id', index)
    orderItem.appendChild(delBtn);
    orderList.appendChild(orderItem);
  });
}

//используем делегирование при удалении позиции из заказа:
// orderContainer.addEventListener('click', function(event) {
//   var orderItem = document.querySelector('.order__list-item')
//   if(event.target.closest('.order').querySelector('.order__list-delete-item')) {
//     var targetEl = event.target.closest('.order').querySelector('.order__list-item');
//     orderList.removeChild(event.target.closest('.order').querySelector('.order__list-item'));
//     getOrderData()
    
//   }
// });
orderContainer.addEventListener('click', function(event) {
  var orderItem = document.querySelector('.order__list-item');
  // console.log('orderItem.id', orderItem.id)
  if(event.target.classList.contains('order__list-delete-item')) {
    var targetEl = event.target.closest('.order__list-item');
    
    order.deleteDishes(targetEl.id)
    getOrderData();
    calcTotalOrder();
    if(order.getItems().length == 0) {
      value.forEach(function(item) {
        item.textContent = 0
      })
    }
  }

});





orderContainer.addEventListener('click', function(event) {
  //console.log('event.target', event.target)
  if(event.target.classList.contains('order__pay')) {
     //console.log('event.target')
    order.getItems().length !==0 ? order.payOrder() : console.log('нельзя оплатить пустой заказ')
  }
});




var calcTotalOrder = function () {
  totalCalories.textContent = order.calcTotalCalories();
  totalSum.textContent = order.calcTotalPrice();
}


function resetInputs() {
  var inputsArr = document.querySelectorAll('input:checked');
  inputsArr.forEach(function(input) {
    input.checked = false;
  })
  // for (var i = 0; i < input.length; i++) {
  //   input[i].checked = false
//   }
};

var newOrderBtn = document.querySelector('.order__new');
console.log('add', newOrderBtn)

newOrderBtn.addEventListener('click', function() {
  orderList.remove()
  resetInputs();
  totalSum.textContent = 0;
  totalCalories.textContent = 0;
})