var c1;
c1 = prompt("What is the temperature in celsius?");

var f1;
f1 = (c1 * 9) /5 +32;

alert("It is " + f1 + "\u00B0F.");

var f2;
f2 = prompt("What is the temperature in farenheit?");

var c2 = ((f2 -32) *5) /9;

alert("It is " + c2 + "\u00B0C.");

var f3;
f3 = Math.random()*100;

alert("Actually, it's " + f3 + "\u00B0C today.");
 