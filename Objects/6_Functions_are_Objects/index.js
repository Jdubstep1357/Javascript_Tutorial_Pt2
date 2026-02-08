// ==================================================
// File: Objects/6_Functions_are_Objects/index.js
// Purpose: Functions are objects: call/apply, and how constructors are just functions.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}


// `.call(thisArg, ...)` runs a function but lets you choose what `this` should be inside it.
Circle.call({}, 1);
// `.apply(thisArg, [args])` is like `.call`, but arguments are passed as an array.
Circle.apply({}, 1);

const another = new Circle(1);


// const Circle1 = new Function('radius', `
    
//     this.radius - radius;
//     this.draw = function() {
//     cosole.log('draw');
//     }

//     `);

// Circle.call({}, 1)
// same as .call but with array
// /circle.appl({}, [1,2,3])

// same as above
//     const circle = new Circle(1);


