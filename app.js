var myNumberExOne = 50;
var myStringExOne = "Hello, Alisha";
console.log("My Number Is:", myNumberExOne);
console.log("My String Is:", myStringExOne);
var myNumberExTwo;
var myStringExTwo;
myNumberExTwo = 10;
myStringExTwo = "Hello, Alisha";
console.log("My Number Is:", myNumberExTwo);
console.log("My String Is:", myStringExTwo);
var greeting = "Hello, Alisha!";
console.log(greeting);
var greeting = "Hello, Alisha!";
console.log(greeting);
var personExOne;
personExOne = {
    name: "Alisha",
    age: 20,
    jobTitle: "AI Engineer",
    address: {
        street: "101 Main St",
        city: "Karachi",
    },
};
var personExTwo = {
    name: "Alisha",
    age: 20,
    jobTitle: "AI Engineer",
    address: {
        street: "101 Main St",
        city: "karachi",
    },
};
function calculateRectangleArea(lengthRectAngle, widthOfRectAngle) {
    return lengthRectAngle * widthOfRectAngle;
}
var lengthRectAngle = 10;
var widthOfRectAngle = 5;
var area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);
console.log("The area of the rectangle is: ".concat(area));
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
greetOptional("Alisha");
greetOptional("Tania", 20);
function greetDefault(name, age) {
    if (age === void 0) { age = 10; }
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
}
greetDefault("Alisha");
greetDefault("Tania", 20);
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(addAll(10, 20, 30, 40, 50.5, +true));
var addWithArrow = function (num1, num2) { return num1 + num2; };
console.log(addWithArrow(30, 40));
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(30, 40));
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
function noReturnValue() {
}
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
