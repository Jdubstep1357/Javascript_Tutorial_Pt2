// ----------------------------------
// PARENT "CLASS"
// ----------------------------------
// Empty constructor function for Shape objects
function Shape() {

}

// Add a method to the Shape prototype.
// Every shape will share this method.
Shape.prototype.duplicate = function () {
    console.log('duplicate');
};



// ----------------------------------
// CHILD "CLASS"
// ----------------------------------
// Circle constructor function
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
Circle.prototype.draw = function () {
    console.log('draw');
};



// ----------------------------------
// CREATING OBJECTS
// ----------------------------------
const s = new Shape();
const c = new Circle(5);
