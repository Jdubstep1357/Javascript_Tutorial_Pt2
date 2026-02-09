<<<<<<< HEAD
// factory function
=======
// ==================================================
// File: Objects/4_Constructors/index.js
// Purpose: Constructor functions + the `new` keyword.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// factory function
// Regular function `createCircle(radius)`.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
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
<<<<<<< HEAD
=======
// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

//  without new it just goes to global scope
const another = new Circle(1);


<<<<<<< HEAD
// Both are regular functions in javascript
=======
// Both are regular functions in javascript
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
