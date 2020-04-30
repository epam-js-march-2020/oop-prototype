import Salad from '../src/salad';
import Drink from '../src/drink';
import Hamburger from '../src/hamburger';
import Order from '../src/order';

test('Hamburger counters', () => {
  var mediumOlivie = new Salad('SIZE_MEDIUM', 'TYPE_OLIVIE');
  var mediumCOLA = new Drink('SIZE_MEDIUM', 'TYPE_COLA');
  var largeCheese = new Hamburger('SIZE_LARGE', 'STUFFING_CHEESE');
  var totalCalories = mediumOlivie.calculateCalories() + mediumCOLA.calculateCalories() + largeCheese.calculateCalories()
  var totalPrice = mediumOlivie.calculatePrice() + mediumCOLA.calculatePrice() + largeCheese.calculatePrice();
  var order = new Order(mediumOlivie, mediumCOLA, largeCheese);

  expect(order.getSize()).toBe(3);
  expect(order.calculateCalories()).toBe(totalCalories);
  expect(order.calculatePrice()).toBe(totalPrice);

  var largeCOLA = new Drink('SIZE_LARGE', 'TYPE_COLA');
  var largeSalad = new Hamburger('SIZE_LARGE', 'STUFFING_SALAD');
  var mediumCaesar = new Salad('SIZE_MEDIUM', 'TYPE_CAESAR');
  totalCalories += largeCOLA.calculateCalories() + largeSalad.calculateCalories() + mediumCaesar.calculateCalories() + largeCOLA.calculateCalories();
  totalPrice += largeCOLA.calculatePrice() + largeSalad.calculatePrice() + mediumCaesar.calculatePrice() + largeCOLA.calculatePrice();
  order.add(largeCOLA);
  order.add(largeSalad);
  order.add(largeCOLA);
  order.add(mediumCaesar);

  expect(order.getSize()).toBe(7);
  expect(order.calculateCalories()).toBe(totalCalories);
  expect(order.calculatePrice()).toBe(totalPrice);

  order.remove(largeCOLA);
  order.remove(largeCheese);
  order.remove(largeCOLA);
  order.remove(mediumOlivie);
  totalCalories -= (largeCOLA.calculateCalories() + largeCheese.calculateCalories() + largeCOLA.calculateCalories() + mediumOlivie.calculateCalories());
  totalPrice -= (largeCOLA.calculatePrice() + largeCheese.calculatePrice() + largeCOLA.calculatePrice() + mediumOlivie.calculatePrice());
  
  expect(order.getSize()).toBe(3);
  expect(order.calculateCalories()).toBe(totalCalories);
  expect(order.calculatePrice()).toBe(totalPrice);
});