// 1. Power Function (a^b)
function power(a, b) {
    return Math.pow(a, b);
}
var a = +prompt("Enter base number");
var b = +prompt("Enter exponent");
document.write(a + " raised to " + b + " is: " + power(a, b) + "<br><br>");

// 2. Leap Year Function
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}
var year = +prompt("Enter a year");
document.write(year + " is " + (isLeapYear(year) ? "a leap year" : "not a leap year") + "<br><br>");

// 3. Area of Triangle Using Two Functions
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}
function calculateAreaOfTriangle(a, b, c) {
    var S = calculateS(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}
var a = +prompt("Enter side a of the triangle");
var b = +prompt("Enter side b of the triangle");
var c = +prompt("Enter side c of the triangle");
document.write("The area of the triangle is: " + calculateAreaOfTriangle(a, b, c) + "<br><br>");

// 4. Average and Percentage Calculation
function average(marks) {
    return marks.reduce((a, b) => a + b, 0) / marks.length;
}
function percentage(marks, totalMarks) {
    return (marks.reduce((a, b) => a + b, 0) / (totalMarks * marks.length)) * 100;
}
function mainFunction() {
    var marks = [];
    for (var i = 1; i <= 3; i++) {
        marks.push(+prompt("Enter marks for subject " + i));
    }
    var totalMarks = 100; // Assuming total marks for each subject is 100
    var avg = average(marks);
    var perc = percentage(marks, totalMarks);
    document.write("Average Marks: " + avg + "<br>");
    document.write("Percentage: " + perc + "%<br><br>");
}
mainFunction();

// 5. Custom indexOf Function
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
var string = prompt("Enter a string");
var char = prompt("Enter a character to search");
document.write("Character found at index: " + customIndexOf(string, char) + "<br><br>");

// 6. Remove Vowels Function
function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}
var sentence = prompt("Enter a sentence (max 25 characters)");
if (sentence.length > 25) {
    document.write("Sentence exceeds 25 characters<br><br>");
} else {
    document.write("After removing vowels: " + removeVowels(sentence) + "<br><br>");
}

// 7. Count Vowel Pairs Function
function countVowelPairs(sentence) {
    var count = 0;
    for (var i = 0; i < sentence.length - 1; i++) {
        var pair = sentence[i] + sentence[i + 1];
        if (/([aeiouAEIOU]{2})/.test(pair)) {
            count++;
        }
    }
    return count;
}
var sentence = prompt("Enter a sentence");
document.write("Number of vowel pairs: " + countVowelPairs(sentence) + "<br><br>");

// 8. Distance Conversion Functions
function toMeters(km) {
    return km * 1000;
}
function toFeet(km) {
    return km * 3280.84;
}
function toInches(km) {
    return km * 39370.1;
}
function toCentimeters(km) {
    return km * 100000;
}
var distanceKm = +prompt("Enter distance between two cities in kilometers");
document.write("Distance in meters: " + toMeters(distanceKm) + " meters<br>");
document.write("Distance in feet: " + toFeet(distanceKm) + " feet<br>");
document.write("Distance in inches: " + toInches(distanceKm) + " inches<br>");
document.write("Distance in centimeters: " + toCentimeters(distanceKm) + " cm<br><br>");

// 9. Overtime Pay Calculation
function calculateOvertimePay(hoursWorked) {
    if (hoursWorked > 40) {
        var overtimeHours = hoursWorked - 40;
        return overtimeHours * 12;
    }
    return 0;
}
var hours = +prompt("Enter the number of hours worked");
document.write("Overtime Pay: Rs. " + calculateOvertimePay(hours) + "<br><br>");

// 10. Currency Denomination
function currencyDenomination(amount) {
    var hundred = Math.floor(amount / 100);
    amount = amount % 100;
    var fifty = Math.floor(amount / 50);
    amount = amount % 50;
    var ten = Math.floor(amount / 10);
    return { hundred, fifty, ten };
}
var amount = +prompt("Enter the amount to withdraw in hundreds");
var result = currencyDenomination(amount);
document.write("Number of 100 notes: " + result.hundred + "<br>");
document.write("Number of 50 notes: " + result.fifty + "<br>");
document.write("Number of 10 notes: " + result.ten + "<br>");
