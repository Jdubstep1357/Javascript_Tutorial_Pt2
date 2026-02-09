<<<<<<< HEAD
=======
// ==================================================
// File: Objects/5_Constructor_Property/index.js
// Purpose: The `constructor` property and how objects know who created them.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
// Constructor - references function that was used to 
// construct or create object

// factory function
<<<<<<< HEAD
=======
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

// 1 is the radius
const circle = createCircle(1);


// Constructor Function
<<<<<<< HEAD
=======
// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
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

<<<<<<< HEAD
// let x = new Object();
=======
// let x = new Object();
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
