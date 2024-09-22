// 1. Current Date Function
function currentDate() {
    var date = new Date();
    return date;
}
document.write(currentDate());

// 2. Full Name Function
function fullName(fName, lName) {
    var fullName = fName + " " + lName;
    return fullName;
}
var a = prompt("Please enter first name");
var b = prompt("Please enter last name");
document.write("Hi " + fullName(a, b));

// 3. Addition Function
function addition(a, b) {
    var sum = a + b;
    return sum;
}
var num1 = +prompt("Enter a first Number");
var num2 = +prompt("Enter a second Number");
document.write(addition(num1, num2));

// 4. Calculator Function
function calculator(num1, operator, num2) {
    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else if (operator == "*") {
        return num1 * num2;
    } else if (operator == "/") {
        return num1 / num2; // Corrected division operator
    } else if (operator == "%") {
        return num1 % num2; // Added modulus operator
    } else {
        return "Invalid Operator";
    }
}
var a = +prompt("Enter a first Number");
var b = prompt("Enter an Operator (+, -, /, *, %)");
var c = +prompt("Enter a second Number");
document.write(calculator(a, b, c));

// 5. Square Function
function square(number) {
    var num = number * number;
    return num;
}
var result = +prompt("Enter a number");
document.write(square(result));

// 6. Counting Function
function counting(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
var a = +prompt("Enter a starting number");
var b = +prompt("Enter an ending number");
counting(a, b);

// 8. Hypotenuse Calculation (Fixing the logic for nested function)
function calculateHypotenuse(base, perpend) {
    function calculateSquare(Base, Perpend) {
        return Base * Base + Perpend * Perpend;
    }
    var sumOfSquares = calculateSquare(base, perpend);
    return Math.sqrt(sumOfSquares); // Return the hypotenuse
}
var a = +prompt("Enter the base of the triangle");
var b = +prompt("Enter the perpendicular of the triangle");
document.write(calculateHypotenuse(a, b));

// 9. Area of Rectangle
// i. Function that accepts parameters
function areaOfRectangle(width, height) {
    return width * height;
}
var a = +prompt("Enter the width of a rectangle");
var b = +prompt("Enter the height of a rectangle");
document.write(areaOfRectangle(a, b));

// ii. Predefined Parameters
function area(a, b) {
    return a * b;
}
document.write(area(2, 4));

// 10. Palindrome Check
function isPalindrome(str) {
    str = str.toLowerCase(); // Ensure case doesn't affect results
    var reversed = str.split('').reverse().join(''); // Reverse the string
    if (str === reversed) {
        alert("It is a palindrome word");
    } else {
        alert("It is not a palindrome");
    }
}
var string = prompt("Enter a palindrome word");
isPalindrome(string);

// 11. Uppercase After Space
function upperCase(str) {
    var index = str.indexOf(" "); // Find the index of the first space
    if (index !== -1 && index + 1 < str.length) {
        // Convert the character after the space to uppercase
        str = str.slice(0, index + 1) + str.charAt(index + 1).toUpperCase() + str.slice(index + 2);
    }
    return str;
}
var str = prompt("Enter a string");
document.write(upperCase(str));
