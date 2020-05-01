import _ from 'lodash';

var container = _.template(
  `<div class="container text-center">
    <h2>Options</h2>
    <hr>
    <%=options%>
    <hr>
    <%=footer%>
  </div>`
);

var footerTemplate = _.template(
  `<h5>Total Calories: <span></span></h5>
  <h5>Total Price: <span></span></h5>
  <hr>
  <button type="button" class="btn btn-secondary">Add to Cart</button>`
);

var initTemplate = _.template(
  '<h3>Select menu position</h3>'
);

var burgersOptions = _.template(
  `<h4>Size</h4>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary">Small</button>
    <button type="button" class="btn btn-secondary">Large</button>
  </div>
  <hr>
  <h4>Stuffing</h4>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary">Cheese</button>
    <button type="button" class="btn btn-secondary">Salad</button>
    <button type="button" class="btn btn-secondary">Potato</button>
  </div>`
);

var saladsOptions = _.template(
  `<h4>Size</h4>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary">Small</button>
    <button type="button" class="btn btn-secondary">Medium</button>
    <button type="button" class="btn btn-secondary">Large</button>
  </div>
  <hr>
  <h4>Type</h4>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary">Olieve</button>
    <button type="button" class="btn btn-secondary">Caesar</button>
  </div>`
);

var drinksOptions = _.template(
  `<h4>Size</h4>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary">Small</button>
    <button type="button" class="btn btn-secondary">Medium</button>
    <button type="button" class="btn btn-secondary">Large</button>
  </div>
  <hr>
  <h4>Type</h4>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary">Cola</button>
    <button type="button" class="btn btn-secondary">Coffee</button>
  </div>`
);

/* eslint indent: ["error", 2, { "SwitchCase": 1 }]*/
function options(product) {
  switch (product) {
    case 'init' :
      return container({ options: initTemplate(), footer: '' });
    case 'burgers':
      return container({ options: burgersOptions(), footer: footerTemplate() });
    case 'salads':
      return container({ options: saladsOptions(), footer: footerTemplate() });
    case 'drinks':
      return container({ options: drinksOptions(), footer: footerTemplate() });
    default:
      return container({ options: '<h1>undefined option</h1>' });
  }
}

export default options;
