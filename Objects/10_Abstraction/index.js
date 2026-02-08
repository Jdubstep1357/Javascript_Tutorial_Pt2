// ==================================================
// File: Objects/10_Abstraction/index.js
// Purpose: Abstraction: hide details, expose a simple surface (methods).
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle(radius) {

    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 };

    this.computeOptimumLocation = function () {

    }

    this.draw = function () {
        this.computeOptimumLocation(0.1);
    }

    this.draw = function () {
        console.log('draw');
    };
}


const circle = new Circle(10);
circle.computeOptimumLocation();
circle.draw();

// Abstraction - hide details and only show essentials
// think of DVD player - outside has buttons easy - inside complex is inside
/// Hide details only show essentials
