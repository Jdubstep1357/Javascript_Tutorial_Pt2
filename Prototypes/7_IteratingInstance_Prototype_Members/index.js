<<<<<<< HEAD
=======
// ==================================================
// File: Prototypes/7_IteratingInstance_Prototype_Members/index.js
// Purpose: Iterating instance vs prototype properties.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Circle(radius) {

    // Instance members
    this.radius = radius;

    this.move = function () {
        console.log('move');
    }
}

// Prottype members
<<<<<<< HEAD
=======
// Shared method: `Circle.prototype.draw()` — stored once and shared by all `Circle` instances.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
Circle.prototype.draw = function () {
    console.log('draw');
}

const c1 = new Circle(1);


// Output (@) ["radius", "move"]
console.log(Object.keys(c1));



// re
// turns all members (instance + prototype)
for (let key in c1) console.log(key);

// useful tool
// c1.hasOwnPropery('radius')
<<<<<<< HEAD
// true
=======
// true
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
