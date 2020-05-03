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
  <div class="btn-group btn-group-toggle" data-toggle="buttons" id="sizeButtonsGroup">
    <label class="btn btn-secondary">
      <input type="radio" name="burgersSize" value="SIZE_SMALL"> Small
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="burgersSize" value="SIZE_LARGE"> Large
    </label>
  </div>
  <hr>
  <h4>Stuffing</h4>
  <div class="btn-group btn-group-toggle" data-toggle="buttons" id="typeButtonsGroup">
    <label class="btn btn-secondary">
      <input type="radio" name="burgersType" value="TYPE_CHEESE"> Cheese
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="burgersType" value="TYPE_SALAD"> Salad
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="burgersType" value="TYPE_POTATO"> Potato
    </label>
  </div>`
);

var saladsOptions = _.template(
  `<h4>Size</h4>
  <div class="btn-group btn-group-toggle" data-toggle="buttons" id="sizeButtonsGroup">
    <label class="btn btn-secondary">
      <input type="radio" name="saladsSize" value="SIZE_SMALL"> Small
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="saladsSize" value="SIZE_MEDIUM"> Medium
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="saladsSize" value="SIZE_LARGE"> Large
    </label>
  </div>
  <hr>
  <h4>Type</h4>
  <div class="btn-group btn-group-toggle" data-toggle="buttons" id="typeButtonsGroup">
    <label class="btn btn-secondary">
      <input type="radio" name="saladsType" value="TYPE_OLIVIE"> Olieve
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="saladsType" value="TYPE_CAESAR"> Caesar
    </label>
  </div>`
);

var drinksOptions = _.template(
  `<h4>Size</h4>
  <div class="btn-group btn-group-toggle" data-toggle="buttons" id="sizeButtonsGroup">
    <label class="btn btn-secondary">
      <input type="radio" name="drinksSize" value="SIZE_SMALL"> Small
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="drinksSize" value="SIZE_MEDIUM"> Medium
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="drinksSize" value="SIZE_LARGE"> Large
    </label>
  </div>
  <hr>
  <h4>Type</h4>
    <div class="btn-group btn-group-toggle" data-toggle="buttons" id="typeButtonsGroup">
    <label class="btn btn-secondary">
      <input type="radio" name="drinksType" value="TYPE_COLA"> Cola
    </label>
    <label class="btn btn-secondary">
      <input type="radio" name="drinksType" value="TYPE_COFFEE"> Coffee
    </label>
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
