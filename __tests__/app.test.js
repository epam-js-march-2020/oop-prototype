import _ from 'lodash';
import app from '../src/views/app';

test('app layout', () => {
  var template1 = _.template('<div>Template example1</div>');
  var template2 = _.template('<div>Template example2</div>');
  var template3 = _.template('<div>Template example3</div>');

  var expectedHTML = 
  `<div class="row">
      <div class="col-5">
          <div>Template example1</div>
      </div>
      <div class="col-4">
          <div>Template example2</div>
      </div>
      <div class="col-3">
          <div>Template example3</div>
      </div>
  </div>`;
  var templateResult = app({
      menu: template1,
      options: template2,
      cart: template3,
  });
  expect(templateResult).toBe(expectedHTML);
});
