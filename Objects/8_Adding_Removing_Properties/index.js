// ==================================================
// File: Objects/8_Adding_Removing_Properties/index.js
// Purpose: Adding/removing properties; dot vs bracket notation.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

// add whenever we need them rather than use classes

circle.location = { x: 1 };


// bracket notation - useful when accessing dymanic property of name
circle.draw['location'] = { x: 1 };

const propertyName = 'location';
circle[propertyName] = { x: 1 };

// delete property from object
delete circle.location;
