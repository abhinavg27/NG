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

HOF: Closure

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

HOF ==> caching ==> memoize pattern

========================================
https://addyosmani.com/resources/essentialjsdesignpatterns/book/

======================================================================

ES5 version

ES6 / ES2015 ==> ECMAScript

ESNext

==================================
https://caniuse.com/

ES6/ES7 ==> transpile / transcompiler ==> ES5

Babel
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript

Tracuer: by google
Traceur is a JavaScript.next-to-JavaScript-of-today compiler that allows you to use features from the future today.

=============================================

ES6 features:

1) Arrow functions

	var add = (x,y) => x + y;

   can have default values

   var add = (x = 0, y = 0, z = 0) => x + y + z;


   add();
   add(66);
   add(4,5);
   add(5,6,1);

 2) Destructuring
  2.1) array

  	var colors = ["red", "green", "orange", "pink" , "lavender"];

  	Traditional way:

  	var r = colors[0];
  	var g = colors[1];

  	ES6 way:

  	var [r, g, ...others] = colors;

  2.2) object

  var product = { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" };

  var {name, price} = product;
  console.log(name, price);
  
  OR

   var {name:n, price:p} = product;
   console.log(n, p);

  Before ES6:
 console.log(product.name, product.price);  

3) Scope variable [let] and constant [ const ]:==> Block variable


let g = 100;
const PI = 3.14159;

function doTask() {
	let a = 10;
	if( g > a ) {
		let b = 20; // not hoisted
		c = 50;
	}
	console.log(g, a, b, c); // b is not visible
}

doTask();
 

4) Clone

  var product = { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" };

  var ref = product; // reference

  ref.price = 55555;


  var clone = {...product}; // spread operator

 5) Template String [``]
 	
 	ES5 supports 2 string literals as in:
 	"Gopal" or 'Hema'

 	 var product = { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" };


 	 var content = `
 	 		<div>
 	 			<div class="header"> ${product.name}</div>
 	 			<div class="body">
 	 					${product.category} <br />
 	 					Price: ${product.price}
 	 			</div>
 	 		</div>
 	 `;

 6) Promise API for Asynchronous based operations [ Callable and Future in Java]

 	Promise can be resolved or rejected

 	make a call to Server ==> server promises to return with resolved / rejected

 	Synchronous code: 

 	let result = doTask(); // blocking code
 	console.log("end!!"); // executes only after doTask completes


 	ASynchronous code: assumption doTask returns Promise 

 	doTask().then(
 		(data) => console.log(data),
 		(rejected) => console.log("Boom:-(" , rejected)
 	).catch(ex) {
 		console.log(ex);
 	}

 	console.log("end!!"); // not blocked



 	fetch('http://jsonplaceholder.typicode.com/users/1')
 		.then( response => response.json())
 		.then(data => console.log(data));

==========

API:

pull the customer info
pull the order info

Customer + order info to client

==========

pull the data from different CDN
use data coming from the first CDN

==================

7) async and await

============

https://microservices.io/patterns/data/saga.html
https://redux-saga.js.org/


8) Generator are functions which can return multiple values over a time line

	function* dataGenerator() {
		console.log("task1");
		console.log("task2");
		console.log("task3");

		yield "my first data";
		
		console.log("task4");
		console.log("task5");

		yield 100;
	}


	let iter = dataGenerator();
	iter.next();
	...
	iter.next();

9) ES 6 module system and class

================================================
https://nodejs.org/en/download/

NodeJS ==> platform with V8 engine + libuv libraries to handle Threads and Async OS call

What can i use NodeJS for?
1) build APIs ==> RESTful Web services / GraphQL ==> ApolloServer
2) Real time application [ ChatBot + admin dashboard] 
3) Streaming platform [ OTT ]
4) use this platform for build web client application [ React , Angular, Vue, Backbone]
	==> we may choose ES6/7 or TypeScript or CoffeeScript or DART 

----------------

NodeJS comes with many pre-defined modules [ fs, http, url, crypto, cluster,..]

Manage Modules ==> download, publish
 1) NPM ==> node package manager
 2) YARN

 similar to PIP

=============

every project contains "node_modules" folder where the downloaded modules reside
we can download to global ==> /users/usersname/AppData/Roaming/ ==> executables

Module System: Vanilla JS module system, ES6, AMD, CommonJS

NODEJS uses CommonJS module System

a.js
module.exports.add = function(x, y) { }

function sub() { }


b.js
let add = require('./a').add;
console.log(add(3,5))

===========================
AAA ==> Assemble Action Assert


$ npm i mocha chai request -D

-D is to inform its development dependency

mocha ==> Unit testing library for JS
	alternate ==> Jasmine, JEST

chai ==> Assertion library [ https://www.chaijs.com/]




 "devDependencies": {
    "chai": "^4.3.4",
    "mocha": "^9.0.3",
    "request": "^2.88.2"
  }


  "chai": "^4.3.4" ==> any version greater or equal to 4.3.4

  "chai": "4.3.4", ==> exact version

  "chai": "~4.3.4", ==> major version has to be "4"


  =======

  npm i

  =======================================================
 Java ==> Maven / Gradle/ Ivy/ Builder / ANT

  JavaScript Build tools
  Grunt, Gulp and Webpack

  Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. It uses a command-line interface to run custom tasks defined in a file

--------------

Angular, React or modern frameworks uses Webpack as default build tool

==========================================================================

npm run build-dev

builds a file "bundle.js" which contains index.js + Person.js + math.js after transpile

npm run build-prod


builds a file "bundle.js" which contains minified + uglified code of  index.js + Person.js + math.js after transpile

==================

Day 2

---------

JavaScript, ES 6, NodeJS, Webpack [bundler]


TypeScript

-----------
is a superset of JavaScript, static typing

types:

1) Number

var age:number = 22;

age = "Twenty"; // error

In engine "var age"

2) String

var name:string = "Tim";

3) Boolean

var flag:boolean = true;

4) Arrays

var data:number[] = [4,2,5,21];

OR

var data:Array<number> = [5,2,1];

5) enum

enum Priority {
	LOW, MED, HIGH
}

var task:Priority = Priority.MED;


6) any

var data:any;

data = doTask();

if( typeof(data) == "number") {
	data++;
} else if ( typeof(data) == "string") {
	data.toUpperCase();
}

data.id;
data.name;

7) unknown

var data:unknown;
	// difference between any and unknown is "unknown" won't allow any methods or properties to be called on data

	data.toUpperCase(); // ERROR

	data.name; // ERROR

8) never
	 
	 function someTask(): number | never {
	 	if(condition) return 100;
	 	throw new Error("Boom :-(");
	 }

9) Tuple

	var data:[string,number] = ["Hello", 123];

10) interface
	
		==> realization relationship

		interface Flyable {
			void fly();
		}

		class Bird implements Flyable {
			//

			void fly() {

			}
		}


		class AeroPlane implements Flyable {
			//
			void fly() {

			}
		}

		==> to define a Shape

		interface Person {
			id:number,
			name:string,
			address?:string
		}

		function addPerson(p:Person) : void {
			//
		}

		addPerson({"id": 12, "name": "Harry"}); // valid

		addPerson({"id": 12, "name": "Harry", "address" : "some address"}); // valid

		addPerson({"id": 12, "address" : "some address"}); // ERROR

11) class
		
		class Person {
			private id:number;
			private name:string;

			constructor(id:number, name:string) {
				this.id = id;
				this.name = name;
			}

			getName() : string {
				return this.name;
			}

			getId() : number {
				return this.id;
			}
		}

		let p = new Person(12,"A");

		p.id; // error

		========

		class Person {
			constructor(private id:number, private name:string) {
			}

			getName() : string {
				return this.name;
			}

			getId() : number {
				return this.id;
			}
		}

	==============================

	Babel: ==> ES6 ==> ES5

	TypeScript Compiler: file.ts ==> file.js


	npm i -g typescript

// IIFE (function(){})();

 // IIFE
	var mod1 = (function() {
			data = 100;
			function doTask() {
				console.log(data);
			};

			function increment() {
				data++;
			};

			return {
				doTask,
				increment
			};
	})();


	var mod2 = (function() {
			 data = 500;
			 name = "Test";
			function print() {
				console.log(data)
			}

			function increment() {
				data++;
			}
	})();


mod1.increment(); // 101

mod2.increment(); // 501

=========================================
similar to Annotations in Java

12) Decorator ==> Metadata [ @DecoratorName(properties)]
	Internally it's a HOF function returns a function

public class Component {

}

@Component({
	"selector": "customers"
})
public class CustomerComponent extends Component {

}

Object.defineProperty(CustomerComponent, 'selector', {
  value: "<customers>",
  writable: false
});

<customers></customers>

interface ComponentConfig {
	selector:string,
	templateUrl?:string,
	styleUrls?:string
}

@Component({
	"selector": "products"
})
public class ProductComponent   extends Component

Object.defineProperty(CustomerComponent, 'sel{

}

export function Component(config:ComponentConfig) {
     return function(target:Component) {
        Object.defineProperty(target.prototype, "selector", {
            "value" : config.selector
        })
    }
}


without Decorator:


 
public class CustomerComponent {
		"selector": string = "<customers>";
}

public class ProductComponent {
		"selector": string = "<products>";
}

===========

public class Product {

	@NotBlank()
	name:string;
}

==============================================


tsc --experimentalDecorators=true Person.ts


npm start
npm test

npm run clean
npm run build-dev

===========================


