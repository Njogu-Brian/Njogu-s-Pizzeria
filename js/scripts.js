
$(".deliver").click(function () {
  prompt("Enter your name")
  alert("Delivery cost is ksh200") 
});
function sum(){
    var name = prompt("Entre your location");
    input = prompt("Do you want it delivered ?")
    if (input === null ) {
      return alert("Would you like to change the oder ?.") ; 
    }
    var x =parseInt(document.getElementById("size").value);
    var y =parseInt(document.getElementById("crust").value);
    var z =parseInt(document.getElementById("topping").value);
    var w =parseInt(document.getElementById("no.").value);
    var sum = (x + y + z)*w;
    alert("Your total amout is " + sum); 
    alert("Thank you for shopping with us the delivary fee is 200 to your location in " + name + " the pleasure is ours")
  }
  