window.onload = showValues;

function showValues(){
  var veg = document.getElementById("checkVeggies");
  //
  var name = document.getElementById("orderName");
  //
  console.log("Finished running JavaScript");
  console.log(name.value);

}
function getCustomerName(){
  var name = document.getElementById("orderName");

  var veg = document.getElementById("checkVeggies").checked;
  var pep = document.getElementById("checkPep").checked;
  var sasuage = document.getElementById("checkSasuage").checked;

  if(veg==true){
    console.log("You got a veggie pizza");
  }
  else if(veg==true&&pep==true&&sasuage==true){
    console.log("You got a supreme pizza")
  }
  console.log("Order received by " + name.value);
}
