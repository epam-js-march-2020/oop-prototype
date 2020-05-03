/* eslint func-names: ["error", "never"] */
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import app from './views/app';
import options from './views/options';
import menu from './views/menu';
import cart from './views/cart';

var state = {
  product: null,
  size: null,
  type: null
};

function outlineActiveCard(card) {
  $('.card').removeClass('border-success');
  $(card).addClass('border-success');
}

function toggleRadio(e) {
  var { radioButtons, radio } = e.data;
  $(radioButtons).each(function(index, button) {
    $(button).parent().removeClass('active btn-success');
  });
  $(radio).parent().addClass('active btn-success');
  $(radio).val().includes('TYPE') ? state.type = $(radio).val() : state.size = $(radio).val();
  console.log(state);
}

function setButtonsListeners() {
  var sizeRadioButtons = $('#sizeButtonsGroup input');
  var typeRadioButtons = $('#typeButtonsGroup input');
  [sizeRadioButtons, typeRadioButtons].forEach(function(radioButtons) {
    $(radioButtons).each(function(index, radio) {
      $(radio).on('click', { radioButtons, radio }, toggleRadio);
    });
  });
}

$('#app').append(app({ menu, options: options('init'), cart }));
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
