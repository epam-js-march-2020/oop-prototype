var order = new Order();

function addItem(item) {
  if (item) {
    try {
      order.addItem(item);
      updateOrderDisplay(order.items);
    } catch (e) {
      toggleAlert("#alreadyOrderedAlert");
    }
  }
}

function newOrder() {
  console.log(order);
  order = new Order();
  $("#newOrderButton").hide();
  updateOrderDisplay(order.items);
  $("#totalSum").html("");
  $(".itemsAddButtons").attr("disabled", false).removeClass("disabled");
}
function updateOrderDisplay(items) {

  if (items.length) {
    var orderlist = items;
    var res = "";

    orderlist.forEach(function (item) {
      res +="<div class='row border-bottom pb-1 itemInCart'>  <div class='col-sm-7'>";

      res += typeof item.getFullName === "function" ? item.getFullName() : item.getName();

      res +=
        "</div><div class='col-sm'>" +
        item.getCalories() +
        "<small>Kcal</small></div><div class='col-sm'>" +
        item.getPrice() +
        "<small> &#x20bd;</small></div>";

      res +=
        "<div class='removeItemButton '> <input class ='mybtnRemove display-4' type='button' value='Remove' onclick='removeItemFromOrder(\"" +
        item.id +
        "\")'></div></div>";
    });

    var resTotal =
      "<div class='row border-top pt-5'><div class='col-sm-6'>Total sum </div><div class='col-sm'>" +
      order.getTotalCalories() +
      "<small> Kcal</small></div><div class='col-sm'>" +
      order.getTotalPrice() +
      "<small> &#x20bd;</small> </div>";

    $("#purchaseButton").attr("style", "display: block !important;");
    $("#totalSum").html(resTotal);
    $("#cart").html(res);

  } else {
      $("#cart").html("Cart is empty. Add something.");
      $("#purchaseButton").hide();
  }
}

function removeItemFromOrder(id) {
  order.removeItem(id);
  updateOrderDisplay(order.items);
}

function toggleAlert(alertID) {
  $(alertID).fadeIn();
  window.setTimeout(function () {
    $(alertID).fadeOut(300);
  }, 3000);
}

function payedAlert(payedStatus) {
  if (payedStatus) {
    $(".itemsAddButtons").attr("disabled", true).addClass("disabled");
    $("#purchaseButton").hide();
    toggleAlert("#orderAlert");
    $("#newOrderButton").attr("style", "display: block !important;");
  }
}

$(".roundButtonToDisplayCart").click(function () {
  if ($(".orderlist").css("right") == "0px") {
    $(".orderlist").css("right", "-350px");
  } else {
    $(".orderlist").css("right", "0px");
  }
});