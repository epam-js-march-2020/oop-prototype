import Salad from '../src/salad';

test('Salad counters', () => {
  var smallOlivie = new Salad('SIZE_SMALL', 'TYPE_OLIVIE');
  var mediumOlivie = new Salad('SIZE_MEDIUM', 'TYPE_OLIVIE');
  var largeOlivie = new Salad('SIZE_LARGE', 'TYPE_OLIVIE');
  var smallCaesar = new Salad('SIZE_SMALL', 'TYPE_CAESAR');
  var mediumCaesar = new Salad('SIZE_MEDIUM', 'TYPE_CAESAR');
  var largeCaesar = new Salad('SIZE_LARGE', 'TYPE_CAESAR');
  
  expect(smallOlivie.calculatePrice()).toBe(50);
  expect(smallOlivie.calculateCalories()).toBe(80);

  expect(mediumOlivie.calculatePrice()).toBe(75);
  expect(mediumOlivie.calculateCalories()).toBe(120);

  expect(largeOlivie.calculatePrice()).toBe(100);
  expect(largeOlivie.calculateCalories()).toBe(160);

  expect(smallCaesar.calculatePrice()).toBe(100);
  expect(smallCaesar.calculateCalories()).toBe(20);

  expect(mediumCaesar.calculatePrice()).toBe(150);
  expect(mediumCaesar.calculateCalories()).toBe(30);

  expect(largeCaesar.calculatePrice()).toBe(200);
  expect(largeCaesar.calculateCalories()).toBe(40);
});
