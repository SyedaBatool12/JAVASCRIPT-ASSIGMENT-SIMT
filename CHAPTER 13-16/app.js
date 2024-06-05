var studentName = [];
var futureStudentNamesObject = new Array();
var familyMember = ["Qamar", "Hina", "Asgher", "Batoo", "Shereen", " Fatima"];
var familyMemberInNumbers = [1, 2, 3, 4, 4, 8];
var booleanArray = [true, false]; // JavaScript boolean literals are lowercase: true, false
var mixedArray = ["syeda", "batool", 1, 2, 3, false];

document.write("<h1>" + "Qualifications:" + "</h1>");

var quali = ["1) SSC", "2) HSC", "3) BCS", "4) BS", "5) BCOM", "6) MS", "7) M.Phil", "8) PHD"];

// Writing qualifications
for (var i = 0; i < quali.length; i++) {
    document.write(quali[i] + "<br>");
}

console.log(quali);

var nameOfStudent = ["batool", "Shereen", "fatima"];
var score = [320, 230, 480];
var totalMarks = 500;

// Writing scores and percentages
for (var i = 0; i < nameOfStudent.length; i++) {
    var percentage = (score[i] / totalMarks) * 100;
    document.write("Score of " + nameOfStudent[i] + " is " + score[i] + ". Percentage: " + percentage.toFixed(2) + "%<br>");
}

var colorName = ["Red", "Green", "Blue", "Pink"];

// Writing initial color names
document.write("<br>Initial Colors: " + colorName + "<br>");

// Operations on colorName array
var beginning = prompt("What color would you add in the beginning?");
colorName.unshift(beginning);
document.write("After unshift: " + colorName + "<br>");

var end = prompt("What color would you add in the end?");
colorName.push(end);
document.write("After push: " + colorName + "<br>");

colorName.unshift("Orange", "White");
document.write("After unshift for multiple elements: " + colorName + "<br>");

colorName.shift();
document.write("After shift: " + colorName + "<br>");

colorName.pop();
document.write("After pop: " + colorName + "<br>");

var newColorAdd = +prompt("What index would you like to add a new color?");
var colorNameIs = prompt("Which color would you like to add?");
colorName.splice(newColorAdd, 0, colorNameIs);
document.write("After splice for adding color: " + colorName + "<br>");

var deleteIndex = +prompt("Which index would you like to delete a color?");
var deleteNumber = +prompt("How many colors would you like to delete?");
colorName.splice(deleteIndex, deleteNumber);
document.write("After splice for deleting color: " + colorName + "<br>");

var studentscores = [320, 230, 480, 120];
document.write("<br>Scores of Students: " + studentscores + "<br>");
studentscores.sort();
document.write("Ordered Scores of Students: " + studentscores + "<br>");

var cityName = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<br>Cities list:<br>");
document.write(cityName + "<br>");

var selectedCity = cityName.slice(2, 4);
document.write("Selected cities list:<br>");
document.write(selectedCity + "<br>");

var sentence = ["This", "is", "my", "cat"];
document.write("<br>Array:<br>");
document.write(sentence + "<br>");

var afterJoining = sentence.join(" ");
document.write("Array after joining:<br>");
document.write(afterJoining + "<br>");

var Devices = ["keyboard", "mouse", "printer", "monitor"];

document.write("<br>Devices:<br>");
document.write(Devices + "<br><br>");

var shift;

document.write("Out:<br>");
shift = Devices.shift();
document.write(shift + "<br>");

document.write("Out:<br>");
shift = Devices.shift();
document.write(shift + "<br>");

document.write("Out:<br>");
shift = Devices.shift();
document.write(shift + "<br>");

document.write("Out:<br>");
shift = Devices.shift();
document.write(shift + "<br>");

var devices = ["keyboard", "mouse", "printer", "monitor"];

document.write("<br>Devices:<br>");
document.write(devices + "<br><br>");

var removeitem = devices.pop();
document.write("Out:<br>");
document.write(removeitem + "<br>");

document.write("Out:<br>");
removeitem = devices.pop();
document.write(removeitem + "<br>");

document.write("Out:<br>");
removeitem = devices.pop();
document.write(removeitem + "<br>");

document.write("Out:<br>");
removeitem = devices.pop();
document.write(removeitem + "<br>");

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<br><select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
}
document.write("</select>");

