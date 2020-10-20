var totalPriceArray = [];
function Order (customize, cheese) {
  this.customize=customize
  this.crust = 100;
  this.toppings = 150;
  this.pizzaPrice = 0;
}
Order.prototype.pizzaCost = function () {
  if (this.customSize === "Small.") {
    this.pizzaPrice += 500;
  } else if (this.customSize === "Medium.") {
    this.pizzaPrice += 700;
  } else if (this.customSize === "Large.") {
    this.pizzaPrice += 950;
  } 
  
  this.pizzaPrice += this.crust;
  this.pizzaPrice += this.toppings;
  return this.pizzaPrice;
}
Order.prototype.finalCost = function () {
  var cartTotalPrice = 0;
  for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement ++) {
    cartTotalPrice += totalPriceArray[arrayElement];
  }
  return cartTotalPrice;
}
function Address (streetAddress, city, county) {
  this.streetAddress = streetAddress;
  this.city = city;
  this.county = county;
  this.deliveryAddress = (streetAddress + "  " + city + ", " + county);
}
//User Interface
$(document).ready(function(event) {

  $("form#custom-pizza").submit(function(event) {
    event.preventDefault();
    var customSize = $("select#size").val();
    var crust = $("select#crust").val();
    var toppings = $("select#toppings").val();
    var pizzaDetails = (customSize + " - " + crust + ", " + toppings + ");
    var newPizzaOrder = new Order(customSize,);
    newPizzaOrder.pizzaCost();
    totalPriceArray.push(newPizzaOrder.pizzaPrice);
    $("#pizza-details-dropdown").show();
    $("#final-cost").text(newPizzaOrder.finalCost());
    $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
    $("#size, #crust, #toppings, #number").val("");
  });
  $("#pizza-details-dropdown").click(function() {
    $("#pizza-details").toggle();
  });
///Checkout Btn
  $("#checkout-btn").click(function() {
    location.reload();
  });
  $("#delivery-btn").click(function() {
    $("#address").show();
  });
    $("form#address-form").submit(function(event) {
    event.preventDefault();
    var streetAddress = $("input#street-add").val();
    var city = $("input#city-add").val();
    var county = $("select#county-select").val();
    var newAddress = new Address(streetAddress, city, county)
    $("#order-content").show();
    $("#landing-content").hide();
    $("#delivery-option").text("DELIVER TO: " + newAddress.deliveryAddress);
  });
});
