var div = document.querySelector('.result');
div.innerHTML = "<h4>BOOKS : </h4><br/>";
let out_msg = '';
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
div.innerHTML += "<h4>Rented Books : </h4>";+"<br/><br/>";
out_msg = "Rented books : "+"\n\n";
let rented_books = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].rented >0 ) {
      rented_books.push(books[i]);
      div.innerHTML += books[i].title+"<br/>";
      div.innerHTML += books[i].id+"<br/>";
      div.innerHTML += books[i].rented+"<br/><br/><br/>";
      out_msg += books[i].title+"\n";
      out_msg += books[i].id+"\n";
      out_msg += books[i].rented+"\n\n";

    }
}
console.log(rented_books);
alert(out_msg);


Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}

div.innerHTML += "<h4>max Rented Books : </h4>";+"<br/><br/>";
out_msg = "max Rented books : "+"\n\n";
let maxi_rented_books = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].rented == Math.max.apply(Math, books.map(function(maxi) { return maxi.rented; }))) {
      maxi_rented_books.push(books[i]);
      div.innerHTML += books[i].title+"<br/>";
      div.innerHTML += books[i].id+"<br/>";
      div.innerHTML += books[i].rented+"<br/><br/><br/>";
      out_msg += books[i].title+"\n";
      out_msg += books[i].id+"\n";
      out_msg += books[i].rented+"\n\n";
    }
}
console.log(maxi_rented_books)
alert(out_msg)



div.innerHTML += "<h4>min Rented Books : </h4>";+"<br/><br/>";
out_msg = "min Rented books : "+"\n\n";
let mini_rented_books = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].rented == Math.min.apply(Math, books.map(function(mini) { return mini.rented; }))) {
      mini_rented_books.push(books[i]);
      div.innerHTML += books[i].title+"<br/>";
      div.innerHTML += books[i].id+"<br/>";
      div.innerHTML += books[i].rented+"<br/><br/><br/>";
      out_msg += books[i].title+"\n";
      out_msg += books[i].id+"\n";
      out_msg += books[i].rented+"\n\n";
    }
}
console.log(mini_rented_books)
alert(out_msg)



div.innerHTML += "<h4>Books with id 873495 : </h4>";+"<br/><br/>";
out_msg = "Books with id 873495 : "+"\n\n";
let find_id_books = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].id == 873495 ) {
      find_id_books.push(books[i]);
      div.innerHTML += books[i].title+"<br/>";
      div.innerHTML += books[i].id+"<br/>";
      div.innerHTML += books[i].rented+"<br/><br/><br/>";
      out_msg += books[i].title+"\n";
      out_msg += books[i].id+"\n";
      out_msg += books[i].rented+"\n\n";
    }
}
console.log(find_id_books);
alert(out_msg);


div.innerHTML += "<h4>Books without id 133712 : </h4>";+"<br/><br/>";
out_msg = "Books without id 133712 : "+"\n\n";
let remove_id_books = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].id != 133712 ) {
      remove_id_books.push(books[i]);
      div.innerHTML += books[i].title+"<br/>";
      div.innerHTML += books[i].id+"<br/>";
      div.innerHTML += books[i].rented+"<br/><br/><br/>";
      out_msg += books[i].title+"\n";
      out_msg += books[i].id+"\n";
      out_msg += books[i].rented+"\n\n";
    }
}
console.log(remove_id_books);
alert(out_msg);


div.innerHTML += "<h4>Books sorted without id 133712 : </h4>";+"<br/><br/>";
out_msg = "Books sorted without id 133712 : "+"\n\n";
let sorted_remove_id_books = remove_id_books.sortBy('title');
for (let i = 0; i < sorted_remove_id_books.length; i++) {
    div.innerHTML += sorted_remove_id_books[i].title+"<br/>";
    div.innerHTML += sorted_remove_id_books[i].id+"<br/>";
    div.innerHTML += sorted_remove_id_books[i].rented+"<br/><br/><br/>";
    out_msg += sorted_remove_id_books[i].title+"\n";
    out_msg += sorted_remove_id_books[i].id+"\n";
    out_msg += sorted_remove_id_books[i].rented+"\n\n";
  
}
console.log(remove_id_books.sortBy('title'));
alert(out_msg);
