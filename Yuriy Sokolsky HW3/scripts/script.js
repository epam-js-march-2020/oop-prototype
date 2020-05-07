var order = new Order();

function addBurger(size, stuffed) {
    var hamburger;
    var hamsize =
        size == "small" ? hamburgerOptions.SIZE_SMALL : hamburgerOptions.SIZE_LARGE;
    switch (stuffed) {
        case "cheese":
            hamburger = new Hamburger(hamsize, hamburgerOptions.STUFFING_CHEESE);
            break;

        case "salad":
            hamburger = new Hamburger(hamsize, hamburgerOptions.STUFFING_SALAD);
            break;
        case "potato":
            hamburger = new Hamburger(hamsize, hamburgerOptions.STUFFING_POTATO);
            break;
        default:
            break;
    }
    if (hamburger) updateOrderDisplay(order.addItem(hamburger));
}

function addSalad(type, weight) {
    switch (type) {
        case "ceasar":
            salad = new Salad(saladType.CEASAR, weight);
            break;

        case "olivie":
            salad = new Salad(saladType.OLIVIE, weight);
            break;
        default:
            break;
    }
    if (salad) updateOrderDisplay(order.addItem(salad));
}

function addDrink(type) {
    switch (type) {
        case "coffee":
            drink = new Drink(drinkType.COFFEE);
            break;

        case "cola":
            drink = new Drink(drinkType.COLA);
            break;
        default:
            break;
    }
    if (drink) updateOrderDisplay(order.addItem(drink));
}

function updateOrderDisplay(items) {
    if (!items) {
        toggleAlert("#alreadyOrderedAlert");

    } else if (items.length) {
        var orderlist = items;
        var res = "";
        orderlist.forEach(function (item) {
            res += "<div class='row border-bottom pb-1 itemInCart'>  <div class='col-sm-7'>";
            if (item.stuffing)
                res += item.size.name + " with " + item.stuffing.name;
            else if (item.weight) res += item.name + " (" + item.weight + "g.) ";
            else res += item.name;
            res += " </div>";
            res +=
                "<div class='col-sm'>" +
                item.getCalories() +
                " <small>Kcal</small></div><div class='col-sm'>" +
                item.getPrice() +
                "<small> &#x20bd;</small></div>";
            res += "<div class='removeItemButton '> <input class ='mybtnRemove display-4' type='button' value='Remove' onclick='removeItemFromOrder(\"" + item.id + "\")'></div></div>"
        });
        res +=
            "<div class='row border-top pt-5'><div class='col-sm-7'>Total sum </div><div class='col-sm'>" +
            order.totalCalories() +
            "<small> Kcal</small></div><div class='col-sm'>" +
            order.totalPrice() +
            "<small> &#x20bd;</small> </div>";
        $("#purchaseButton").attr( "style", "display: block !important;" );
        $("#cart").html(res);
    } else {
        $("#cart").html("Cart is empty. Add something.");
        $("#purchaseButton").hide();

    }
}

function removeItemFromOrder(id) {
    updateOrderDisplay(order.removeItem(id));
}

function toggleAlert(alertID) {
    $(alertID).fadeIn();
    window.setTimeout(function () {
        $(alertID).fadeOut(300)
    }, 3000);
}

function payedAlert(payedStatus) {
    if (payedStatus) {
            $("#purchaseButton").hide();
        toggleAlert("#orderAlert");
    }
}

$(".roundButtonToDisplayCart").click(function () {
    if ($(".orderlist").css("right") == "0px") {
        $(".orderlist").css("right", "-350px");
    } else {
        $(".orderlist").css("right", "0px")
    }

});