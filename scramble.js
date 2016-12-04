/* Written by: Cory Joseph 
 *
 *  This file contains all of the javascript functions for
 *  my website.
 *
 */
var original = ""; //variable to store original word for comparisons
var tester = 0; //variable used to handle correct answers and stopping timer
function wordGenerator() { //randomly generates random words and calls timer
tester = 0;
document.getElementById("wrapper2").style.color = "black";
if (!sessionStorage.total) {
  sessionStorage.total = 0;  //creates variable when new game is started
}
if (!sessionStorage.counter) {
  sessionStorage.counter = 0; //same ^
}
sessionStorage.total++;
document.getElementById("inPut").style.visibility='visible';
document.getElementById("generated").style.visibility='visible';
var words = ["tuesday", "goodbye", "hello", "plane", "fire", "couch",
"speakers", "bowl", "spoon", "haircut", "computer", "science", "trees",
"penguin", "potato"];
var x = words[Math.floor(Math.random() * 15)];
var arrayIndex = words.indexOf(x);
original = x;
var wordLength = x.length;
var scrambled = "";

  for (var i = 0; i < wordLength; i++) {
    var Index = Math.floor(Math.random() * x.length);
	scrambled += x.charAt(Index);
	x = x.substr(0, Index) + x.substr(Index + 1, x.length);
  }

document.getElementById("check").innerHTML = "";
document.getElementById("generated").innerHTML = scrambled;

startTimer();
}

function startTimer() {// Sets up the timer by using the elapsed time from date
document.getElementById("wordGen").style.visibility = 'hidden';
document.getElementById("doneButton").style.visibility = 'hidden';
var start = new Date().getTime(), elapsed = '0.0';
var sTimer = window.setInterval(function() {
  var time = new Date().getTime() - start;
  elapsed = Math.floor(time/100) / 10;
  if (Math.round(elapsed) == elapsed) {
    elapsed += '.0';
  }
  if (elapsed >= 10 || tester > 0) {
    document.getElementById("inPut").style.visibility='hidden';
	if (tester == 0) {
	  document.getElementById("check").innerHTML = "out of time"
	  + "<br>" + "Correct Word: " + original;
	}
	window.clearInterval(sTimer);
	document.getElementById("wordGen").style.visibility = 'visible';
	document.getElementById("doneButton").style.visibility = 'visible';
  }
  document.getElementById("wrapper2").innerHTML = elapsed;
  if (elapsed >= 7.1) {
    document.getElementById("wrapper2").style.color = "red";
  }
  if (elapsed == 7) {
    var aud = new Audio('NVRGNA.mp3');
	aud.volume = 0.1;
	aud.loop = false;
	aud.play();
  }
}, 100);
}

function inputChecker(word) { //compares uInput to correct word
  if (word == original) {
    document.getElementById("check").innerHTML = "Correct!";
	sessionStorage.counter++;
	document.getElementById("inPut").style.visibility='hidden';
	document.getElementById("generated").style.visibility='hidden';
	tester++;
  } else {
    document.getElementById("check").innerHTML = "Incorrect";
  }
}

function calculateScore() { //displays users score to page2
if (!sessionStorage.total) {
  sessionStorage.total = 0;
}
if (!sessionStorage.counter) {
  sessionStorage.counter = 0;
}
document.getElementById("score").innerHTML = "Total Score: " 
+ sessionStorage.counter + "/" + sessionStorage.total;
}

function reset() { //resets score counter
sessionStorage.counter = 0;
sessionStorage.total = 0;
}














