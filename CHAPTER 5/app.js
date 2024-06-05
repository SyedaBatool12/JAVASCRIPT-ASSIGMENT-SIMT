
 var num1 = 5
 var num2 = 5

 var afterCalculated = num1+num2 ;
 document.write("Sum of " + num1 + " and " + num2 + " is " + afterCalculated + "</br>");

 var afterCalculated = num1-num2 ;
 document.write("Sub of " + num1 + " and " + num2 + " is " + afterCalculated+ "</br>");

 var afterCalculated = num1*num2 ;
 document.write("Mul of " + num1 + " and " + num2 + " is " + afterCalculated+ "</br>");

 var afterCalculated =num1/num2 ;
 document.write("Div of " + num1 + " and " + num2 + " is " + afterCalculated+ "</br>");

 var afterCalculated =num1%num2 ;
 document.write("Mod of " + num1 + " and " + num2 + " is " + afterCalculated+ "</br>");




 var number;

 document.write("Value after variable declaration is: "+ number  + "<br>");

 var num1 = 5;
 document.write("Initial value: " + num1 + "<br>");

 document.write("Value after increment is: " + ++num1 + "<br>");

 num1= num1 + 7;
 document.write("Value after addition is: " + num1 + "<br>");

 document.write("Value after decrement is: " + --num1 + "<br>");

 num1= num1%3;
 document.write("The remainder is: " + num1 + "<br>" );


 var perCostOfTicket = 600;
 var numOfTickets = 5;
 var totalCost = (perCostOfTicket * numOfTickets);
 document.write("Total cost to buy " + numOfTickets + " tickets to a movie is " + totalCost +"PKR" );


 var Choice = +prompt("Enter a Number of any table");
 var count = 1;
 var inc = 1;
 document.write(Choice + " X " + count++ + " = " +  Choice*inc++ + "<br>" +Choice + " X " + count++ + " = " +  Choice*inc++ + "<br>" +Choice + " X " + count++ + " = " +  Choice*inc++ + "<br>" +Choice + " X " + count++ + " = " +  Choice*inc++ + "<br>" +Choice + " X " + count++ + " = " +  Choice*inc++ + "<br>" +Choice + " X " + count++ + " = " +  Choice*inc++ + "<br>" +Choice + " X " + count++ + " = " +  Choice*inc++ + "<br>" +Choice + " X " + count++ + " = " +  Choice*inc++ + "<br>" +Choice + " X " + count++ + " = " +  Choice*inc++ + "<br>" +Choice + " X " + count++ + " = " +  Choice*inc++ +"<br>"
 );


 var Celcius = 25
 var Farenheit = 70

 var findingCelcius = (Farenheit - 32) * 5/9
 var findingFarenheit  = (Celcius * 9/5) + 32

 document.write(Celcius+"C" + " is " + findingFarenheit+"F" + "<br>");
 document.write(Farenheit+"F" + " is " + findingCelcius+"C");

 
 var product1 = "Price of item 1";
 var product2 = "Price of item 2";
 var order1 = "Order Quantity of item 1";
 var order2 = "Order Quantity of item 2";
 var ordershipping = "Shipping charges";

 var total = (650*3 + 100*7 + 100);

 document.write(product1 + " is " + 650 + "<br>" + order1 + " is " + 3 + "<br>" + product2 + " is " + 100 + "<br>" + order2 + " is " + 7 + "<br>" + ordershipping + " is " + 100 + "<br>" + "<br>"+ "<br>" + "Total cost of your order" + " is " + total );


 var student1;
 var student2;
 var totalMark = 980;
 var markObtained = 804;
 var percent = markObtained/totalMark*100;

 document.write("<h1>" + "Marks Sheet" + "</h1>" + "<br>"+ "<br>"+ "<br>"+ "Total marks: " + totalMark + "<br>" + "Mark obtained: " + markObtained + "<br>" + "Percentage:" + percent);


 var Dollars = 10;
 var riyals = 25;
 var totalCurrency = (10*104.80 + 25*28);

 document.write("<h1>" + "Currency in PKR" + "</h1>" + "<br>"+ "<br>"+ "<br>"+ "Total Curreny in PKR: " + totalCurrency);


 var num1 = 5;
 document.write( num1 + 5 + "<br>"+ num1 * 10 + "<br>" + num1 / 2 );


 var currentYear = 2024;
 var birthYear = 1992;
 var age = 2024-1992;

 document.write("Current Year: "+ currentYear + "</br>" + "Birth Year: " + birthYear + "</br>" +  "Your Age: " + age);


 var radius = 20;
 var circumference = (2*3.142*radius);
 var area = (3.142*radius**2);

 document.write("<h1>" + "The Geometrizer" + "</h1>" + "</br>" + "</br>" + "</br>" + "Radius of a ciurcle: " + radius + "<br>" + "The circumference is: " + circumference + "<br>" + "The area is: " + area); 


 var snake = "lays";
 var age = 15;
 var maxAge = 65;
 var takingDays = 3;

 var total = 65*3 - 3*15 ;
 document.write( "<h1>" + "The Lifetime Supply Calculator" + "</h1>"+"Favourite Snake: " + snake + "<br>" + "Current Age: " + age + "<br>" + "Estimated Maximum Age: " + maxAge + "<br>"  + "Amount of snakes per day: "  + takingDays + "<br>"  + "You will need " + total + " " + snake  + " to last you until the ripe old age of " + maxAge);