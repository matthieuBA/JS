
let fact = prompt("which factorial?");
function Factoriel(n) {
  return n > 1?n * Factoriel(n-1):1;
}
alert("the result is : " + Factoriel(fact));