// ==================================================
// File: Objects/5_Constructor_Property/index.js
// Purpose: The `constructor` property and how objects know who created them.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// Constructor - references function that was used to 
// construct or create object

// factory function
// Regular function `createCircle(radius)`.
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

// 1 is the radius
const circle = createCircle(1);


// Constructor Function
// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);

// comments are regular typeing in, for example var x = true 
// and not var x = new Boolean();
new String(); // '', ""
new Boolean(); // true, false
new Number(); // 1, 2, 3,

let x = {};

// let x = new Object();
