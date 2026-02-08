// -----------------------------
// PARENT "CLASS"
// -----------------------------
// This is a constructor function.
// It creates Shape objects.
function Shape(color) {
    // "this" refers to the new object being created
    // Every Shape will have a color property
    this.color = color;
}


// Methods that should be shared by ALL Shapes
// are put on the prototype (so they are not duplicated in memory)
Shape.prototype.duplicate = function () {
    console.log('duplicate');
};



// -----------------------------
// CHILD "CLASS"
// -----------------------------
// Circle will INHERIT from Shape
function Circle(radius, color) {

    // Call the Shape constructor and pass "this"
    // This gives Circle objects the "color" property
    // Equivalent to: super(color) in other languages
    Shape.call(this, color);

    // Property specific to Circle objects
    this.radius = radius;
}



// -----------------------------
// SETTING UP INHERITANCE
// -----------------------------

// Make Circle inherit from Shape
// This creates a new object whose prototype is Shape.prototype
Circle.prototype = Object.create(Shape.prototype);

// After replacing the prototype, we must reset constructor.
// Otherwise Circle.prototype.constructor would incorrectly point to Shape.
Circle.prototype.constructor = Circle;



// -----------------------------
// METHODS SPECIFIC TO CIRCLE
// -----------------------------

// This method will exist only on Circle objects
Circle.prototype.draw = function () {
    console.log('draw');
};
