import _ from 'lodash';
import burgersImg from '../images/category-burgers.jpg';
import saladsImg from '../images/category-salads.jpg';
import drinksImg from '../images/category-drinks.jpg';

var menu = _.template(
  `<div class="container">
    <h2 class="text-center">Menu</h2>

    <hr>
    <div class="card p-2" id="burgersCard">
      <img class="card-img-top w-50 mx-auto" src="${burgersImg}" alt="Card image cap">
    </div>

    <hr>
    <div class="card p-2" id="saladsCard">
      <img class="card-img-top w-50 mx-auto" src="${saladsImg}" alt="Card image cap">
    </div>

    <hr>
    <div class="card p-2" id="drinksCard">
      <img class="card-img-top w-50 mx-auto" src="${drinksImg}" alt="Card image cap">
    </div>
  </div>`
);
export default menu;
