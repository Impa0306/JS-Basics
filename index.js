//This is my fisrt JS code
console.log("Hello World!");

let myName = "Impa";
console.log(myName);

const myAge = 25;
// age = 26; //Throws TypeError: Assignment to constant variable.
console.log(myAge);

let name = "Jerry"; //String Literal
let age = 30; //Number Literal
let isApproved = true; //Boolean Literal
let firstName; //undefined - Bydefault - let firstName = undefined;
let selectedColor = null; //null

console.log(
  "Name :" +
    name +
    " Age :" +
    age +
    " isApproved :" +
    isApproved +
    " First Name :" +
    firstName +
    " Color Selected :" +
    selectedColor
);

let person = {
  name: "Doremon",
  age: 20,
}; //Object Literal
console.log(person);

//Accessing object
//1. Dot Notation
person.name = "Tom";
console.log(person.name);
//2. Bracket Notation
person["name"] = "Sinchan";
console.log(person.name);

let colors = ["red", "green", "blue", 3]; //Array Literal
console.log(colors);
console.log(colors[1]);
console.log(colors.length);

function greet(name) {
  console.log("Welcome to JavaScript " + name + "!!!");
}

greet(myName);

function square(number) {
  return number * number;
}

// let squareOfTwo = square(2);
// console.log(squareOfTwo);
console.log(square(2));
