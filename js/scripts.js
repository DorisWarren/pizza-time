function PizzaOrder() {
  this.pizzas = [];
  this.pizzaCost - [];
}

OrderTotal.protoype.addPizzaToOrder = function(pizza) {
  this.pizzaCost = pizza.toppingCost(pizza);
  this.pizzas.push(pizza);
}

function Pizza (toppings,size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.pizzaToppingCost = function(toppingsCostArray) {
  this.toppingCost = toppingTotal;
  var toppingTotal = 0;
  for (var i = 0; i < toppingsCostArray.length; i++) {
    toppingTotal += toppingsCostArray[i];
}
  return toppingTotal + this.size;
}

//user logic

$(document).ready(function) {
$("orderForm").submit(function(event){
  event.preventDefault();

var toppingsInputCostsArray = [];
$("input:;checkbox[name=topping]:checked").each(function() {
  var toppingsInputCost =
})
});
