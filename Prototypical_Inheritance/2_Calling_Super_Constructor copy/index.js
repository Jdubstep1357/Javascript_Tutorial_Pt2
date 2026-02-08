function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius) {
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
const c = new Circle();