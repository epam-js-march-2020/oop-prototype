/* eslint func-names: ["error", "never"] */
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import app from './views/app';
import options from './views/options';
import menu from './views/menu';
import cart from './views/cart';

// Состояние приложения - тип выбранного продукта и его свойства
var state = {
  product: null,
  size: null,
  type: null
};

// Отрисовка рамки вокруг выбранного продукта
function outlineActiveCard(card) {
  $('.card').removeClass('border-success');
  $(card).addClass('border-success');
}

// Отрисовка переключения опций продукта
function toggleRadio(e) {
  var { radioButtons, radio } = e.data;
  $(radioButtons).each(function(index, button) {
    $(button).parent().removeClass('active btn-success');
  });
  $(radio).parent().addClass('active btn-success');
  $(radio).val().includes('TYPE') ? state.type = $(radio).val() : state.size = $(radio).val();
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

// Инициализация приложения
$('#app').append(app({ menu, options: options('init'), cart }));

// Подписка на клик по каждому из продуктов
['burgers', 'salads', 'drinks'].forEach(function(product) {
  $(`#${product}Card`).on('click', function() {
    $('#optionsSection').empty().append(options(product));
    outlineActiveCard(this);
    setButtonsListeners();
    state.product = product;
    state.type = null;
    state.size = null;
  });
});
