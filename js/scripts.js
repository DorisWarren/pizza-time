
function PizzaOrder() {
  this.pizzas = [];
  this.pizzaCost = [];
}

PizzaOrder.protoype.addPizzaToOrder = function(pizza) {
  this.pizzaCost = pizza.toppingCost(pizza);
  this.pizzas.push(pizza);
}

function Pizza (toppings,size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.totalPizzaCost = function(toppingsCostArray) {
  this.toppingCost = toppingTotal;
  var toppingTotal = 0;
  for (var i = 0; i < toppingsCostArray.length; i++) {
    toppingTotal += toppingsCostArray[i];
 }
  return toppingTotal + this.size;
 }

// pizza.prototype.pizzaSizeCost = functions(size) {
//   this.sizeCost += this.size;
//   return this.sizeCost;
// }
//
// pizza.prototype.totalPizzaCost = function() {
//   this.pizzaCost = this.toppingCost = this.sizeCost;
//   return this.pizzaCost;
// }
//user logic
$(document).ready(function(){
$("#orderForm").submit(function(event){
    event.preventDefault();

var toppingsInputCostArray = [];
$("input:checkbox[name=topping]:checked").each(function(){
  var toppingInputCost = parseInt($(this).val());
  toppingsInputCostArray.push(toppingInputCost);
});
console.log(toppingsInputCostArray);

var toppingsInputNameArray = [];
$("input:checkbox[name=topping]:checked").each(function(){
  var toppingInputName = $(this).val();
  toppingsInputNameArray.push(toppingInputName);
});

var pizzaSize = parseInt($("#pizzaSize").val());
console.log(pizzaSize);

var newPizza = newPizza(toppingsInputNameArray,pizzaSize);
console.log(newPizza);

var pizzaTotalCost = newPizza.totalPizzaCost(toppingsInputCostArray,pizzaSize);
console.long(pizzaTotalCost);

$("#insertCost").text(pizzaTotalCost);
$(".orderResults").show();
});

});
