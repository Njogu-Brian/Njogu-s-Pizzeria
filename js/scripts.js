var totalPriceArray = [];
function Order (customize, cheese) {
  this.customize=customize
  this.crust = 100;
  this.toppings = 150;
  this.flavor = 200;
  this.pizzaPrice = 0;
  this.drinks = 100;
}
Order.prototype.pizzaCost = function () {
  if (this.customSize === "Small 10.") {
    this.pizzaPrice += 500;
  } else if (this.customSize === "Medium 14.") {
    this.pizzaPrice += 700;
  } else if (this.customSize === "Large.") {
    this.pizzaPrice += 950;
  } else if (this.customSize) === "Jumbo.") {
    this.pizzaPrice +=1400
  }
  this.pizzaPrice += this.crust;
  this.pizzaPrice += this.toppings;
  this.pizzaPrice += this.flavor;
  this.pizzaPrice += this.drinks
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
    var flavor = $("select#flavor").val();
    var pizzaDetails = (customSize + " - " + crust + ", " + cheese + ", " + toppings + ", "  + flavor);
    var newPizzaOrder = new Order(customSize, cheese);
    newPizzaOrder.pizzaCost();
    totalPriceArray.push(newPizzaOrder.pizzaPrice);
    $("#pizza-details-dropdown").show();
    $("#final-cost").text(newPizzaOrder.finalCost());
    $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
    $("#size, #crust, #cheese, #toppings, #flavor").val("");
  });