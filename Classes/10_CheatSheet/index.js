// method overriding - method in base class
// change into implementation to in a direct class
// or direct object

class Shape {
    move() {
        console.log('move');
    }
}


class Circle extends Shape {
    move() {

        // call move in Shape above
        super.move();

        console.log('circle move');
    }
}

const c = new Circle(1);