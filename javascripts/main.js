console.log("Hello World");

var test = "Hey Chief, you look great today";
console.log("results of test", test);

var hoursInYear = 24 * 365;
console.log("hoursInYear", hoursInYear);

var minsInDecade = (hoursInYear * 60) * 10;
console.log("minsInDecade", minsInDecade);


var age = 8;
var secondsInYear = hoursInYear * 60 * 60;
var ageInSeconds = secondsInYear * age;
console.log("ageInSeconds", ageInSeconds);


var wiseValue = 35;
if (age > wiseValue){
	console.log("You are very wise");
} else {
	console.log("You are young and green");
}

var myNum = 2.568574848;
var shortNum = myNum.toFixed(3);
console.log("shortNum", shortNum);

var num = 2;
var num2 = "2";
console.log("add", typeof(num2),  num2, "oh yeah" + " today is cold");





////////////////////////////////////////
// Strings
var phrase = "The quick brown fox jumped over the lazy dog";
console.log("This is a string T:", phrase.indexOf("t"));

var phrase2 = "How now brown cow?";
var position = phrase2.charAt(8);
console.log("position", position);

var phrase3 = "The lazy dog";
var newPhrase3 = phrase3.replace("lazy", "silly");
console.log("newPhrase3", newPhrase3);


var phrase4 = "The lazy dog likes the weird fox";
var newPhrase4 = phrase4.replace(/o/g, "i");
console.log("newPhrase4", newPhrase4);


//DOM interaction
var phraseString = document.getElementById("phrase").innerHTML;
console.log("phraseString", phraseString);

var classStuff = document.getElementsByClassName("lotsOfClass");
console.log("classStuff - what is here?", classStuff);
console.log("the second One", classStuff[1])

var addToDOM = document.getElementById("demo");
addToDOM.innerHTML = "Hi there, NSS ninjas";

///////////////////////////////
// Arrays

var myJunkDrawer = [3, "dime", true, null, "28"];
console.log("myJunkDrawer", myJunkDrawer);
console.log("myJunkDrawer", myJunkDrawer[1]);

myJunkDrawer.push("baseball");
console.log("myJunkDrawer", myJunkDrawer);
myJunkDrawer.unshift("what is this??");
console.log("myJunkDrawer", myJunkDrawer);

var thing = myJunkDrawer.pop();
console.log("thing", thing);
console.log("after pop", myJunkDrawer);

/////////////////////////////////////
// Objects

var songArray = [];
var myObject = {};

var song = {
	title: "Call Me Maybe",
	artist: "Carley Rae",
	album: "Greatest Hits",
	awards: ["Big award", "one hit"],
	type: {
		style: "pop",
		listenability: "none",
		producers: {
			name: "Fred Jones",
			name2: "Alice Smith"
		}
	},
	listAwards: function(){
		console.log("Show me the Awards");
	}
};

songArray.push(song);
console.log("song", songArray[0]);

// find out the key (name) for items in object
console.log("Object.keys(song)", Object.keys(song));
