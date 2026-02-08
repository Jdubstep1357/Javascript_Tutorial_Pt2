// ==================================================
// File: Prototypical_Inheritance/7_When_To_Use_Inheritance/index.js
// Purpose: When to use inheritance vs composition/mixins.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// --------------------------------------------------
// POLYMORPHISM = "many forms"
// --------------------------------------------------
// Different objects can respond to the SAME method
// in DIFFERENT ways.



// ----------------------------------
// PARENT "CLASS"
// ----------------------------------
// Constructor function `Shape()` — called with `new Shape(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Shape() { }

// Default duplicate method (fallback)
// Shared method: `Shape.prototype.duplicate()` — stored once and shared by all `Shape` instances.
Shape.prototype.duplicate = function () {
    console.log('duplicate shape');
};



// ----------------------------------
// CHILD CLASS: Circle
// ----------------------------------
// Constructor function `Circle()` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle() { }

// Make Circle inherit from Shape
extend(Circle, Shape);

// Circle provides its OWN version of duplicate()
// This OVERRIDES the parent method
// Shared method: `Circle.prototype.duplicate()` — stored once and shared by all `Circle` instances.
Circle.prototype.duplicate = function () {
    console.log('duplicate circle');
};



// ----------------------------------
// CHILD CLASS: Square
// ----------------------------------
// Constructor function `Square()` — called with `new Square(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Square() { }

// Make Square inherit from Shape
extend(Square, Shape);

// Square also overrides duplicate()
// Shared method: `Square.prototype.duplicate()` — stored once and shared by all `Square` instances.
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
// Loop through each item in `shapes`; each time, `shape` is one object from the array.
for (let shape of shapes)
    shape.duplicate();   // ← FIXED BUG (was shapes.duplicate)


// OLD WAY - Without Polymorhism

/*
// Loop through each item in `shapes`; each time, `shape` is one object from the array.
for (let shape of shapes) {
    if (shape.type === 'circle')
        duplicateCircle();
    else if (shape.type === 'square')
        duplicateSquare();
    else
        duplicateShape(); 

}
*/
