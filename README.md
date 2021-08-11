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

2) function constructor ==> prototype

function Person(id, name) {
	this.id = id;
	this.name = name;
}


Adding behaviour ==> instance methods

Person.prototype.getId = function() {
	return this.id;
}

Person.prototype.getName = function() {
	return this.name;
}

// static behaviour
Person.equals = function(p1,p2) {

}

var p = new Person(33, "Raj");

// avoid Person(33, "Raj");

p.getName();
p.getId(); 

==================================

 
3) JSON ==> JavaScript Object notation [ Prefered way to represent a data ==> RESTful Web services]
var obj = {};

value can be number, string, boolean, undefined, array, object, null, function

functions are first class members 

var person = {
	"id": 112,
	"name": "Raj",
	"employed": false,
	"phones": [343444, 2323252],
	"address": {
				"street": "SS",
				"city": "BLORE",
				"Zip": 560001
		},
	getName: function() {
		return this.name;
	}
}


person.name; // Raj


let products = [
	{"id": 1, "name" : "iPhone"},
	{"id" : 2, "name": "iPad"}
]

============================================

JS: bind method

var product = {
	"name": "iPhone12"
}


var person = {
	"id": 112,
	"name": "Raj",
	 getName: function() {
	 	console.log(this);
		return this.name;
	}
};


var fn = person.getName; // context is not copied [ "this" is "window"]

fn(); // prints "name" of "window"

---

var fn = person.getName.bind(person);
fn();


fn = person.getName.bind(product);
fn();

===
 
JS: call method

function update(name) {
	this.name = name;
}


var product = {
	"name": "iPhone12"
}


var person = {
	"id": 112,
	"name": "Raj",
	 getName: function() {
	 	return this.name;
	}
};


update.call(product, "Hp Laptop");

update.call(person, "Smitha");

==============================================

Functional style of Programming


OOP ==> methods which are tightly coupled to state of object

class Account {
	private double balance; // state

	public void credit(double amt) { // method
		this.balance += amt;
	}
}

Functional style of programming ==> encoraches using functions which can be used on various objects
	filter, map, reduce, forEach

Functional style of Programming uses High Order Functions: HOF
* functions which accept functions as arguments
* function return a function
* in Simple treat functions as first-class member

=============

var data = [33,62,67,12,7];

for(i = 0 ; i < data.length; i++) {
	console.log(data[i]);
}

for(i = 0 ; i < data.length; i++) {
	window.alert(data[i]);
}


=========

HOF:

var data = [33,62,67,12,7];

// HOF, action will be a function

function forEach(elems, action) {
	for(i = 0 ; i < elems.length; i++) {
		action(elems[i]);
	}
}

forEach(data, console.log);

forEach(data, alert);

forEach(data, writeToFile);


function WriteToFile(data) {
	// code to store into file system
}

=====================

map ==> transform data

==========================

HOF ==> Function return a function

pure function:

function greeting(msg, name) {
	return msg + " " + name;
}

greeting("Good morning", "Asha");
greeting("Good morning", "Usha");

greeting("Good Day", "Rita");


============

HOF:

function greeting(msg) {
	return function(name) {
		return msg + " " + name;
	}
}

var morningGreet = greeting("Good morning");

morningGreet("Asha");
morningGreet("Kim");

var greet = greeting("Good Day");
greet("Rita");

============

getEmployee(24); ==> REST call ==> REST aPI ==> DB

getEmployee(13); ==> REST call ==> REST aPI ==> DB

getEmployee(24); ==> give it from cache

=====================================

HOF ==> caching



