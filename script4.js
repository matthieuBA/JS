
var div = document.querySelector('.result');
div.innerHTML = "<h4>ENTREPRENEURS : </h4><br/>";
let out_msg = '';
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let seventies = [];
div.innerHTML += "<h4>Voila les entrepreneurs des années 70</h4>";+"<br/><br/>";
out_msg = "Voila les entrepreneurs des années 70"+"\n\n";
for (let i = 0; i < entrepreneurs.length; i++) {
  
    if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980) {
      seventies.push(entrepreneurs[i]);
      div.innerHTML += entrepreneurs[i].first+"<br/>";
      div.innerHTML += entrepreneurs[i].last+"<br/>";
      div.innerHTML += entrepreneurs[i].year+"<br/><br/><br/>";
      out_msg += entrepreneurs[i].first+"\n";
      out_msg += entrepreneurs[i].last+"\n";
      out_msg += entrepreneurs[i].year+"\n\n";
    }
}

console.log(seventies);
alert(out_msg);

let names = [];
div.innerHTML += "<h4>Voila les noms des entrepreneurs</h4>"+"<br/><br/>";
out_msg = "Voila les noms des entrepreneurs"+"\n\n";
for (let i = 0; i < entrepreneurs.length; i++) {

  names.push(entrepreneurs[i].first);
  names.push(entrepreneurs[i].last);
  div.innerHTML += entrepreneurs[i].first+"<br/>";
  div.innerHTML += entrepreneurs[i].last+"<br/><br/><br/>";
  out_msg += entrepreneurs[i].first+"\n";
  out_msg += entrepreneurs[i].last+"\n\n";

}

console.log(names);
alert(out_msg);


let ages = [];
div.innerHTML += "<h4>Voila les entrepreneurs par ages</h4>"+"<br/><br/>";
out_msg = "Voila les entrepreneurs par ages"+"\n\n";
for (let i = 0; i < entrepreneurs.length; i++) {
  ages.push(entrepreneurs[i].first);
  ages.push(entrepreneurs[i].last);
  ages.push(2020-entrepreneurs[i].year);
  div.innerHTML += entrepreneurs[i].first+"<br/>";
  div.innerHTML += entrepreneurs[i].last+"<br/>";
  div.innerHTML += 2020-entrepreneurs[i].year+"<br/><br/><br/>";
  out_msg += entrepreneurs[i].first+"\n";
  out_msg += entrepreneurs[i].last+"\n";
  out_msg += 2020-entrepreneurs[i].year+"\n\n";

  

}

console.log(ages);
alert(out_msg);


Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}

var sorted_entrepreneurs =entrepreneurs.sortBy('first')
console.log(sorted_entrepreneurs);



div.innerHTML += "<h4>Voila les entrepreneurs triés par noms</h4>"+"<br/>";
out_msg = "<h4>Voila les entrepreneurs triés par noms : </h4>"+"\n\n";
for (let i = 0; i < entrepreneurs.length; i++) {
  div.innerHTML += sorted_entrepreneurs[i].first+"<br/>";
  div.innerHTML += sorted_entrepreneurs[i].last+"<br/>";
  div.innerHTML += sorted_entrepreneurs[i].year+"<br/><br/>";
  out_msg += sorted_entrepreneurs[i].first+"\n";
  out_msg += sorted_entrepreneurs[i].last+"\n";
  out_msg += sorted_entrepreneurs[i].year+"\n\n";
}
alert(out_msg);
