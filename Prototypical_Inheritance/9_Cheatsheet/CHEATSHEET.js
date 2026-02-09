<<<<<<< HEAD

function Shape() { }
function Circle() { }

// Prototypical inheritance 
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Rectangle(color) {
    // To call the super constructor 
=======
// ==================================================
// File: Prototypical_Inheritance/9_Cheatsheet/CHEATSHEET.js
// Purpose: Cheatsheet: quick reference for inheritance/mixins/polymorphism.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================



// Constructor function `Shape()` — called with `new Shape(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Shape() { }
// Constructor function `Circle()` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle() { }

// Prototypical inheritance 
// Inheritance step: make `Circle.prototype` inherit from `Shape.prototype` (so `Circle` instances can use parent methods).
// After this line, remember to reset the constructor: `Child.prototype.constructor = Child`.
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Constructor function `Rectangle(color)` — called with `new Rectangle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Rectangle(color) {
    // To call the super constructor 
// `.call(thisArg, ...)` runs a function but lets you choose what `this` should be inside it.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
    Shape.call(this, color);
}

// Method overriding 
<<<<<<< HEAD
Shape.prototype.draw = function () { }
=======
// Shared method: `Shape.prototype.draw()` — stored once and shared by all `Shape` instances.
Shape.prototype.draw = function () { }
// Shared method: `Circle.prototype.draw()` — stored once and shared by all `Circle` instances.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
Circle.prototype.draw = function () {
    // Call the base implementation 
    Shape.prototype.draw.call(this);

    // Do additional stuff here 
}

// Don't create large inheritance hierarchies. 
// One level of inheritance is fine. 

// Use mixins to combine multiple objects 
// and implement composition in JavaScript. 
const canEat = {
    eat: function () { }
};

const canWalk = {
    walk: function () { }
};

<<<<<<< HEAD
function mixin(target, ...sources) {
    // Copies all the properties from all the source objects 
    // to the target object. 
    Object.assign(target, ...sources);
}

function Person() { }

mixin(Person.prototype, canEat, canWalk);
=======
// Regular function `mixin(target, ...sources)`.
function mixin(target, ...sources) {
    // Copies all the properties from all the source objects 
    // to the target object. 
// `Object.assign(target, sources...)` copies properties/methods from sources onto target (used for mixins).
    Object.assign(target, ...sources);
}

// Constructor function `Person()` — called with `new Person(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Person() { }

mixin(Person.prototype, canEat, canWalk);
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
