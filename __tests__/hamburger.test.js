import Hamburger from '../src/hamburger';

test('Hamburger counters', () => {
  var smallCheese = new Hamburger('SIZE_SMALL', 'TYPE_CHEESE');
  var largeSalad = new Hamburger('SIZE_LARGE', 'TYPE_SALAD');
  var smallPotato = new Hamburger('SIZE_SMALL', 'TYPE_POTATO');
  var largeCheese = new Hamburger('SIZE_LARGE', 'TYPE_CHEESE');
  
  expect(smallCheese.calculatePrice()).toBe(60);
  expect(smallCheese.calculateCalories()).toBe(40);

  expect(largeSalad.calculatePrice()).toBe(120);
  expect(largeSalad.calculateCalories()).toBe(45);

  expect(smallPotato.calculatePrice()).toBe(65);
  expect(smallPotato.calculateCalories()).toBe(30);

  expect(largeCheese.calculatePrice()).toBe(110);
  expect(largeCheese.calculateCalories()).toBe(60);
});
