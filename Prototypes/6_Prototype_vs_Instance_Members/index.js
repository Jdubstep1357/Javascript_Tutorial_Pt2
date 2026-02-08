// ==================================================
// File: Prototypes/6_Prototype_vs_Instance_Members/index.js
// Purpose: Prototype vs instance members (memory + sharing).
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle(radius) {
    // instance members
    this.radius = radius;


    /* Prototype members */
    // moved this to parent prototype
    // this.draw = function () {
    //     console.log('draw');
    // }

    this.move = function () {
        this.draw();
        console.log('move');
    }

}

/* Prototype members */
// to run type c1.draw on console
// Shared method: `Circle.prototype.draw()` — stored once and shared by all `Circle` instances.
Circle.prototype.draw = function () {
    console.log('draw');
}



const c1 = new Circle(1);
const c2 = new Circle(2);


// to run type c1.toString() on console
// Shared method: `Circle.prototype.toString()` — stored once and shared by all `Circle` instances.
Circle.prototype.toString = function () {
    return "Circle with radius " + this.radius;
}
