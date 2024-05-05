// let myNumberExOne: number = 50;
// let myStringExOne: string = "Hello, Alisha";
// console.log("My Number Is:", myNumberExOne);
// console.log("My String Is:", myStringExOne);
// let myNumberExTwo: number;
// let myStringExTwo: string;
// myNumberExTwo = 10;
// myStringExTwo = "Hello, Alisha";
// console.log("My Number Is:", myNumberExTwo);
// console.log("My String Is:", myStringExTwo);
// let greeting = "Hello, Alisha!";
// console.log(greeting);
// let greeting = "Hello, Alisha!";
// console.log(greeting);
// let personExOne: {
//     name: string;
//     age: number;
//     jobTitle?: string;
//     address: {
//       street: string;
//       city: string;
//     };
//   };
//   personExOne = {
//     name: "Alisha",
//     age: 20,
//     jobTitle: "AI Engineer",
//     address: {
//       street: "101 Main St",
//       city: "Karachi",
//     },
//   };
//   let personExTwo: {
//     name: string;
//     age: number;
//     jobTitle?: string;
//     address: {
//       street: string;
//       city: string;
//     };
//   } = {
//     name: "Alisha",
//     age: 20,
//     jobTitle: "AI Engineer",
//     address: {
//       street: "101 Main St",
//       city: "karachi",
//     },
//   };
//   function calculateRectangleArea(lengthRectAngle: number, widthOfRectAngle: number): number {
//     return lengthRectAngle * widthOfRectAngle;
//   }
//   const lengthRectAngle = 10;
//   const widthOfRectAngle = 5;
//   const area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);
//   console.log(`The area of the rectangle is: ${area}`);
//   function greetOptional(name: string, age?: number) {
//     if (age !== undefined) {
//       console.log(`Hello, ${name}! You are ${age} years old.`);
//     } else {
//       console.log(`Hello, ${name}!`);
//     }
//   }
//   greetOptional("Alisha"); 
//   greetOptional("Tania", 20); 
//   function greetDefault(name: string, age: number = 10) {
//     console.log(`Hello, ${name}! You are ${age} years old.`);
//   }
//   greetDefault("Alisha");
//   greetDefault("Tania", 20); 
//   function addAll(...nums: number[]): number {
//     let result = 0;
//     for (let i = 0; i < nums.length; i++) {
//       result += nums[i];
//     }
//     return result;
//   }
//   console.log(addAll(10, 20, 30, 40, 50.5, +true)); 
//   const addWithArrow = (num1: number, num2: number): number => num1 + num2;
// console.log(addWithArrow(30, 40));
// const add = function (num1: number, num2: number): number {
//     return num1 + num2;
//   };
//   console.log(add(30, 40));
//   function greet(name: string): void {
//     console.log(`Hello, ${name}!`);
//   }
//   function noReturnValue(): void {
//   }
//   function throwError(message: string): never {
//     throw new Error(message);
//   }
//   function infiniteLoop(): never {
//     while (true) {
//     }
//   }