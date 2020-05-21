var div = document.querySelector('.result');
div.innerHTML = "<h4>coucou depuis le JS : </h4><br/>";
div.innerHTML += "What is your name?<br/>";
console.log("coucou depuis la console");
let name = prompt("What is your name?");

div.innerHTML += "Hello ";
div.innerHTML += name+"<br/>";

alert("Hello, " + name);

console.log("Hello, " + name);



