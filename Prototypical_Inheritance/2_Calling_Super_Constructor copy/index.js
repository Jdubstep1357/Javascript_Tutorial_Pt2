<<<<<<< HEAD
=======
// ==================================================
// File: Prototypical_Inheritance/2_Calling_Super_Constructor copy/index.js
// Purpose: Calling a parent constructor with call() (super constructor).
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
// ----------------------------------
// PARENT "CLASS"
// ----------------------------------
// Empty constructor function for Shape objects
<<<<<<< HEAD
=======
// Constructor function `Shape()` — called with `new Shape(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Shape() {

}

// Add a method to the Shape prototype.
// Every shape will share this method.
<<<<<<< HEAD
=======
// Shared method: `Shape.prototype.duplicate()` — stored once and shared by all `Shape` instances.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
Shape.prototype.duplicate = function () {
    console.log('duplicate');
};



// ----------------------------------
// CHILD "CLASS"
// ----------------------------------
// Circle constructor function
<<<<<<< HEAD
=======
// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Circle(radius) {
    this.radius = radius;
}



// ----------------------------------
// SETTING UP INHERITANCE
// ----------------------------------

// We want Circle to inherit from Shape.
// This line makes Circle objects able to use Shape methods.
//
// It creates a NEW object whose prototype is Shape.prototype,
// and assigns it to Circle.prototype.
<<<<<<< HEAD
=======
// Inheritance step: make `Circle.prototype` inherit from `Shape.prototype` (so `Circle` instances can use parent methods).
// After this line, remember to reset the constructor: `Child.prototype.constructor = Child`.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
Circle.prototype = Object.create(Shape.prototype);

/*
⚠️ BIG SIDE EFFECT:
When we replaced Circle.prototype above,
we accidentally erased the default constructor reference.

Now Circle.prototype.constructor incorrectly points to Shape.
So JavaScript thinks Circle objects were created by Shape 😬
*/


// Fix the constructor reference so it points back to Circle.
Circle.prototype.constructor = Circle;



// ----------------------------------
// METHODS UNIQUE TO CIRCLE
// ----------------------------------
<<<<<<< HEAD
=======
// Shared method: `Circle.prototype.draw()` — stored once and shared by all `Circle` instances.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
Circle.prototype.draw = function () {
    console.log('draw');
};



// ----------------------------------
// CREATING OBJECTS
// ----------------------------------
const s = new Shape();
<<<<<<< HEAD
const c = new Circle(5);
=======
const c = new Circle(5);
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
