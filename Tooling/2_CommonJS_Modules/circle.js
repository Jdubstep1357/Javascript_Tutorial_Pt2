// Implementation Detail
// hiding details or complexity inside the module
const _radius = new WeakMap();


// Public Interface
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}

// Gets circle class from circle.js
module.exports = Circle;
