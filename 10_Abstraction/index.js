function Circle(radius) {

    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 };

    this.computeOptimumLocation = function () {

    }

    this.draw = function () {
        this.computeOptimumLocation(0.1);
    }

    this.draw = function () {
        console.log('draw');
    };
}


const circle = new Circle(10);
circle.computeOptimumLocation();
circle.draw();

// Abstraction - hide details and only show essentials
// think of DVD player - outside has buttons easy - inside complex is inside
