console.log("Chapter-2 has started !!");

var value = 1;
//window.alert(value);

// Array
var numberArray = [1,2,3,4,5];
var charArray = ["Java", 'C', "Python"];
var randomArray = [1,"Spring", 5.667, 'A'];

console.log("Number_Array: ", numberArray);
console.log("Char_Array: ", charArray);
console.log("Random_Array: ", randomArray);

var positioned_value = randomArray[2];
console.log("Value at %d position of randomArray is: ", 2, positioned_value);

// Object
var my_obj = {
    name : "Md.Ashraful Islam",
    age : 25,
    gender : "male"
};

console.log("Name: ", my_obj.name);
console.log("Age: ", my_obj.age);
console.log("Gender: ", my_obj.gender);