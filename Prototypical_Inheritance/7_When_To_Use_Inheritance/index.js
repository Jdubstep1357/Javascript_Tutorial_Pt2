// --------------------------------------------------
// POLYMORPHISM = "many forms"
// --------------------------------------------------
// Different objects can respond to the SAME method
// in DIFFERENT ways.



// ----------------------------------
// PARENT "CLASS"
// ----------------------------------
function Shape() { }

// Default duplicate method (fallback)
Shape.prototype.duplicate = function () {
    console.log('duplicate shape');
};



// ----------------------------------
// CHILD CLASS: Circle
// ----------------------------------
function Circle() { }

// Make Circle inherit from Shape
extend(Circle, Shape);

// Circle provides its OWN version of duplicate()
// This OVERRIDES the parent method
Circle.prototype.duplicate = function () {
    console.log('duplicate circle');
};



// ----------------------------------
// CHILD CLASS: Square
// ----------------------------------
function Square() { }

// Make Square inherit from Shape
extend(Square, Shape);

// Square also overrides duplicate()
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
for (let shape of shapes)
    shape.duplicate();   // ← FIXED BUG (was shapes.duplicate)


// OLD WAY - Without Polymorhism

/*
for (let shape of shapes) {
    if (shape.type === 'circle')
        duplicateCircle();
    else if (shape.type === 'square')
        duplicateSquare();
    else
        duplicateShape(); 

}
*/