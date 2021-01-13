console.log("Chapter-6 has started!!");

// Section 6.1: typeof

console.log(typeof(1));
console.log(typeof(1.2));
console.log(typeof('C'));
console.log(typeof("Java"));
console.log(typeof(Date(2011,01,01)));
console.log(typeof(true));
console.log(typeof({}));
console.log(typeof([]));
console.log(typeof(null));
console.log(typeof(Error));

var a;
console.log(typeof(a));
console.log(typeof(function(){}));

// Section 6.2: Finding an object's class : using instanceOf

class Car {
    constructor(name, wheel, color) {
        this.name = name;
        this.wheel = wheel;
        this.color = color;
    }
}

const car1 = new Car("BMW", 4, "White");

console.log("Car name: ", car1.name);
console.log("Car wheel: ", car1.wheel);
console.log("Car color: ", car1.color);

console.log(car1 instanceof Car ? "YES" : "NO"); // yes
console.log(car1 instanceof Object ? "YES" : "NO"); // yes

//  Note that primitive values are not considered instances of any class:
console.log(2 instanceof Number); // false
console.log('abc' instanceof String); // false
console.log(true instanceof Boolean); // false
console.log(Symbol() instanceof Symbol); // false