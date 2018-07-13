var cur;
cur = prompt("What year is it?");

var birth;
birth = prompt("What year were you born?");

var a;
var b;
var a = cur - birth;
var b = birth - cur;
var c = "You are ";
var d = " years old!";


if ( a > b ) {
	alert("You are " + a + " years old!");
}

if ( a < b ) {
	alert (c + b + d);

}
//var answer;
//answer = "They are either " + a + " or " + b + "!";

//alert(answer);
