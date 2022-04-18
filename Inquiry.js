//Very Easy

var a = 6;
var b = 2;
var sum = a -b;

console.log(sum);

//Easy

var name1 = "Laura";
var name2 = "Luna";

if(name1.length > name2.length) {
    console.log(`The name ${name1} is longer than ${name2} by one character`)
}
else {
    console.log(`${name2} is not as long`)
}

//Medium

let message = "Can you hear me?";

if(message === message.toLowerCase()) {
    console.log("No, you are whispering");
    alert()
}
else if(message === message.toUpperCase()) {
    console.log("Yes, you are YELLING");
    alert()
}
else {
    console.log("Yes, you are speaking normally");
    alert()
}

//Hard

var add = 4;
var add2 = 2;

total = add + add2;

console.log(total);


var subtract = 10;
var subtract2 = 5;

total = subtract - subtract2;

console.log(total);


var multiply = 10;
var multiply2 = 5;

total = multiply * multiply2;

console.log(total);


var divide = 10;
var divide2 = 5;

total = divide / divide2;

console.log(total);


//Very Hard

let x = prompt("Please enter your first number");
let op = prompt("choose an operator(+,-,/,*");
let y = prompt("Please enter your second number");

if (op == '+') {
    let calc = x + y
    alert(`${x} + ${y} = ${calc}`)
}
else if (op == '-') {
    let calc = x - y
    alert(`${x} - ${y} = ${calc}`)
}
else if (op == '/') {
    let calc = x / y
    alert(`${x} / ${y} = ${calc}`)
}
else if (op == '*') {
    let calc = x * y
    alert(`${x} * ${y} = ${calc}`)
}



























