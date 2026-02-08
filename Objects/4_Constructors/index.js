// ==================================================
// File: Objects/4_Constructors/index.js
// Purpose: Constructor functions + the `new` keyword.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


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
const circle = createCircle(1);


// Constructor Function
// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

//  without new it just goes to global scope
const another = new Circle(1);


// Both are regular functions in javascript
