<<<<<<< HEAD
=======
// ==================================================
// File: Objects/9_Enumerating_Properties/index.js
// Purpose: Enumerating properties: for...in, Object.keys, in operator.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

for (let key in circle) {



    // every iteration every key will have one iteration
    console.log(key);
    // output: radius draw

    // output: radius 10 draw function
    console.log(key, circle[key]);


    if (typeof circle[key] !== 'function')
        console.log(key, circle[key])
    // displays radius
}

// returns all keys in circle as array
Object.keys(circle);
console.log(keys);

// check if property has something
if ('radius' in cricle) {
    console.log('circle has a radius');
<<<<<<< HEAD
}
=======
}
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
