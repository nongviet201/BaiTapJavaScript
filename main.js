console.log("hello world");

let name; //undefined
console.log(typeof name); 
let age;
name = 'nong viet'; // String
age = 20; // number
let status = true; //boolean

const PI = 3.14; // final

let message = "xin chào các bạn, mình tên là " + name + " tuổi " + age;

// template String
let message2 = `xin chào, mình tên là ${name}, mình hiện ${age} tuổi`;
console.log(message);
console.log(message2);

// Function 
// c1: Function declaration
function sum(a, b) {
    return a * b;
}

// c2: Function expression
let sum2 = function(a, b) {
    return a + b;
}

// c3: Arrow function 
let sum3 = (a, b) => {
    return a + b;
}

console.log(sum(4, "5"));
console.log(sum2(4, "5"));
console.log(sum3(4, typeof 5));

