import Drink from '../src/drink';

test('Drink counters', () => {
  var smallCOFFEE = new Drink('SIZE_SMALL', 'TYPE_COFFEE');
  var mediumCOFFEE = new Drink('SIZE_MEDIUM', 'TYPE_COFFEE');
  var largeCOFFEE = new Drink('SIZE_LARGE', 'TYPE_COFFEE');
  var smallCOLA = new Drink('SIZE_SMALL', 'TYPE_COLA');
  var mediumCOLA = new Drink('SIZE_MEDIUM', 'TYPE_COLA');
  var largeCOLA = new Drink('SIZE_LARGE', 'TYPE_COLA');
  
  expect(smallCOFFEE.calculatePrice()).toBe(80);
  expect(smallCOFFEE.calculateCalories()).toBe(20);

  expect(mediumCOFFEE.calculatePrice()).toBe(120);
  expect(mediumCOFFEE.calculateCalories()).toBe(30);

  expect(largeCOFFEE.calculatePrice()).toBe(160);
  expect(largeCOFFEE.calculateCalories()).toBe(40);

  expect(smallCOLA.calculatePrice()).toBe(50);
  expect(smallCOLA.calculateCalories()).toBe(40);

  expect(mediumCOLA.calculatePrice()).toBe(75);
  expect(mediumCOLA.calculateCalories()).toBe(60);

  expect(largeCOLA.calculatePrice()).toBe(100);
  expect(largeCOLA.calculateCalories()).toBe(80);
});
