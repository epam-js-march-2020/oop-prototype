/**
 * class describes the logock of the appliction
 * now it adds some orders to the order list for prefromance
 */

function App() {
    var b = new Burger("cheese", "small"),
        d = new Beverage('coffee'),
        s = new Salad('cesar', 200),
        o = new Order,
        o2 = new Order,
        o3 = new Order;

    o3.add(s,d);
    o3.pay();
    o2.add(b,d);
    o.add(b,d,s);

    this.currentOrder = null;
    this.orders = [{id: 1, order: o}, {id: 2, order: o2}, {id: 3, order: o3}];
    
    // this.orders = [];
}

/**
 * methods renders the apllication
 * renders the list of orders
 * add events listeners 
 * for show help button
 * and main elemtns of the application
 */
App.prototype.start = function() {
    this.render(structures.application, [true], '#root');
    this.render(structures.order, this.orders, '#orders');

    $('#application').on('click', this.orderWorker.bind(this) );

    $('#menu').on('click', this.menuWorker.bind(this));
    $('#beverage').on('mousedown', this.onMouseDownBeverage );
    $('#weight').on('input', this.onInputWeight );
    $('#weight').on('keydown', this.onkeyDownWeight.bind(this) );
    $('#getHelp').on('click', this.showHelp.bind(this) )
    
    this.showHelp();    
}


/**
 * renders a template in the page
 */
App.prototype.render = function(structure, items, containerId) {
    
    $( containerId ).html('');
    let tmpl = _.template( structure );  
    $( containerId ).html( tmpl( {list: items} ) );
}


/**
 * renders the the current order in the modal indow
 */
App.prototype.renderOrderList = function (structure, order, containerId) {

    this.render(structure, order.items, containerId);
    
    $('#orderPrice').find('span').text(Math.floor(order.price) );
    $('#orderCalc').find('span').text(order.calc.toFixed());
    $('#orderWeight').find('span').text(order.weight);
}


/**
 * treats clicks on the order siction of the application
 */
App.prototype.orderWorker = function(ev) {
    ev.preventDefault();
    
    var targetId = ev.target.id;
    // console.log(targetId)
    if( targetId == 'createNewOrder') {
        $('#help').html('');
        this.orderEditer();
    }

    if ( /^orderPosition-\d{1,}$/.test(targetId) ) {
        var deletedItemId = Number( ev.target.id.split('-')[1] );
        this.delteOrderPosition(deletedItemId);
    }

    if ( /^orderId-\d{1,}$/.test(targetId) ) {
        var orderId = ev.target.id.split('-')[1];
        this.orderEditer(orderId);
    }

    if ( targetId == 'dropOrder' ) {
        this.renderDropConfirmation();
    }

    if (targetId == 'dropCancel') {
        this.cancelDrop();
    }

    if (targetId == 'dropSubmit') {
        this.submitDrop();
    }

    if( targetId == 'cancelOrder' ) {
        this.cancelOrderediter();
    } 

    if ( targetId == 'saveOrder' ) {
        this.saveOrder();
    }

    if ( targetId == 'payOrder' ) {
        this.payOrder();
    }

    if ( targetId == 'gotIt') {
        $('#help').html('');
    }
}

/**
 * treats clicks on the menu container
 */
App.prototype.menuWorker = function(ev) {
    
    var parentId =$(ev.target).parent().attr('id');
    
    if (parentId == 'beverage') {
        this.onClickBeverage(ev.target.id);
    }
    if (parentId == 'size' || parentId == 'stuff') {
        this.onClickBurger(ev)
    }
    if (parentId == 'saladName') {
        this.onclickSalad(ev);
    }
}


/**
 * the methids works with orders
 * renders the modal element and gets the order. 
 * if the button new order was clicked it returns a blank example of an order
 * renders element of the modal window that is needed forthe current order
 */
App.prototype.orderEditer = function(orderId) {
    
    this.orderEditerOn();
    this.currentOrder = this.orderGetter(orderId);
    this.orderHelper();
}


/**
 * renders the modal window that is used for working with orders
 * disables the create new order button
 */
App.prototype.orderEditerOn = function() {
    
    $('#orderWorker').find('.darkerContainer').removeClass('displayNone');
    this.render(structures.orderContainer, [ true ], '#orderContainer');
    $('#createNewOrder').prop('disabled', true);
}


/**
 * the method look for the needle order in the list of the orders and return it
 * if user want to create a new order if returns the blank order 
 *  the blank order has no id property in it
 * 
 * also the
 */
App.prototype.orderGetter = function(orderId) {

    var currentOrder;
    
    if (orderId) {
        var indexOrder = this.orders.findIndex( function(el) {
            return el.id === Number( orderId );
        });

        currentOrder = _.cloneDeep( this.orders[indexOrder] );

    } else {
        currentOrder = { id: undefined, order: new Order() };
    }
    return currentOrder;
}


/**
 * activates or desactivates the elements of the modal window
 * depending is the current order new or not
 */
App.prototype.orderHelper = function() {
    if (this.currentOrder.id) {

        this.renderOrderList(structures.orderItem, this.currentOrder.order, '#oderItems');
        $('#orderNumber').text(this.currentOrder.id);
        
        if (this.currentOrder.order.payment) {
            $('.close').remove();
            $('#colorOrder').addClass('bg-paid');

        } else {
            $('#colorOrder').addClass('bg-active');
            this.enableOrderButtons();
            $('#saveOrder').attr('disabled', true );
            $('#menu').find('.darkerContainer').addClass('displayNone');
        }

    } else {
        $('#colorOrder').addClass('bg-light');
        $('#orderNumber').text('New');
        $('#menu').find('.darkerContainer').addClass('displayNone');
    }
}


/**
 * deltes a position in the order list
 * rneders lists
 * if the list is empty disables the buttons of the modal
 */
App.prototype.delteOrderPosition = function(deletedItemId) {

    this.currentOrder.order.deletePosition(deletedItemId + 1);

    if(this.currentOrder.order.items.length === 0) {
        this.disableOrderButtons();
    } else {
        this.enableOrderButtons();
    }

    this.renderOrderList(structures.orderItem, this.currentOrder.order, '#oderItems');
}

/**
 * renders the confirmation modal window
 */
App.prototype.renderDropConfirmation = function() {
    if (this.currentOrder.order.items.length > 0) {
        this.render(structures.modal, [true], '#confirmationModal');
        $('#menu').find('.darkerContainer').removeClass('displayNone');
    }
}

/**
 * unmount the confimation window
 * cancels dropping the order
 */
App.prototype.cancelDrop = function() {
    $('#confirmationModal').html('')
    $('#menu').find('.darkerContainer').addClass('displayNone');
}

/**
 * drops the order
 * unmount the confirmation window
 */
App.prototype.submitDrop = function() {
    if (this.currentOrder.order.items.length > 0) {
        this.currentOrder.order.drop();
        this.disableOrderButtons();

        $('#oderItems').html('');
        $('#confirmationModal').html('');
        $('#menu').find('.darkerContainer').addClass('displayNone');
    }
    
}


/**
 * closes the order modal window
 */
App.prototype.cancelOrderediter = function() {
    
    this.currentOrder = null;

    $('#menu').find('.darkerContainer').removeClass('displayNone');
    $('#orderWorker').find('.darkerContainer').addClass('displayNone');
    $('#orderContainer').html('');
    $('#createNewOrder').prop('disabled', false);
}


/**
 * saves the current order
 */
App.prototype.saveOrder = function() {

    if (this.currentOrder.order.items.length > 0) {
        if (this.currentOrder.id) {

            var index = this.orders.findIndex( this.orderSearcher.bind(this) )
            this.orders.splice(index, 1 , this.currentOrder);
        } else {
            if (this.orders.length === 0) {
                this.currentOrder.id = 1;
            } else {
                this.currentOrder.id = this.orders[this.orders.length - 1].id + 1;
            }
            this.orders.push(this.currentOrder);
        }
        this.cancelOrderediter();
        this.render(structures.order, this.orders, '#orders');
    }
}


/**
 * looks for the index of the currenct order on this.orders
 * used as a callback 
 */
App.prototype.orderSearcher = function(el) {
    return el.id === this.currentOrder.id;
}



/**
 * makes the current order paid and save it
 */
App.prototype.payOrder = function() {
    this.currentOrder.order.payment = true;
    this.saveOrder();
}


/**
 * the methods reders help guide
 * adds event listener on the button that closes the guide
 */
App.prototype.showHelp = function() {

    this.render(structures.help, [true], '#help');
}


/**
 * adds a beveage in the list of an order
 * renders the list
 */
App.prototype.onClickBeverage = function(type) {
    
    this.currentOrder.order.add( new Beverage(type) );

    $('#menu').find('a').removeClass('opacity-low');
    this.renderOrderList(structures.orderItem, this.currentOrder.order, '#oderItems');
    this.scroller();
    this.enableOrderButtons();
}


/**
 * adds a burget on the list of the order
 */
App.prototype.onClickBurger = function(ev) {

    this.marker(ev);

    var size = $( $('#size').find('[data-active="true"]')[0] ).attr('id');
    var stuff = $( $('#stuff').find('[data-active="true"]')[0] ).attr('id');

    if (size && stuff) {

        this.currentOrder.order.add( new Burger(stuff, size) );
        this.enableOrderButtons();
        
        this.renderOrderList(structures.orderItem, this.currentOrder.order, '#oderItems');
        this.scroller();

        $('#size').find('a').removeClass('opacity-low');
        $('#stuff').find('a').removeClass('opacity-low');
        $('#size').find('a').removeAttr('data-active');
        $('#stuff').find('a').removeAttr('data-active');
    }
}


/**
 * adds a salad on the list of the order on the click of a salad
 */
App.prototype.onclickSalad = function(ev) {
    
    this.marker(ev);

    var name = $( $('#saladName').find('[data-active="true"]')[0] ).attr('id');
    var weight = $('#weight').val();

    if( name && weight) {
        this.currentOrder.order.add( new Salad(name, Number( weight ) ) );
        this.saladAdderCleaner();
        this.renderOrderList(structures.orderItem, this.currentOrder.order, '#oderItems');
        this.scroller();
    } else {
        $('#weight').focus();
    }
}


/**
 * works with pictures of menu.
 * makes the picture that have got click marked
 * and unmarks the res
 */
App.prototype.marker = function(ev) {

    $(ev.target).parent().find('a').addClass('opacity-low');
    $(ev.target).parent().find('a').removeAttr('data-active');
    $(ev.target).removeClass('opacity-low');
    $(ev.target).attr('data-active', true);
}


/**
 * cleans the input of the sald weight
 */
App.prototype.saladAdderCleaner = function() {
    
    this.enableOrderButtons();
    $('#weight').val('');
    $('#saladName').find('a').removeClass('opacity-low');
    $('#saladName').find('a').removeAttr('data-active');
}


App.prototype.onMouseDownBeverage = function(ev) {

    $('#menu').find('a').addClass('opacity-low');
    $(ev.target).removeClass('opacity-low');
}


/**
 * adds a salad on the list of the order on the press enter if the input has focus
 */
App.prototype.onkeyDownWeight = function(ev) {
    
    var name = $( $('#saladName').find('[data-active="true"]')[0] ).attr('id');
    var weight = $('#weight').val();
    if (ev.which === 13 && name && weight) {
        this.currentOrder.order.add( new Salad(name, Number( weight ) ) );
        this.saladAdderCleaner();
        this.renderOrderList(structures.orderItem, this.currentOrder.order, '#oderItems');
        this.scroller();
    }
}


/**
 * checks the value in the input of salad weight
 * user can enter only digits
 * the max value is 99999 in grams
 * I hope it will be enought for this small fastfood restron
 *  to add 99.99 kg of a salad in the order
 */
App.prototype.onInputWeight = function(ev) {

    var weight = $(ev.target).val();
    if (weight.charAt(0) === '0') {
        weight = weight.slice(1);
    }
    var weight = weight.replace(/\D/g, '');
    if (weight.length > 5) {
        weight = weight.slice(0, -1);
    }
    $(ev.target).val(weight);
}


/**
 * disables buttons of the modal window
 */
App.prototype.disableOrderButtons = function() {

    $('#dropOrder').attr('disabled', true);
    $('#saveOrder').attr('disabled', true);
    $('#payOrder').attr('disabled', true);
}


/**
 * enables buttons of the modal window
 */
App.prototype.enableOrderButtons = function() {
    
    $('#dropOrder').attr('disabled', false);
    $('#saveOrder').attr('disabled', false);
    $('#payOrder').attr('disabled', false);
}


/**
 * keeps the list of the current order at the down postion
 * it helps to see the last added postion
 * it looks comfortable
 */
App.prototype.scroller = function() {
    $("#oderItems").scrollTop($("#oderItems")[0].scrollHeight);
}