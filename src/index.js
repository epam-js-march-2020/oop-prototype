/* eslint func-names: ["error", "never"] */
/* eslint indent: ["error", 2, { "SwitchCase": 1 }] */
/* eslint no-use-before-define: ["error", { "functions": false }] */

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import _ from 'lodash';

import app from './views/app';
import options from './views/options';
import menu from './views/menu';
import cart from './views/cart';

import Hamburger from './hamburger';
import Salad from './salad';
import Drink from './drink';

// Состояние приложения
var state = {
  order: [],
  product: Object.create(null)
};

// Отрисовка рамки вокруг выбранного продукта
function outlineActiveCard(card) {
  $('.card').removeClass('border-success');
  $(card).addClass('border-success');
}

// Отрисовка цены и калорийности текущего продукта
function renderProductTotal() {
  var { product } = state;
  if (product.getSize() && product.getType()) {
    $('#totalProductPrice').text(product.calculatePrice());
    $('#totalProductCalories').text(product.calculateCalories());
  } else {
    $('#totalProductPrice').text(0);
    $('#totalProductCalories').text(0);
  }
}

// Отрисовка переключения опций продукта
function toggleRadio(e) {
  var { radioButtons, radio } = e.data;
  $(radioButtons).each(function(index, button) {
    $(button).parent().removeClass('active btn-success').addClass('btn-secondary');
  });
  $(radio).parent().removeClass('btn-secondary').addClass('active btn-success');
  if ($(radio).val().includes('TYPE')) {
    state.product.setType($(radio).val());
  } else {
    state.product.setSize($(radio).val());
  }
  renderProductTotal();
}

// Подписка на событие для радиокнопок опций продукта
function setButtonsListeners() {
  var sizeRadioButtons = $('#sizeButtonsGroup input');
  var typeRadioButtons = $('#typeButtonsGroup input');
  [sizeRadioButtons, typeRadioButtons].forEach(function(radioButtons) {
    $(radioButtons).each(function(index, radio) {
      $(radio).on('click', { radioButtons, radio }, toggleRadio);
    });
  });
}

// Удаление товара
function removeItem(e) {
  var { id } = e.data;
  _.remove(state.order, function(n) {
    return n[1] === id;
  });
  renderCart();
}

// Подписка на события для кнопок удаления
function setRemoveItemListeners() {
  var buttons = $('[id*="productRemove"]');
  $(buttons).each(function(index, button) {
    var id = $(button).attr('id').slice('productRemove'.length);
    $(button).on('click', { id }, removeItem);
  });
}

// Отрисовка параметров заказа
function renderOrderTotal() {
  var orderTotal = $('#orderTotal');
  state.order.length > 0 ? $(orderTotal).removeClass('d-none') : $(orderTotal).addClass('d-none');
  $('#totalOrderCalories').text(state.order.reduce((acc, [curr]) => acc + curr.calculateCalories(), 0));
  $('#totalOrderPrice').text(state.order.reduce((acc, [curr]) => acc + curr.calculatePrice(), 0));
}

// Отрисовка корзины
function renderCart() {
  $('#cartSection').empty().append(cart(state.order));
  setRemoveItemListeners();
  renderOrderTotal();
}

// Валидация продукта
function validateProduct() {
  var { product } = state;
  $('#sizeHeader').removeClass('text-danger border border-danger rounded');
  $('#typeHeader').removeClass('text-danger border border-danger rounded');
  if (product.getSize() && product.getType()) {
    return true;
  }
  if (!product.getSize()) {
    $('#sizeHeader').addClass('text-danger border border-danger rounded');
  }
  if (!product.getType()) {
    $('#typeHeader').addClass('text-danger border border-danger rounded');
  }
  return false;
}

// Добавление продукта в корзину
function addProduct() {
  if (validateProduct()) {
    state.order.push([state.product, _.uniqueId()]);
    // клон текущего объекта на случай, если не меняли категорию, а изменили опцию и опять добавили в корзину
    state.product = _.clone(state.product);
    renderCart();
  }
}

// Инициализация приложения
$('#app').append(app({ menu, options: options('init'), cart: cart([]) }));

// Подписка на клик по каждому из продуктов
['burgers', 'salads', 'drinks'].forEach(function(product) {
  $(`#${product}Card`).on('click', function() {
    switch (product) {
      case 'burgers': state.product = new Hamburger(); break;
      case 'salads': state.product = new Salad(); break;
      case 'drinks': state.product = new Drink(); break;
      default: alert('no such product'); break;
    }
    $('#optionsSection').empty().append(options(product));
    $('#addProduct').on('click', addProduct);
    outlineActiveCard(this);
    setButtonsListeners();
    renderProductTotal();
  });
});
