console.log("Chapter-7 has started!!");

// making string
var a = 'hello';
var b = "hello";
var c = `hello`;

console.log("%s %s %s", a,b,c);

c = `Hello this is java's framework , name as spring`;
console.log(c);

var int = String(32);
var float = String(100.90);
var bool = String(true);
var Null = String(null);

console.log("%s %s %s %s", int, float, bool, Null);

int = (32).toString();
float = (100.92).toString();
bool = (false).toString();
// Null = (null).toString(); // error

console.log("%s %s %s", int, float, bool);

console.log("String from character code: ", String.fromCharCode(83,72,79,72,65,71)); // SHOHAG

console.log("Concat: ", "a".concat("b"));
console.log("Concat all: ", 1+3.45+"JavaScript"+true);

// using backtick ` `
var place = `World`;
var greet = `Hello ${place}`;
console.log(greet);

// comparing string : lexicographically

function compare_lexi (a,b) {
    if(a === b) {
        return 0;
    }if(a < b) {
        return -1;
    }return 1;
}

var string_a = "Hello";
var string_b = "World";

var value = compare_lexi(string_a, string_b);
console.log("value of lexicography: ", value);

// we can use build in function to avoid this check up

console.log("comparing lexicograph: ", string_a.localeCompare(string_b));

var arr = ['c','b','a'];
arr.sort();
console.log(arr);

var left = "      abc";
var right = "abc      ";

console.log(left.trimStart());
console.log(right.trimEnd());

// indexOf and include

var myString = "Hello, World";
console.log(myString.indexOf('o'));
console.log(myString.indexOf('World'));
console.log(myString.includes('Hello'));
console.log(myString.includes('football'));

console.log("harr dee harr dee harr".indexOf("dee", 10));
