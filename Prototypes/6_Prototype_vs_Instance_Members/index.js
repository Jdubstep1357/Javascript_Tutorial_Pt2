function Circle(radius) {
    // instance members
    this.radius = radius;


    /* Prototype members */
    // moved this to parent prototype
    // this.draw = function () {
    //     console.log('draw');
    // }

    this.move = function () {
        this.draw();
        console.log('move');
    }

}

/* Prototype members */
// to run type c1.draw on console
Circle.prototype.draw = function () {
    console.log('draw');
}



const c1 = new Circle(1);
const c2 = new Circle(2);


// to run type c1.toString() on console
Circle.prototype.toString = function () {
    return "Circle with radius " + this.radius;
}