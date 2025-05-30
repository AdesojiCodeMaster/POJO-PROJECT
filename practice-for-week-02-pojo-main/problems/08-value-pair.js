/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  // Your code here
  let valuesArray = [];
  for(let key1 in obj1){
    for(let key2 in obj2){
   if(key1 === key && key2 === key){
     valuesArray.push(obj1[key1], obj2[key2]);
   }
    }
  }
  return valuesArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
