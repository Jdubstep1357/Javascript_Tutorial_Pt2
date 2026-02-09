// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function () {
//         console.log('draw');
//     }
// }



class Circle {
    // body of class

    // used to initialize class
    constructor(radius) {
        this.radius = radius;
        this.move = function () { }
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle(1);