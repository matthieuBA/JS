var div = document.querySelector('.result');
div.innerHTML = "<h4>FACTORIAL : </h4><br/>";



function Factoriel(n) {
  return n > 1?n * Factoriel(n-1):1;
}

function isNumber(value) {
  var numberPattern = /^[0-9]+$/; // one or more of digits 0 to 9
  return numberPattern.test(value);
}

do {
  fact = prompt("which factorial?");
} while(!isNumber(fact));

console.log("the result is : " + Factoriel(fact));
div.innerHTML += "voila le factiriel de "+fact+": "+"<br/>";
div.innerHTML += Factoriel(fact);
alert("the result is : " + Factoriel(fact));
