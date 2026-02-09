<<<<<<< HEAD
=======
// ==================================================
// File: Prototypical_Inheritance/9_Cheatsheet/index.js
// Purpose: Prototypical inheritance cheatsheet example code.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
// --------------------------------------------------
// POLYMORPHISM = "many forms"
// --------------------------------------------------
// Different objects can respond to the SAME method
// in DIFFERENT ways.



// ----------------------------------
// PARENT "CLASS"
// ----------------------------------
<<<<<<< HEAD
function Shape() { }

// Default duplicate method (fallback)
=======
// Constructor function `Shape()` — called with `new Shape(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Shape() { }

// Default duplicate method (fallback)
// Shared method: `Shape.prototype.duplicate()` — stored once and shared by all `Shape` instances.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
Shape.prototype.duplicate = function () {
    console.log('duplicate shape');
};



// ----------------------------------
// CHILD CLASS: Circle
// ----------------------------------
<<<<<<< HEAD
=======
// Constructor function `Circle()` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Circle() { }

// Make Circle inherit from Shape
extend(Circle, Shape);

// Circle provides its OWN version of duplicate()
// This OVERRIDES the parent method
<<<<<<< HEAD
=======
// Shared method: `Circle.prototype.duplicate()` — stored once and shared by all `Circle` instances.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
Circle.prototype.duplicate = function () {
    console.log('duplicate circle');
};



// ----------------------------------
// CHILD CLASS: Square
// ----------------------------------
<<<<<<< HEAD
=======
// Constructor function `Square()` — called with `new Square(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Square() { }

// Make Square inherit from Shape
extend(Square, Shape);

// Square also overrides duplicate()
<<<<<<< HEAD
=======
// Shared method: `Square.prototype.duplicate()` — stored once and shared by all `Square` instances.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
Square.prototype.duplicate = function () {
    console.log('duplicate square');
};



// ----------------------------------
// CREATE MULTIPLE OBJECT TYPES
// ----------------------------------
const shapes = [
    new Circle(),
    new Square()
];



// ----------------------------------
// POLYMORPHISM IN ACTION
// ----------------------------------
// SAME LINE OF CODE
// Different behavior depending on object type
<<<<<<< HEAD
=======
// Loop through each item in `shapes`; each time, `shape` is one object from the array.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
for (let shape of shapes)
    shape.duplicate();   // ← FIXED BUG (was shapes.duplicate)


// OLD WAY - Without Polymorhism

/*
<<<<<<< HEAD
=======
// Loop through each item in `shapes`; each time, `shape` is one object from the array.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
for (let shape of shapes) {
    if (shape.type === 'circle')
        duplicateCircle();
    else if (shape.type === 'square')
        duplicateSquare();
    else
        duplicateShape(); 

}
<<<<<<< HEAD
*/
=======
*/
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
