function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


function Circle(radius) {
    this.radius = radius;
}


/* make ShapeBase -> CircleBase */
Circle.prototype = Object.create(Object.prototype); // objectBase
// returns object that inherits from ShapeBase
Circle.prototpe = Object.create(Shape.prototype);


Circle.prototype.draw = function () {
    console.log('draw');
}

// c -> inherits from CircleBase -> Object Base (prototype)
// s -> ShapeBase AKA Shape.prototype -> objectBase (prototype)

const s = new Shape();
const c = new Circle(1);



// 234