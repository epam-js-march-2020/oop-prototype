import _ from 'lodash';

var cartTemplate = _.template(
  `<div class="container">
    <h2 class="text-center">Cart</h2>
    <hr>
    <div class="container overflow-auto" style="height: 415px">
      <% items.forEach(function(item) { %>
        <div class="card mb-2 text-center">
          <div class="card-body">
            <p class="card-text"><%-item.size%> <%-item.type%> <%-item.name%></p>
            <div class="d-flex">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text rounded-left"><%-item.price%> ₮</span>
                </div>
                <div class="input-group-append">
                  <span class="input-group-text rounded-right"><%-item.calories%> Cal</span>
                </div>
              </div>
              <button type="button" class="btn btn-outline-danger">Remove</button>
            </div>
          </div>
        </div>
      <% }); %>
    </div>
  </div>`
);

function cart(order) {
  var stringifiedOrder = order.map((item) => {
    var name = item.name;
    var type = _.capitalize(item.getType().slice(5));
    var size = _.capitalize(item.getSize().slice(5));
    var price = item.calculatePrice();
    var calories = item.calculateCalories();
    return { name, type, size, price, calories };
  });
  return cartTemplate({items: stringifiedOrder});
}

export default cart;
