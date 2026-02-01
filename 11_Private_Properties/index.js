function Circle(radius) {

    this.radius = radius;

    let = defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function () {

    }

    this.draw = function () {
        // x and y are local variables only inside function
        let x, y;

        computeOptimumLocation(0.1);

        // this.radius


        // closure determines what variables accessible to inner function
        // variables continue to stay in memory even after being used once
    }

    console.log('draw');
}


const circle = new Circle(10);
circle.computeOptimumLocation();
circle.draw();

// Abstraction - hide details and only show essentials
// think of DVD player - outside has buttons easy - inside complex is inside
/// Hide details only show essentials