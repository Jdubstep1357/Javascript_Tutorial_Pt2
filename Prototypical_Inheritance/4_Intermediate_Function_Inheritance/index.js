// ----------------------------------
// PARENT "CLASS"
// ----------------------------------
// Every shape should have a color
function Shape(color) {
    this.color = color;
}


// ----------------------------------
// REUSABLE INHERITANCE HELPER
// ----------------------------------
// This function sets up inheritance between any Child and Parent.
// It prevents us from repeating the same prototype code over and over.
function extend(Child, Parent) {

    // Create a new prototype object for the Child
    // that inherits from the Parent prototype.
    // This gives the child access to the parent's methods.
    Child.prototype = Object.create(Parent.prototype);

    // After replacing the prototype, we must reset constructor.
    // Otherwise it would incorrectly point to Parent.
    Child.prototype.constructor = Child;
}


// Shared method for ALL shapes
Shape.prototype.duplicate = function () {
    console.log('duplicate');
};



// ----------------------------------
// CIRCLE CHILD CLASS
// ----------------------------------
function Circle(radius, color) {

    // Call the parent constructor to copy the "color" property
    // Equivalent to super(color)
    Shape.call(this, color);

    // Property unique to Circle
    this.radius = radius;
}

// Make Circle inherit from Shape using our helper
extend(Circle, Shape);


// Circle-specific method
Circle.prototype.draw = function () {
    console.log('draw');
};



// ----------------------------------
// SQUARE CHILD CLASS
// ----------------------------------
function Square(size) {
    this.size = size;
}

// Instead of writing prototype code again,
// we reuse the extend() helper
extend(Square, Shape);



// ----------------------------------
// CREATING OBJECTS
// ----------------------------------
const s = new Shape('blue');
const c = new Circle(1, 'red');
