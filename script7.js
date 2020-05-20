let question = prompt("what do you want to say to the acné bot ??");
var msg=''
if (question.slice(-1) === '?') {
  var msg='Ouais ouais';
}
else if(question.toUpperCase() === question) {
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

console.log(msg);
alert(msg);
