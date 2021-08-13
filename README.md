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


npm i -g @angular/cli@latest

ng --version

=====================================

@angular/cli ==> to generate a scaffolding code for angular

Without @angular/cli 

npm init --y
webpack.config.js
tsconfig.json
npm install all dependencies


https://stackblitz.com/

================================
Create a scaffolding code 
ng new customerapp
> no to Anular Routing
> CSS

=========================
Web site/page ==> JS / jQuery / JS templates Handlebars/ Mustache

Interpolation:
<p>{{firstname}} {{lastname}}</p>

{
  firstname: "Yehuda",
  lastname: "Katz",
}

<p>Yehuda Katz</p>

Build client side web application

SPA ==> Single Page Application => index.html
* Two Way binding
	==> data from server is rendered into view
	==> any changes in view has to be sent to server
* Dependency Injection ==> IOC ==> Inversion of Control
	CustomerModule ==> set of js + template 
	PaymentModule ==> set of ts + template
	OrderModule ==> set of ...
	CommonModule

	OrderModule needs/ depends on PaymentModule + CustomerModule + CommonModule
* Lazy loading of modules ==> core web vitals ==> FCP [ white screen]
* we need to display different views for different URI

	http://cisco.com
	http://cisco.com/products
	http://cisco.com/locations

	==> SEO
	==> Bookmark
		http://amazon.com/mobiles/iphone/12
  ==> Navigate between views / not pages
  	http://amazon.com/mobiles/pixel/2
  ==> Protect few URL / Guard Routes
  http://amazon.com/checkout

  History API ==> HTML
	
===============
1) Backbone
2) Angular
3) React
4) Vue

Angular ==> Framework ==> complete solution
React ==> view library ==> Facebook

==========================
Angular.js [1.6] with Angular [2+ ==> 12] ==> Google

Angular Framework Building blocks:

1) Module
	AppModule, CustomerModule, OrderModule, PayModule

2) Component
		View Components ==> Wireframe ==> UI/UX
		finegrained / Coarsegrained

		2.1) class with state [customer] and behaviour [ CustomerComponent ==> CRUD on Customer]
		2.2) @Component
			==> template [ html ]
			==> styles [ CSS ]
3) Services
		==> business logic
		==> API calls ==> fetch or AJAX
		==> data is shared between components
4) Router Module
5) Directives
		can be used along with DOM elemnents and Component
		==> additional behaviour which doesn not imply to CRUD [ like border / highlight]
		HoverDirective
6) Pipe
		to transform Data
		Date ==> dd-MMM-yyyy or yyyy MM dd
		Numbers ==> 45,0000.00 or 45.0000 00
		{firstName | upper }

		{amount | currency}
7) HTTPInterceptors
		sending tokens [JWT], encrypt

		HTTP

		Authorization: Bearer jwt
8) Guard
	to protected access from un-authorized users

==============

hides webpack.config.json
But webpack.config.json uses "angular.json" where I can customize

===========

entry point is "src/main.ts"

	loads/Bootstrap ==> AppModule
	platformBrowserDynamic().bootstrapModule(AppModule)

Module ==> components + directives + pipes + services

app.module.ts

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 declarations ==> all components of module
 imports ==> dependencies
 providers ==> services are configured
  bootstrap: [AppComponent] ==> first component to be displayed ==> view

==
AppComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customerapp'; //state
}

index.html
<app-root></app-root>

=======

customerapp> npm start

tsc ==> build
uses webpack-light-dev-server 
deploys bundle on the server

=============================
npm i bootstrap@4.6.0 font-awesome@4.7.0


Bootstrap/ Bulma / Zurb RWD ==>



ng generate component customers
OR
ng g c customers


constructor() { } vs  ngOnInit(): void {}

if initialization dependens on Dependency [ services / modules] do it in ngOnInit()



Angular Directives: 
Structural Directive: *ngFor *ngIf

Structural Directives are directives which change the structure of the DOM by adding or removing elements. 

==========

import { Component, OnInit } from '@angular/core';
import Customer from '../common/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor() { }

  ngOnInit(): void {
    // REST api call to pull customers
    this.customers = [{
    ...
    },
    {
     ...
    }
    ];
  }

}

====

<div *ngFor="let customer of customers">
    {{customer.firstName}}   {{customer.lastName}}
</div>

======================================================
FormsModule:

app.module.ts
import {FormsModule} from '@angular/forms';

imports: [
    BrowserModule, FormsModule
 ],

================================

@Input() ==> property is passed from parent to child

	Parent {
		data:string = "Tim";
	}

	<child [name] ="data"></child>

	class child {
			@Input()
			name:string = "";
	}


@Output() => EventEmitter ==> emit

	Parent {

		doTask(str:string) {

		}
	}

	<child (someEvent)="doTask($event)"></child>

	child {

		@Output()
		someEvent:EventEmitter<string> = new EventEmmiter<string>();

		task() {
			this.someEvent.emit("hello");
		}
	}
===================
two-way binding usings FormsModule
<input type="text" [(ngModel)] ="searchText">

componet {
	searchText:string = ""
}

[] ==> property
() ==> event
[()] ==> two-way binding

======================================

Angular Test Bed

======================
index.html => <app-root></app-root> ==> <app-customers></app-customers>

TestBed ==> Virtual rendering of Component 



@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {
constructor(private el:ElementRef, private renderer: Renderer2) { }

<button appHover>Click</button>

<app-customers-card appHover></app-customers-card>

HostBinding - Declares a host property binding.


ng g c example

=================

 Service / RouterModule ==> Lazy loading / EditCustomer ==> templateRef/
  Guard / Pipe / 
@ViewChild / ChangeDetection 

===========


Day 3

Angular 
* built on NodeJS environment; runs on Web Browser / Mobile app [NG + Ionic]
* build tool to develop; compile; test; lint ; bundle ==> Gulp / Grunt / Webpack

* Command line interface to build scaffolding code
npm install -g @angular/cli 

* ng new nameofapp ==> package.json all dependencies =>
also creates app.module.ts and app.component.ts

* angular.json file where we can customize which is what is used by webpack.config.json

* angular.json ==> entry point "main.ts"; where are my assets [ src/assets]; "styles.css" is configured as global styling; app.component.css ; customers.component.css
 
"styles.css" ==> including any 3rd party css libraries ==> font-awesome; bootstrap [ RWD]

-------------
Core Web Vitals ==> FCP

* main.ts ==> bootstraps AppModule ; uses platformBrowserModule

@NgModule({
	"declarations": [places where components and directives],
	"services": [ place where all services of this module],
	"imports" : [ dependencies on other module ==> BrowserModule + FormsModule],
	"bootstrap" : [ AppComponent]
})

AppModule will load all the resources added in module:
=> declarations ==> places where components and directives

index.html
	<app-root></app-root>

AppComponent ==> CustomersComponent ==> CustomersCardComponent or CustomersListComponent

===========================

<app-root></app-root> ==> new AppComponent() ==> constructor() ==> any init if required indendent of dependencies; if initililzation dependes on dependcy [ parent input or service]
==> ngOnInit()

<app-root></app-root> ==> new AppComponent()

==========================================
Component ==> will have state + behaviour [ Decorators adds selector + template/ templateUrl
+ style / styleUrl]

Directive ==> to be used as property on DOM or component

<customers-card appHover> </customers-card>

<div appHover></div>

==> behaviour which doesn't involve mutation of state of entity [ No CRUD operations]
==> most of the time like controlling styling

=========================

Router Module

ng new customerapp

 "@angular/router": "~12.2.0",

http://localhost:4200/

should display landing page

http://localhost:4200/about

http://localhost:4200/customers

http://localhost:4200/order

====================================
ng g c home

Adding new Module:
* ng g module order
* ng g c order/orders --module=order/order.module.ts 


const routes: Route[] = [
  {
    path: '',
    component :OrdersComponent
  },{
    path: 'dashboard',
    component :DashboardComponent
  },
  {
    path: 'report',
    component :ReportComponent
  }
]


http://localhost:4200/order ==> OrdersComponent
http://localhost:4200/order/dashboard ==> DashboardComponent [ Chart.js ; D3.js; nvd3.js ]
http://localhost:4200/order/report ==> ReportComponent

=========
	href is Server side routing -=> call to server => server sends the response

  <a class="nav-link" href="/customers">Customers</a>

 routerLink ==> no server call ==> client side routing
 ==> looks for Route config and loads the component matching the route in
 <router-outlet></router-outlet>

 <a class="nav-link" href="#" routerLink="/customers">Customers</a>

========================

Pipe: ==> to Transform data

ng g pipe common/textconvert 

=============

Guard
Angular route guards are interfaces provided by angular which when implemented allow us to control the accessibility of a route based on condition provided in class implementation of that interface.


 CanActivate ==> to protect Routes
 CanDeactivate ==> user opens Edit form; deactive all routes until user clicks "ok" and "cancel"
	CanLoad ==> 	


window.sessionStorage.setItem("user","banu")

=========================================================================

https://stackblitz.com/

@ViewChild

https://stackblitz.com/edit/ng-view-child

=============

 @ViewChildren(SecondComponent) viewChildren!: QueryList<SecondComponent>;

 <second></second>
 <second></second>
 <second></second>

================================

ChangeDetectionPolicy
	Default ==> whenever any data passed from parent to child using @Input() changes
	the child component re-renders

	Example: CustomersComponent has "customers" passed as @Input to CardComponent
	In parent after delete or filter "customers" got changed; CardComponent re-renders

===============

https://stackblitz.com/edit/change

=================================================

* Service
	==> business logic
	==> api calls
	==> share data between components [ need not be parent - child]

Services are @Injectable ==> Enable Dependency Injection 

Which Injector is going to inject Service ==> Module, root , Component

By default Service is Singleton ==> only one instance

===================

rxjs ==> Reactive Programming ==> Netflix

RxJS is a library for composing asynchronous and event-based programs by using observable sequences. 

Observable: represents the idea of an invokable collection of future values or events.
Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.
Subscription: represents the execution of an Observable, is primarily useful for cancelling the execution.
Subject:Observable + Observers.

Promise ==> future value ==> resolve or reject ==> single value

======================

https://stackblitz.com/edit/rxjs-observableexample



import { fromEvent } from "rxjs";

import { debounceTime } from "rxjs/operators";

let clicks = fromEvent(document, "click");

let result = clicks.pipe(debounceTime(1000));

result.subscribe(x => console.log(x));

result.subscribe(x => console.log("clicked!!!"));


==

https://stackblitz.com/edit/rxjs-pipeexample

import { range } from "rxjs";
import { map, filter, scan } from "rxjs/operators";

const source$ = range(0, 10);

source$
  .pipe(
    filter(x => x % 2 === 0),
    map(x => x + x)
  );

  source$.subscribe(x => console.log(x));
  source$.subscribe(x => console.log(x));
  source$.subscribe(x => console.log(x));

======================
 
Shared Service:

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  data: any[] = [];
  subject: Subject<any> = new Subject();
  constructor() { }

  getSubject(): Subject<any> {
    return this.subject;
  }

  addData(elem) {
    this.data.push(elem);
    this.subject.next(this.data);
  }
}

===

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.sharedService.addData(new Date());
    }, 2000);
  }
}


=====


@Component({
  selector: "hello",
  template: `
    <div *ngFor="let d of information">
        {{d}}
</div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  information: any[] = [];
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getSubject().subscribe(data => {
      this.information = data;
    });
  }
}

==============================
Promise ==> single time value is returned from the source
   
rxjs ==> reactive Library ==> series of values over a period time
	==> Dashboard
	==> operators ==> filter, debounce, skip, limit, map, ..
	==> Observable-Observer pattern

------------

Angualr ==> Service class @Injectable ==> can be injected 

Service to share info between components which are not parent-child [@ViewChild, @Input and @Output]

import { delay } from 'rxjs/operators';
import { of, zip } from 'rxjs';

const sourceOne = of('Hello');
const sourceTwo = of('World!');
const sourceThree = of('Goodbye');
const sourceFour = of('World!');
//wait until all observables have emitted a value then emit all as an array
const example = zip(
  sourceOne,
  sourceTwo.pipe(delay(1000)),
  sourceThree.pipe(delay(2000)),
  sourceFour.pipe(delay(3000))
);
//output: ["Hello", "World!", "Goodbye", "World!"]
const subscribe = example.subscribe(val => console.log(val));

=====================================

Fake RESTful services

JSON Server ==> full fake REST API 

npm install -g json-server
json-server --watch data.json --port 1234

OR

npx json-server --watch data.json --port 1234

http://localhost:1234/customers
http://localhost:1234/orders

http://localhost:1234/customers/4

http://localhost:1234/customers?gender=female




 

