import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import app from './views/app';
import options from './views/options';
import menu from './views/menu';
import cart from './views/cart';

function outlineActiveCard(card) {
  $('.card').removeClass('border-success');
  $(card).addClass('border-success');
}

$('#app').append(app({ menu, options: options('init'), cart }));
$('#burgersCard').on('click', function() {
  $('#optionsSection').empty().append(options('burgers'));
  outlineActiveCard(this);
});
$('#saladsCard').on('click', function() {
  $('#optionsSection').empty().append(options('salads'));
  outlineActiveCard(this);
});
$('#drinksCard').on('click', function() {
  $('#optionsSection').empty().append(options('drinks'));
  outlineActiveCard(this);
});

