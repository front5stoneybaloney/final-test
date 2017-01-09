"use strict"

// задача 1
var arr = [2, 5, 8, 4, 1, 12];
arr.sort(function(a, b){return a-b});



// задача 2
var text = "The quick brown fox jumps over the lazy dog";
var list = text.split(" ");

var filteredList = list.filter(function(item) {
   
  return item.length > 4;
});

console.log("filteredList:", filteredList);



// задача 3
var pgraph = document.createElement("P");
    var t = document.createTextNode("repetition is fun!");
    pgraph.appendChild(t);
    document.body.appendChild(pgraph);


// задача 4


// задача 5
document.cookie.indexOf('sessionKey')== -1

