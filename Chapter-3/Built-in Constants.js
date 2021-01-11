console.log("Chapter-3 has started!!");

var my_obj = {
    name:null
};


console.log(my_obj.name);

// NaN = not a number : This property indicates that a value is not a legal number.
console.log(isNaN(1)); // false
console.log(isNaN(false)); // false : converts false to 0
console.log(isNaN("Shohag")); // true
console.log(isNaN(5.6781)); // false
console.log(isNaN("10$")); // true
console.log(isNaN(undefined)); // true : converted to NaN
console.log(isNaN(null)); // false : converted to 0, which is a value
console.log(isNaN(function(){})); // true : conversion fails
console.log(isNaN({})); // true : conversion fails
console.log(isNaN([1,2])); // true : converted to "1, 2", which can't be converted to a number

/* This last one is a bit tricky: checking if an Array is NaN . To do this, the Number() constructor first converts the array, 
to a string, then to a number; this is the reason why isNaN([]) and isNaN([34]) both return false , but isNaN([1,
    2]) and isNaN([true]) both return true : because they get converted to "" , "34" , "1,2" and "true" respectively. In
    general, an array is considered NaN by isNaN() unless it only holds one element whose string representation
    can be converted to a valid number.
*/


// section:3.4 : undefined and null

// undefined....

function isUndefined(a) {
    console.log("Checking undefined.....");
    console.log(a===undefined);
}



var a;
isUndefined(a);

a = 5;
isUndefined(a);

a = {
    name:"shohag"
};

isUndefined(a.age);

function foo() {
    return ;
}

isUndefined(foo());

// Section 3.5: Infinity and -Infinity
// Infinity > 123192310293; // true
// -Infinity < -123192310293; // true

console.log("Positive Infinity: ", Number.POSITIVE_INFINITY);
console.log("Negative Infinity: ", Number.NEGATIVE_INFINITY);

// Section 3.6: Number constants
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);
console.log(Number.isInteger(1.2));
console.log(Number.NaN);

// Section 3.7: Operations that return NaN

var string_minus = "cde" - "e";
console.log("String value after minus char: ", string_minus);

// Section 3.8: Math library functions that return NaN

console.log("math: ", Math.floor("a"));
console.log("math: ", Math.sqrt(-1));