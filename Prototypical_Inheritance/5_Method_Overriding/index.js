// --------------------------------------------
// HELPER FUNCTION: sets up inheritance
// --------------------------------------------
// This lets any Child "inherit" from a Parent
function extend(Child, Parent) {

    // Create a new prototype object for Child
    // that inherits from Parent.prototype
    // (This is the core of JavaScript inheritance)
    Child.prototype = Object.create(Parent.prototype);

    // After replacing the prototype, we must fix the constructor
    // Otherwise it would incorrectly point to Parent.
    Child.prototype.constructor = Child;
}



// --------------------------------------------
// PARENT "CLASS"
// --------------------------------------------
function Shape() {

}

// Method shared by ALL shapes
Shape.prototype.duplicate = function () {
    console.log('duplicate from Shape');
};



// --------------------------------------------
// CHILD "CLASS"
// --------------------------------------------
function Circle() {

}

// Make Circle inherit from Shape
extend(Circle, Shape);



// --------------------------------------------
// METHOD OVERRIDING
// --------------------------------------------
// Circle already inherited duplicate() from Shape,
// but now we REPLACE it with a new version.
//
// This is called "method overriding".
Circle.prototype.duplicate = function () {

    // Call the parent version FIRST
    // This is like calling super.duplicate() in other languages
    Shape.prototype.duplicate.call(this);

    // Then run Circle's own behavior
    console.log('duplicate from Circle');
};



// --------------------------------------------
// CREATE OBJECT
// --------------------------------------------
const c = new Circle();
