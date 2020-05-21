var div = document.querySelector('.result');
div.innerHTML = "<h4>FACTORIAL : </h4><br/>";
let fact = prompt("which factorial?");
function Factoriel(n) {
  return n > 1?n * Factoriel(n-1):1;
}

console.log("the result is : " + Factoriel(fact));
div.innerHTML += "voila le factiriel de "+fact+": "+"<br/>";
div.innerHTML += Factoriel(fact);
alert("the result is : " + Factoriel(fact));
