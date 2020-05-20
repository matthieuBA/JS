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
for (let i = 0; i < entrepreneurs.length; i++) {
    if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980) {
      seventies.push(entrepreneurs[i]);
    }
}
console.log(seventies);

let names = [];
for (let i = 0; i < entrepreneurs.length; i++) {

  names.push(entrepreneurs[i].first);
  names.push(entrepreneurs[i].last);
}
console.log(names);


let ages = [];
for (let i = 0; i < entrepreneurs.length; i++) {
  ages.push(entrepreneurs[i].first);
  ages.push(entrepreneurs[i].last);
  ages.push(2020-entrepreneurs[i].year);

}
console.log(ages);

// var sortedObjs = _.sortBy( entrepreneurs, 'first' );

// console.log(sortedObjs); 

Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}

console.log(entrepreneurs.sortBy('first'));

