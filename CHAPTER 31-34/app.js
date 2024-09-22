// 1. Get current date and time
var currentDate = new Date();
document.write(currentDate); // Outputs the current date and time

// 2. Get the current month (0-11) and display the month name
var dateIs = new Date();
var date = dateIs.getMonth(); // 0 for January, 1 for February, etc.
document.write(date);

var monthHere = ["jan", "feb", "march", "april", "may", "june", "july", "Aug", "sep", "oct", "nov", "dec"];
var monthIs = monthHere[date]; // Get the correct month name based on the month index
console.log(monthIs); // Logs the current month name

// 3. Setting the day of the week (getDay() returns 0-6 for Sunday-Saturday)
var day = new Date();
var dayIs = day.getDay();
if (dayIs >= 3) {
  day.setDate(day.getDate() - (dayIs - 0)); // Set to the most recent Sunday (day 0)
}
document.write(day); // Outputs the adjusted date

// 8. Date parsing issue fixed (use the correct date format)
var laterDate = new Date("November 31, 2020");
document.write(laterDate); // November 31 doesn't exist, so this will show "Dec 1, 2020"

// 9. Calculate the difference between the current date and Ramadan (June 18, 2015)
var recDate = new Date();
var ramadanDate = new Date("June 18, 2015");
var diff = recDate.getTime() - ramadanDate.getTime();
var res = diff / (1000 * 60 * 60 * 24); // Convert the difference to days
console.log(Math.round(res) + " days have passed since 1st Ramadan, 2015");

// 10. Calculate the number of seconds since the beginning of 2015
var firstDate = new Date();
var secondDate = new Date("Jan 1, 2015");
diff = firstDate.getTime() - secondDate.getTime();
res = diff / 1000; // Convert the difference to seconds
document.write("On reference date " + firstDate + ", " + Math.round(res) + " seconds had passed since the beginning of 2015");

// 11. Subtracting one hour from the current time
var fisDate = new Date();
var res = fisDate.getHours();
var final = (res - 1); // Subtract 1 from the current hour
document.write(final); // Outputs the hour after subtracting 1
