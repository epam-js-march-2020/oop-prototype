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
      <div class="card-body">
        <p class="card-text">
          A hamburger is a sandwich consisting of one or more cooked patties of ground meat, 
          usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, 
          grilled, smoked or flame broiled. Hamburgers are often served with cheese, lettuce, 
          tomato, onion, pickles, bacon, or chiles
        </p>
      </div>
    </div>

    <hr>
    <div class="card p-2" id="saladsCard">
      <img class="card-img-top w-50 mx-auto" src="${saladsImg}" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">
          A salad is a dish consisting of a mixture of small pieces of food, usually vegetables 
          or fruit. However, different varieties of salad may contain virtually any type of 
          ready-to-eat food. Salads are typically served at room temperature or chilled
        </p>
      </div>
    </div>

    <hr>
    <div class="card p-2" id="drinksCard">
      <img class="card-img-top w-50 mx-auto" src="${drinksImg}" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">
          A drink is a liquid intended for human consumption. In addition to their basic 
          function of satisfying thirst, drinks play important roles in human culture. 
          Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, 
          juice and soft drinks
        </p>
      </div>
    </div>
  </div>`
);
export default menu;
