var div = document.querySelector('.result');
div.innerHTML = "<h4>ACNE BOT : </h4><br/>";
while (true){
let question = prompt("what do you want to say to the acné bot ??");
alert(question);
var msg='';
if (question.slice(-1) == '?') {
  var msg='Ouais ouais';
}
else if(question.toUpperCase() === question && question.length>0 && !(question.match(/^[0-9]+$/) != null) && (question.match(/^[a-z]+$/) != null)&& (question.match(/^[A-Z]+$/) != null)) {
  var msg='Pwa, calme-toi...';
}
else if(question.includes('fortnite')) {
  var msg='on se fait une partie soum-soum ?';
}
else if(question.length == 0) {
  var msg='tu es en PLS ?';
}
else  {
  var msg='BALEK';
}
div.innerHTML += "<h4>You say : "+question+" </h4>";+"<br/><br/>";
div.innerHTML += "<h4>Acné Bot say : "+msg+" </h4>";+"<br/><br/>";
console.log(msg);
alert(msg);
}
