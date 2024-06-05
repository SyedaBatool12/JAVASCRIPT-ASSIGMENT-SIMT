

 // 1. Welcome message based on city name
var userInput = prompt("Enter Your City Name");

if (userInput === "Karachi") {
    document.write("Welcome to city of lights");
}

// 2. Greeting based on gender
var gender = prompt("Enter Your Gender Here");

if (gender === "male") {
    document.write("Good Morning Sir");
}
if (gender === "female") {
    document.write("Good Morning Mam");
}

// 3. Traffic signal information table
var userInput1 = prompt("Enter traffic signal color 1");
var userInput2 = prompt("Enter traffic signal color 2");
var userInput3 = prompt("Enter traffic signal color 3");

document.write("<table border='1px'>" + 
    "<tr><th>Signal Color</th><th>Message</th></tr>" +
    "<tr><td>" + userInput1 + "</td><td>Must Stop</td></tr>" +
    "<tr><td>" + userInput2 + "</td><td>Ready to move</td></tr>" +
    "<tr><td>" + userInput3 + "</td><td>Move now</td></tr>" +
    "</table>");

// 4. Prompt to refill car fuel
var carFuel = prompt("Please enter remaining car fuel in liters");

if (carFuel === "0.25liters") {
    alert("Please refill the fuel in your car");
}

// 5. Conditions and their evaluations
var a = 4;
if (++a === 5) {
    alert("Given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("Given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("Condition 1 is true");
}
if (c === 13) {
    alert("Condition 2 is true");
}
if (++c < 14) {
    alert("Condition 3 is true");
}
if (c === 14) {
    alert("Condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("Car is smaller than cat");
}

// 6. Student marks and grade evaluation
var obtainedMark1 = +prompt("Obtained Mark in Subject 1");
var obtainedMark2 = +prompt("Obtained Mark in Subject 2");
var obtainedMark3 = +prompt("Obtained Mark in Subject 3");
var totalMarkObtained = obtainedMark1 + obtainedMark2 + obtainedMark3;
var percentage = (totalMarkObtained / 300) * 100;

document.write("<br><br>");
if (percentage >= 80) {
    document.write("Total marks : 300" + "<br>" + "Mark Obtained : " + totalMarkObtained + "<br>" + "Percentage : " + percentage.toFixed(2) + "%" + "<br>" + "Grade : A-one" + "<br>" + "Remarks : Excellent");
} else if (percentage >= 70) {
    document.write("Total marks : 300" + "<br>" + "Mark Obtained : " + totalMarkObtained + "<br>" + "Percentage : " + percentage.toFixed(2) + "%" + "<br>" + "Grade : A" + "<br>" + "Remarks : Good");
} else if (percentage >= 60) {
    document.write("Total marks : 300" + "<br>" + "Mark Obtained : " + totalMarkObtained + "<br>" + "Percentage : " + percentage.toFixed(2) + "%" + "<br>" + "Grade : B" + "<br>" + "Remarks : You need to improve");
} else {
    document.write("Total marks : 300" + "<br>" + "Mark Obtained : " + totalMarkObtained + "<br>" + "Percentage : " + percentage.toFixed(2) + "%" + "<br>" + "Grade : Fail" + "<br>" + "Remarks : Sorry");
}

// 7. Number guessing game
var num = 6;
var guess = +prompt("Please Guess Any Number");

if (num === guess) {
    document.write("<br><br>Bingo! Correct answer");
}
if (num === guess + 1 || num === guess - 1) {
    document.write("<br>Close enough to the correct answer");
}

// 8. Check if number is divisible by 3
var numToCheck = +prompt("Enter any number");

if (numToCheck % 3 === 0) {
    document.write("<br><br>The number is divisible by 3");
} else {
    document.write("<br>The number is not divisible by 3");
}

// 9. Check if number is even or odd
var userInput = +prompt("Enter a number");

if (userInput % 2 === 0) {
    document.write("<br><br>Number is Even");
} else {
    document.write("<br>Number is Odd");
}

// 10. Temperature check
var inputTemp = +prompt("Enter a temperature");

if (inputTemp > 40) {
    document.write("<br><br>It is too hot outside");
} else if (inputTemp > 30) {
    document.write("<br>The Weather today is Normal");
} else if (inputTemp > 20) {
    document.write("<br>Today’s Weather is cool");
} else {
    document.write("<br>OMG! Today's weather is cool");
}

// 11. Simple calculator
var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");
var operation = prompt("Enter the operation (+, -, *, /, %)");

var result;
switch (operation) {
    case "+":
        result = num1 + num2;
        document.write("<br><br>Addition is: " + result);
        break;
    case "-":
        result = num1 - num2;
        document.write("<br>Subtraction is: " + result);
        break;
    case "*":
        result = num1 * num2;
        document.write("<br>Multiplication is: " + result);
        break;
    case "/":
        result = num1 / num2;
        document.write("<br>Division is: " + result);
        break;
    case "%":
        result = num1 % num2;
        document.write("<br>Modulus is: " + result);
        break;
    default:
        document.write("<br>Invalid operation");
}
