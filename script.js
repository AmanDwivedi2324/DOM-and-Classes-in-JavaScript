/*
--> Classes in JS => Class is a program-code template for creating objects. Those objects will have some state(variables) and some behaviour(functions) inside it.

Example => 

class MyClass{
    constructor(){}
    myMethod(){}
}

let myObj = new MyClass();


Constructor() method is:
    - automatically invoked by new 
    - initializes object 

*/

// class Car{
//     constructor(brand,mileage){
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner = new Car("fortuner",10);
// fortuner.start();
// fortuner.stop();

/*

 --> Inheritance in JS => Inheritance in js in passing down properties and methods from parent class to child class. 'extends' keyword is used for inheritance.

class Parent{

}

class Child extends Parent{

}

=> If child and parent have same method, child's method will be used, (method overriding)

*/

// const student = {
//     name : "aman",
//     marks : 21,
//     printMarks : function(){
//         console.log("marks ", this.marks); //this.marks = student.marks
//     }
// }

// console.log(student);



// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }

// const aman = {
//     salary : 50000
// }

// aman.__proto__ = employee;

// console.log(aman);


/*

 --> super keyword ==> The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

super(args);       //call parent's constructor

super.parentMethod(args);

*/

// class Person{
//     constructor(){
//         this.species = "Homo Sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person{
//     constructor(branch){
//         super();                         //to invoke parent class constructor
//         this.branch = branch;         //it is compulsory to call parent constructor with this keyword before calling child's constructor, othrwise error ayegi
//     }
//     work(){
//         console.log("work");
//     }
// }

// let eng = new Engineer("AIML");


/*
    Ques 1 => You are creating a website for your college. Create a class User with 2 properties, name and email. It has a method called viewData() that allows user to view website data.



class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data");
    }
}

let user1 = new User("aman","@gmail.com");

*/

/*

    Ques 2 => Create a new class Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.



class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data");
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        console.log("editData");
    }
}

let admin1 = new Admin("aman","@gmail.com");

*/


/*

--> Window Object ==> The window object represents an open window in a browser. It is browser's object(not of js) and is automatically created by browser.

It is global object with lots of properties and methods.

It is the topmost object in the browser's hierarchy and provides various methods, properties, and events that you can use to interact with the browser environment.

window object k andar document object jo html ke content ko contain karta hai and html ka sara content js me akar object me convert ho jata hai

*/


/*

 --> DOM (Document object model) ==> When a web page is loaded, the browser creates a D0M of the page.

The DOM in js is a programming interface that allows developers to interact with and manipulate the structure, style, and content of HTML documents.

It represents the HTML page as a tree of objects, with each element on the page being a node in this tree. JS can access and modify the DOM to dynamically change the web page content and layout.

*/

/*

 --> DOM Manipulation ==> 

     --> selecting with id => document.getElementById("myId");

     --> selecting with class => document.getElementsByClassName("myClass");

     --> selecting with tag => document.getElementsByTagName("p");

     
     --> document.querySelector("#myId / .myClass / tag");       ==> returns first element 

     --> document.querySelectorAll("#myId / .myClass / tag");    ==> returns a nodeList

*/

/*

 --> Properties ==> 

       --> tagName => returns tag for element nodes                   (element.tagName)

       --> innerText => returns the text content of the element and all its children              

       --> innerHTML => returns the plain text or HTML contents in the element

       --> textContent => returns textual content even for hidden elements

*/

/*

Practice question => 

    Ques 1 => Create a H2 heading element with text - "Hello JavaScript". Append "aman" to this text using JS.



var last = " from apna college students.."
let h2 = document.querySelector("#hello");
h2.innerText += last;   

*/

/*

    Ques 2 => Create 3 divs with common class name - "box". Access them and add some unique text to each of them.



let idx = 1;
let boxes = document.querySelectorAll(".box");
for(box of boxes){
    box.innerText = `new unique text ${idx}`;
    idx++;
}

*/


/*

 Attributes --> 

    --> getAttribute(attr)      //to get the attribute value         (div.getAttribute("id"));

    --> setAttribute(attr,value)    //to set the attribute value


*/

/*

 Style --> node.style

*/

/*

 --> Insert elements ==> two step process = first create the element ==> let el = document.createElement("div");
                                             = second add

    --> node.append(el);    //adds at the end of the node(inside)

    --> node.prepend(el);    //adds at the start of node (inside)

    --> node.befor(el);     //adds before the node (outside)
 
    --> node.after(el);     //adds after the node (outside)

*/

/*

 --> delete element ==> node.remove()        //removes the node


*/

/*
--> Ques 1 ==> Create a new button element. Give it a text "click me", background color of red and text color of white. Insert the button as the first element inside the body tag.



let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
newBtn.style.cursor = "pointer";

let body = document.querySelector("body");
body.prepend(newBtn);

*/


/*

--> Ques 2 ==> Create a <p> tag in html, give it a class and some styling. Now create a new class in CSS and try to append this class to the <p> element. Did you notice, how you overwrite the class name when you add a new class. Solve this problem using classList.


let para = document.querySelector("p");
//para.setAttribute("class","newClass");               overwrite the content class so we use classList

para.classList.add("newClass");

*/

/*

 Events in js --> The change in the state of an object is known as an event.
                     Events are fired to notify code of "interesting changes" that may affect code execution.

                     --> Mouse events (click,doubleClick,mouseenter,mouseleave,mousemove,mouseover,etc.)
                     --> keyboard events (keypress,keyup,keydown)
                     --> form events (submit,etc.)
                     --> print event and many more

Event object ==> It is a special object that has details about the event. All the handlers have access to the event object's properties and methods.

node.event = (e) => {
    //handle here
}


Event listeners ==> 

            node.addEventListener(event,callback)
            node.removeEventListener(event,callback)

            note ==> the calllback reference should be same to remove


*/

/*

Ques 1 ==> Create a toggle (that switch between two states) button that changes the screen to dark-mode when clicked and light-mode when clicked again


let idx = 0;
let screen = document.querySelector("body");
document.querySelector("#mode").addEventListener("click",function(){
    if(idx === 0){
        screen.style.backgroundColor = "black";
        idx = 1;
    }
    else if(idx ===1){
        screen.style.backgroundColor = "white";
        idx = 0;
    }
})

*/

/*

 Closures --> In js, a closure is a feature where an inner function has access to the outer function's variables even after the outer function has finished executing.
                This allows the inner function to "close over" its environment, preserving the state of the  variables from the outer function.

                --> When a function is defined inside another function, it forms a closure. The inner function retains access to the outer function's scope, which includes:

                1) = variables declared in the outer function.
                2) = Parameters of the outer function.
                3) = Variables declared in the global scope.


                ---(ek parent function jo return kre ek aur function aur return hone wala function use kare parent function ka koi variable)

Example ==> 1

function outerFunction(){
    let outerVariable = "I am outer variable";

    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
}

const closureFunction = outerFunction();
console.log(closureFunction());

Example ==> 2

function parentFunction(){
    var x = "andar wala function use kr rha hai bahar wale function k variable ko ise hi kehte hai closures";
    return function(){
        console.log(x);
    }
}

var ans = parentFunction();
console.log(ans());

*/

/*

 --> Null and undefined ==>  null ==> (kuch nhi, we try to find something but there is nothing)
                                undefined ==> (variable declare but not initialised , that is variable has undefined)       var a; ==> this will give undefined*

*/

/*

 --> Event Bubbling and Event capturing ==>

            ==> Event bubbling ==> Event propagates from target to root.

            ==> Event capturing ==> Event propagates from root to target. Enabled by setting the third parameter of addEventListener to true



//Event bubbling

// document.querySelector("#parent").addEventListener("click",function(){
    alert("parent");
})

document.querySelector("#superchild").addEventListener("click",function(){
    alert("superchild");
})

//khud pr hai to khud ka bhi chalayega phir parent ka chalayega (move from superchild to parent jo milega use chalayega jo nhi milega use skip kr dega)

Event capturing

document.querySelector("#parent").addEventListener("click",function(){
    alert("parent");
},true)

document.querySelector("#superchild").addEventListener("click",function(){
    alert("superchild");
},true)

// parent ka pehle phir khudka , child ka nhi chalata like parent ka event chalane pr child ya super child ka nhi chalega but superchild ya child ka chalayenge to pehle parent ka chalega phir hi child superchild ka chalega

*/

/*

--> Use Strict ==> "use strict" is a directive in js that enables strict mode, which is a way to opt into a restricted variant of js. It helps catch common coding errors and "unsafe" actions, leading to more robust and maintainable code.
     We can use it by writing "use strict"; to the top.

                    -> variable declaration       //without using use strict => a = 12 is right but with use strict => a = 12 will give error
                    -> can't delete the variable     //without using use strict delete word can't give any error but with use strict it will give
                    -> can't make same parameters in functions         //function(a,b,b){} => not give any error but with use strict it will give error
                    ->


"use strict";

a = 12;
delete a;
function sum(a,b,b){

}

*/

/*

 --> Eventloop => The event loop is a fundamental concept in js that allows the language to perform non-blocking operations, despite being single-threaded. It enables asynchronous programming by managing the execution of code, collecting and processing events, and executing queued sub-tasks.

*/


