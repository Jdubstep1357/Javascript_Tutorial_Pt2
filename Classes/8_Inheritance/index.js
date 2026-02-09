class Shape {

    // Adding color to shapes
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('moved');
    }
}


// inherits from class shape
class Circle extends Shape {

    constructor(color, radius) {
        // super keyword references parent object
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle('red', 12);