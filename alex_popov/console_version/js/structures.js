/**
 * layouts that is used for rendering the elements of the application
 */

var structures = {
    orderItem: '<% list.forEach( function(el, index) { %>  \
        <div class="d-flex justify-content-between border-bottom py-2">  \
            <p class="m-0"><%=el.toString()%></p>  \
            <button type="button" class="close" aria-label="Close">  \
                <span id="orderPosition-<%=index%>" aria-hidden="true">&times;</span>  \
            </button>  \
        </div>  \
    <% }) %>',

    order: '<% list.forEach( function(el) { %>  \
        <% var className = "order d-flex justify-content-center align-items-center text-white rounded mx-3 my-3" %> \
        <% var add = el.order.payment ? " bg-success" : " bg-danger"; %>  \
        <% className += add; %>  \
        <a id="orderId-<%=el.id%>" class="<%=className%>" href=""><%=el.id%></a>  \
    <% }) %>',

    orderContainer: '<% list.forEach( function(el) { %> \
        <div class="position-absolute fullfilled d-flex align-items-center justify-content-center">  \
            <div id="colorOrder" class="position-relative w-75 rounded px-3 py-2">  \
                <h4 class=""><span id="orderNumber"></span> Order</h4>  \
                <div id="oderItems" class="orderShower overflow-auto"></div>  \
                <div class="d-flex justify-content-around py-1 border-top border-bottom">  \
                    <div id="orderPrice">Price: <span class="d-block">0</span></div>  \
                    <div id="orderCalc">Cal: <span class="d-block">0</span></div>  \
                    <div id="orderWeight">Weight: <span class="d-block">0</span></div>  \
                </div>  \
                <div class="d-flex justify-content-between pt-2">  \
                    <button disabled id="dropOrder" type="button" class="btn btn-danger actionButton">Drop</button>  \
                    <button id="cancelOrder" type="button" class="btn btn-warning actionButton text-white">Cancel</button>  \
                    <button disabled id="saveOrder" type="button" class="btn btn-primary actionButton">Save</button>  \
                    <button disabled id="payOrder" type="button" class="btn btn-success actionButton">Pay</button>  \
                </div>  \
                <div id="confirmationModal"></div>  \
            </div>  \
            <div class="confirmationContainer">  \
                <div class="position-absolute darker fullfiiled"></div>  \
            </div>  \
        </div>  \
    <% }) %>',

    modal: '<% list.forEach( function(el) { %>  \
            <div class="position-absolute fullfilled bg-dark opacity-light"></div>  \
            <div class="position-absolute fullfilled d-flex  flex-column justify-content-center align-items-center">  \
                <div class="d-flex  flex-column justify-content-center align-items-center text-white">  \
                    <h4>You are going to clear the order</h4>  \
                    <p>continue?</p>  \
                </div>  \
                <div>  \
                    <button id="dropSubmit" type="button" class="btn btn-danger mx-3">delete</button>  \
                    <button id="dropCancel" type="button" class="btn btn-info mx-3">cancel</button>  \
                </div>  \
            </div>  \
    <% }) %>',

    application: '<% list.forEach( function(el) { %>  \
        <div id="application" class="position-fixed fullfilled row px-3">  \
            <div id="menu" class="px-4 col bg-secondary overflow-auto">  \
            \
                <div id="burger" class="py-4">  \
                    <div id="size" class="row">  \
                        <a id="big" class="d-block pointer rounded-lg mx-3 px-0 course cover col"></a>  \
                        <a id="small" class="d-block pointer rounded-lg mx-3 px-0 course cover col"></a>  \
                    </div>  \
                    <div id="stuff" class="row pt-3">  \
                        <a id="cheese" class="d-block pointer rounded-lg mr-2 ml-3 px-0 option cover col"></a>  \
                        <a id="salad" class="d-block pointer rounded-lg mx-2 px-0 option cover col"> </a>  \
                        <a id="potato" class="d-block pointer rounded-lg ml-2 mr-3 px-0 option cover col "></a>  \
                    </div>  \
                </div>   \
                \
                <div id="beverage" class="py-4 border-top border-warning row">  \
                      \
                        <a id="coffee" class="pointer rounded-lg mx-3 course cover col p-0"></a>  \
                        <a id="cola" class="pointer rounded-lg mx-3 course cover col p-0"></a>  \
                      \
                </div>  \
                \
                <div id="saladDish" class="py-4 border-top border-warning">  \
                    <div id="saladName" class="row">  \
                        <a id="cesar" class="pointer rounded-lg mx-3 px-0 course cover col p-0"></a>  \
                        <a id="olivier" class="pointer rounded-lg mx-3 px-0 course cover col p-0"></a>  \
                    </div>  \
                    <div class="pt-3">  \
                        <input id="weight" class="form-control form-control-sm" type="text" placeholder="wieght in gramms 99999 max">  \
                    </div>  \
                </div>  \
                \
                <div class="darkerContainer">  \
                    <div class="position-absolute fullfilled bg-dark opacity-light"></div>  \
                </div>  \
            </div>  \
            \
            <button id="createNewOrder" type="button" class="btn btn-warning text-white">New</button>  \
            \
            <div id="orderWorker" class="col-8">  \
                <div id="orders" class="d-flex flex-row flex-wrap"></div>  \
                <div class="darkerContainer displayNone">  \
                    <div class="position-absolute fullfilled bg-dark opacity-light"></div>  \
                </div>  \
                <div id="orderContainer"></div>  \
                <div id="help"></div>  \
            </div>  \
        </div>  \
        \
        <div class="fixed">  \
            <button id="goBack" type="button" class="btn btn-warning mx-1 text-white">Go back</button>  \
            <button id="getHelp" type="button" class="btn btn-warning mx-1 text-white ">Help</button>  \
        </div>  \
    <% }) %>',

    start: '<% list.forEach( function(el) { %> \
        <div class="position-absolute fullfilled d-flex justify-content-center align-items-center">  \
            <div>  \
                <button id="console" type="button" class="btn btn-primary">Console</button>  \
                <button id="dom" type="button" class="btn btn-danger">DOM</button>  \
            </div>  \
        </div>  \
    <% }) %>',

    consoleInstruction: '<% list.forEach( function(el) { %> \
        <div class="text-white p-5"> \
            <div class="container w-75 mx-auto">  \
                <h4>How does it work?</h3>  \
                <p>  \
                    If you want to create a new Dish use <span class="font-weight-bold">new Burger( stuff, size), new Salad(name, weight), new Beverage(name)</span>.  \
                    Pass a strings into the functions.  \
                </p>   \
                <h5>Burger</h5>  \
                <p>Available stuff:</p>  \
                <ul>  \
                    <li>cheese</li>  \
                    <li>salad</li>  \
                    <li>potato</li>  \
                </ul>  \
                <P>Available sizes:</P>  \
                <ul>  \
                    <li>small</li>  \
                    <li>big</li>  \
                </ul>  \
                <h5>Salad</h5>  \
                <p>Available names:</p>  \
                <ul>  \
                    <li>cesar</li>  \
                    <li>olivier</li>  \
                </ul>  \
                <P>Weight should be a number in grams</P>  \
                <h5>Beverage</h5>  \
                <ul>  \
                    <li>cola</li>  \
                    <li>coffee</li>  \
                </ul>  \
                <p>  \
                    for instance var hamb = new Burger("chesse", "small")  \
                </p>  \
                <h5>Orders</h5>  \
                <p>  \
                    If you want to create a new order use: <span class="font-weight-bold">new Order()</span>  \
                </p>  \
                <P>  \
                    To add new positions use <span class="font-weight-bold">order.add(position, position ...)</span>. You can pass either one item in the function or a list of items.  \
                    Be awere that you pass to the function examples of the  Burger, Salad or Bavarage.  \
                    Of couse you can try to pass somthing else but I would not suggest doing so.  \
                </P>  \
                <p>  \
                    <span class="font-weight-bold">order.list()</span> can help you to take a look at the list of position in the order.  \
                </p>  \
                <P>  \
                    <span class="font-weight-bold">oder.deletePosition(positionNumber)</span> can delete a position in the order. Please, pass a number.  \
                    You can learn numbers of each position using <span class="font-weight-bold">.list()</span>.  \
                </P>  \
                <P>  \
                    <span class="font-weight-bold">order.drop()</span> deletes all the postions in the order. Use it carefull.  \
                </P>  \
                <P>  \
                    <span class="font-weight-bold">order.pay()</span> makes the order paid, and then You can not change anything in the order.  \
                </P>  \
                <P>  \
                    To get price of an order use <span class="font-weight-bold">order.price</span>.  \
                </P>  \
                <P>  \
                    To get calorie content of an order use <span class="font-weight-bold">order.calc</span>.  \
                </P>  \
                <P>  \
                    To get weight of an order use <span class="font-weight-bold">order.weight</span>.  \
                </P>  \
                <span class="font-weight-bold"></span>  \
            </div>  \
        </div>  \
        <button id="goBack" type="button" class="btn btn-warning text-white fixed">Go back</button>  \
    <% }) %>',

    help: '<% list.forEach( function(el) { %> \
            <div class="position-absolute fullfilled bg-dark opacity-light"></div>  \
            <div class="position-absolute fullfilled"> \
                <div class="text-white p-5"> \
                    <h4>How does it work?</h4> \
                    <p>Click the add new button on the menu section, or click an order on the order section. Order modal window will be opened \
                    Then you can change the order or create a new one.</p> \
                    <h5>The first section of the menu is the hamburger section.</h5> \
                    <p> \
                        To put a hamburger to the list of the order you should choose the size of the hamburger on the first line \
                        and the type of stuffing of the hamburger on the second line of the section. You can choose whether the size  \
                        or the type first. When the second position is defined the hamburger will be  added on the list. \
                    </p> \
                    <h5>The second section is the beverage section.</h5> \
                    <p> \
                        To put a beverage on the list of the order just click the type  \
                        of beverage. It will be added right away you click on it. \
                    </p> \
                    <h5>The third section is a salad section.</h5> \
                    <p> \
                        To put a salad on the list, you should choose the type of the salad, and then enter the weight in gramms \
                        in the input that is right beneath the pictures. When you have entered the weight, you can press the enter button the salad will be added. \
                        But you also can enter the weight first and then click a picture to choose the type of the salad. \
                    </p> \
                    <p> We are supposed that you can not save an empty order.</p> \
                    <p>After payment you can not change the order.</p> \
                    <button id="gotIt" type="button" class="btn btn-warning actionButton text-white">Got it!!</button> \
                </div> \
            </div> \
    <% }) %>'
}
