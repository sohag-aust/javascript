var a = 5.2;

console.log("%f", a);

a = "AAAA";

console.log(a);

let b = 2;

console.log("value is: %d", b);

b = "shohag";

console.log("My name is: ", b , " age is 12");

const c = 3;

console.log(c);

//c = "java";

//console.log(c);

function changeValue() {
    document.getElementById("paragraph").innerHTML = "Hello JS";
}

var element = document.createElement("p"); //<p> </p>
element.innerHTML = "React JS"; // <p> React JS </p>
// document.getElementById("element").innerHTML = "ReactJS";
//var text = document.createTextNode("ReactJS");
// element.appendChild(text);
var div = document.getElementById("new");
div.appendChild(element);

alert('Shut down !?');

console.log("NOT");

var prompt_age = prompt("Enter your age ");
console.log("Entered age is: ", prompt_age);

var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;
var ctx = canvas.getContext('2d');
ctx.font = '30px Cursive';
ctx.fillText("Hello Corona", 50, 50);
document.body.appendChild(canvas);