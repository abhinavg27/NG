# Angular Training

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 
banu@lucidatechnologies.com; 
banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/NG

----------------------------------------------------------

Softwares Required:
1) Visual Studio Code.
2) Chrome Web Browser
3) NodeJS Latest LTS

----------------------------------------------------

* Day 1) JS, ES2015/ ES6, NodeJS, Webpack and TypeScript
* Day 2 and 3) Angular ==> single application is built

-------------------------------------------------------


Day 1

--------

JS ==> Scripting language, loosely typed language ==> JIT 

JS ==> JS engine [ V8, SpiderMonkey , Chakra, Nashorn, ...]

Web Browsers provide JS engine [ window]
nodeJS env [ global ] , Adobe Acrobat [ Global ] , Apache CouchDB

myFile.js

var g = 100;

function doTask() {
	var a = 10;
	if( g > a ) {
		var b = 20;
		c = 50;
	}
	console.log(g, a, b, c);
}

doTask();
console.log(g, a, b, c);



function add(4,5) {}

4 and 5 are stored as arguments

arguments[0]
arguments[1]

==================================

function add(x, y) {
	console.log("..");
}

var res = add(4,5); // res will have undefined

--------

function add(x, y) {
	return x + y;
}

var res = add(4,5); // 9

------------------
semi-colon insertions

function add(x, y) {
	return 
		x + y;
}

var res = add(4,5); // undefined

------------------------------


JS Call Stack event loop and Web APIs

---------------------------------------

console.log("Hello!!!");

setInterval(function timefn() {
	console.log("timed");
}, 10);


$("#btn").click(function clicked() {
	console.log("clicked");
});




console.log("Bye!!!");

==============================================================

JS OOP

------

1) var obj = new Object();
  obj.data = 100; // state

  obj.doTask = function() {
  	// code
  }

2) function constructor

function Person(id, name) {
	this.id = id;
	this.name = name;
}


Adding behaviour

Person.prototype.getId = function() {
	return this.id;
}

Person.prototype.getName = function() {
	return this.name;
}


var p = new Person(33, "Raj");

// avoid Person(33, "Raj");

p.getName();
p.getId(); 