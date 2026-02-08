// make every shape a color
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius, color) {
    // color referenced at bottom
    Shape.call(this, color);

    this.radius = radius;
}

// type c in the console
// we cant create Circle objects in a dnamic fashion
// Problem: reset prototype of circle
Circle.prototype = Object.create(Shape.prototype);

// Solution: reset constructor
Circle.prototype.constructor = Circle;


Circle.prototype.draw = function () {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1, 'red');