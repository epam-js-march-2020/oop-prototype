//Блокировка заказа после оплаты
document.querySelector('.payed').addEventListener('click', function() {
    document.querySelector('.stuffing_cheese_small').disabled = true;
    document.querySelector('.stuffing_potato_small').disabled = true;
    document.querySelector('.stuffing_salad_small').disabled = true;
    document.querySelector('.stuffing_cheese_large').disabled = true;
    document.querySelector('.stuffing_potato_large').disabled = true;
    document.querySelector('.stuffing_salad_large').disabled = true;
    document.querySelector('.caesar').disabled = true;
    document.querySelector('.olive').disabled = true;
    document.querySelector('.cola').disabled = true;
    document.querySelector('.coffee').disabled = true;
    document.querySelector('.delete-position').disabled = true;
    Array.prototype.slice.call(document.querySelectorAll('.delete-position')).forEach(function(element) {
        element.style.pointerEvents = 'none';
      });
});