// ==================================================
// File: Objects/12_Getters_Setters/index.js
// Purpose: Getters/setters: controlled access to private values.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================




// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };


    this.getDefaultLocation = function () {
        return defaultLocation;
    };


    this.draw = function () {
        console.log('draw');
    };


    // makes default location read only
    // use definProperty to define getters and setters
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            // part of closuer of inner function, so we can access it
            return defaultLocation;
        },
        set: function () {
            if (!value.x || !value.y)
                throw new Error('Invalid Location');

            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();
