// make every shape a color
function Shape(color) {
    this.color = color;
}


// Reusable function for constructor
// extend function is Intermediate Function Inheritance
function extend(Child, Parent) {
    Child.prototpe = Object.create(Parent.prototype);
    Circle.prototype.constructor = Circle;
}


Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius, color) {
    // color referenced at bottom
    Shape.call(this, color);
    this.radius = radius;
}

// extends Circle and Shape prototype constructor
extend(Circle, Shape);



Circle.prototype.draw = function () {
    console.log('draw');
}

function Square(size) {
    this.size = size;
}

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;
// IN PLACE OF ABOVE
extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, 'red');