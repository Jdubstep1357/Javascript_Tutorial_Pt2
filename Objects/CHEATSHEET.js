// ==================================================
// File: Objects/CHEATSHEET.js
// Purpose: Objects cheatsheet: quick examples of patterns learned.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// The simplest way to create an object is using an object literal 
const circle = {
    radius: 1,
    draw: function () { }
};

// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 

// Factory function 
// Regular function `createCircle(radius)`.
function createCircle(radius) {
    return {
        radius,
        draw: function () { }
    }
}

// Constructor function 
// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle(radius) {
    this.radius = radius;
    this.draw = function () { }
}

// Every object has a "constructor" property which returns the function that was used to construct or create that object. 
const x = {};
x.constructor; // returns Object() 

// In JavaScript, functions are objects. They have properties and methods. 
Circle.name;
Circle.length;
Circle.constructor; // returns Function()
// `.call(thisArg, ...)` runs a function but lets you choose what `this` should be inside it.
Circle.call({}, 1); // to call the Circle function 
// `.apply(thisArg, [args])` is like `.call`, but arguments are passed as an array.
Circle.apply({}, [1]);

// Value types are copied by their value, reference types are copied by their reference. 
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array 

// JavaScript objects are dynamic. You can add/remove properties: 
circle.location = {};
circle['location'] = {};

delete circle.location;

// To enumerate the members in an object: 
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle);

// To see if an object has a given property
if ('location' in circle)

    // Abstraction means hiding the complexity/details and showing only the essentials. 
    // We can hide the details by using private members. Replace "this" with "let". 

// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
    function Circle(radius) {
        // Public member 
        this.radius = radius;

        // Private member                       
        let defaultLocation = {};
    }

// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, 'defaultLocation', {
    get: function () { return defaultLocation; },
    set: function (value) { defaultLocation = value; }
});
