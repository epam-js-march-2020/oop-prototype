
// <option> html elements from <select>
const OPTIONS = $('#select option').toArray();

// Forms for adding a certain food
const FOODS = $('.food').toArray();

// Aside section of the page to chose desirable position and it's parameters
const ASIDE = $('aside');

// Setting options to show corresponding foods forms
OPTIONS.forEach(function(element){

  $(element).click(function(){

    // All forms are hidden
    FOODS.forEach(function(element){
      $(element).addClass('hidden');
    })

    // Except for the needed one
    ASIDE.find('.'+$(element).val()).removeClass('hidden');

  })
});