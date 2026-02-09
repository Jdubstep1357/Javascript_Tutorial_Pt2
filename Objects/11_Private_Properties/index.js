<<<<<<< HEAD
=======
// ==================================================
// File: Objects/11_Private_Properties/index.js
// Purpose: Private properties using closures (and why we do it).
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Circle(radius) {

    this.radius = radius;

    let = defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function () {

    }

    this.draw = function () {
        // x and y are local variables only inside function
        let x, y;

        computeOptimumLocation(0.1);

        // this.radius


        // closure determines what variables accessible to inner function
        // variables continue to stay in memory even after being used once
    }

    console.log('draw');
}


const circle = new Circle(10);
circle.computeOptimumLocation();
circle.draw();

// Abstraction - hide details and only show essentials
// think of DVD player - outside has buttons easy - inside complex is inside
<<<<<<< HEAD
/// Hide details only show essentials
=======
/// Hide details only show essentials
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
