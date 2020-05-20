let question = prompt("what do you want to say to the acné bot ??");
var msg='empty'
if (question.slice(-1) === '?') {
  res=1;
  var msg='Ouais ouais';
}
else if(question.toUpperCase() === question) {
  res=2;
  var msg='Pwa, calme-toi...';
}
else if(question.includes('fortnite')) {
  res=3;
  var msg='on se fait une partie soum-soum ?';
}
else if(question.length == 0) {
  res=4;
  var msg='tu es en PLS ?';
}
else  {
  var msg='BALEK';
}

console.log(msg);
alert(msg);

// switch (res) {

//   case res=1:
//     console.log('Ouais ouais');
//     alert('Ouais ouais');
//     break;
//   case res=2:
//     console.log('Pwa, calme-toi...');
//     alert('Pwa, calme-toi...');
//     break;
//   default:
//     console.log(`Sorry, we are out of ${res}.`);
// }