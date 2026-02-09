<<<<<<< HEAD
// factory function
=======
// ==================================================
// File: Objects/3_Factories/index.js
// Purpose: Factory functions: functions that return new objects.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// factory function
// Regular function `createCircle(radius)`.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function createCircle(radius) {
    return {
        // key value pairs:
        // radius is same as radius: radius,
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

// 1 is the radius
const circle = createCircle(1);

// constructor function - first letter uppercase
<<<<<<< HEAD
=======
// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Circle(radius) {
    // this points to global object
    // global object is window object
    // console.log('this', this);

    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// when using new
// 1. creates empty object
// 2. sets this to point to object
// 3. return that object from this function
<<<<<<< HEAD
const another = new Circle(1);
=======
const another = new Circle(1);
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
