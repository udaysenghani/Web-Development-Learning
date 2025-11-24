let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length); //4
console.log(fruits.toString());  //Banana,Orange,Apple,Mango
console.log(fruits.at(2));  //Apple
console.log(fruits[2]); // Apple
console.log( fruits.join(" * ")); //Banana * Orange * Apple * Mango

fruits.pop(); //removes the last element from an array:
fruits.push("Kiwi"); //adds a new element to an array (at the end)
fruits.unshift("Lemon"); //adds a new element to an array (at the beginning), and "unshifts" older elements

//Changing Elements 
fruits[0] = "Kiwi"; //[0] is the first array element

//concat() method creates a new array by merging (concatenating) existing arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

//Merging Three Arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);

