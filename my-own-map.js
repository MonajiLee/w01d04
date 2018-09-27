
var words = ["ground", "control", "to", "major", "tom"];

// Yours will take in two arguments. The first will be an array to map and the second will 
// be a callback function. The function will return a new array based on the results of the 
// callback function.

function map(arr, cb){
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
        newArray.push(cb(arr[i]))
    } 
    console.log(newArray)
}



// The following are examples of how your map function can be called.

map(words, function(word) {
  return word.length;
});
// // [6, 7, 2, 5, 3]

map(words, function(word) {
  return word.toUpperCase();
});
// // [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

map(words, function(word) {
  return word.split('').reverse().join('');
});
// // [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]