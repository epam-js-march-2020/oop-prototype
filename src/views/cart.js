import _ from 'lodash';

var cartTemplate = _.template(
  `<div class="container">
    <h2 class="text-center">Cart</h2>
    <hr>
    <ul>
      <% items.forEach(function(item) { %>
      <li><%-item.size%> <%-item.type%> <%-item.name%> <%-item.price%>₮ <%-item.calories%>Cal</li>
      <% }); %>
    </ul>
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
