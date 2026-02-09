// ----------------------------------
// PARENT "CLASS"
// ----------------------------------
function Shape() {

}

// Method shared by all Shapes
Shape.prototype.duplicate = function () {
    console.log('duplicate');
};



// ----------------------------------
// CHILD "CLASS"
// ----------------------------------
function Circle(radius) {
    this.radius = radius;
}



// ----------------------------------
// UNDERSTANDING THE PROTOTYPE CHAIN
// ----------------------------------

/*
Every object in JavaScript ultimately inherits from Object.prototype.

Prototype chain we WANT:

c (Circle object)
   -> Circle.prototype
       -> Shape.prototype
           -> Object.prototype
               -> null
*/

// Make Circle inherit from Shape
Circle.prototype = Object.create(Shape.prototype);

// Reset constructor after replacing prototype
Circle.prototype.constructor = Circle;



// Circle-specific method
Circle.prototype.draw = function () {
    console.log('draw');
};



// ----------------------------------
// CREATE OBJECTS
// ----------------------------------
const s = new Shape();
const c = new Circle(1);
