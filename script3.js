var div = document.querySelector('.result');
div.innerHTML = "<h4>PYRAMID : </h4><br/>";
function isNumber(value) {
  var numberPattern = /^[0-9]+$/; // one or more of digits 0 to 9
  return numberPattern.test(value);
}

do {
  stage = prompt("How many stages for your pyramid ? ");
} while(!isNumber(stage));
let out=''
let out1=''
let out2=''
"use strict";
console.stdlog = console.log.bind(console);
console.logs = [];
console.log = function(){
    console.logs.push(Array.from(arguments));
    console.stdlog.apply(console, arguments);
}

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}
var div = document.querySelector('.result');
// document.body.style.fontFamily = "courier";

function createHalfPyramid (height) {
  for (var i = 1; i <= height; i++) {
    var row = '';
    var rowh = '';
    var rowp = '';
    for (var j = 1; j <= (height - i); j++) {
      row += ' ';
      rowh += '\xa0';
      rowp += ' ';
    }
    for (var k = 1; k <= i; k++) {
      row += '*';
      rowh += '*';
      rowp += '!';
    }
    console.log(row);

    out += row+"\n";
    out1 += rowh+"<br/>";
    out2 += rowp+"\n";

  }
  // div.innerHTML += "#".repeat(row.length)+row+"<br/>";
  // div.innerHTML = console.logs;
  var str = console.logs.join();
  var res = replaceAll(str,',','<br/>');
  var res1 = replaceAll(str,',','\n');
  // console.log(out1);

  div.innerHTML += "Voila ta magnifique pyramide"+"<br/>";
  div.innerHTML += out1;
  alert(out2);



}

createHalfPyramid(stage);