const _radius = new WeakMap();
// define a private method
const _move = new WeakMap();
const privateProps = new WeakMap();

class Circle {
    constructor(radius) {

        // Enter in all private props and property

        // personally, too polluted.
        // better to work with each member privately
        privateProps.set(this, {
            radius: radius,
            move: () => {
            }
        });

        // accessing all in one
        privateProps.get(this).radius;


        _radius.set(this, radius);


        // access all public and private properties
        _move.set(this, () => {
            console.log('move', this);
        });
    }

    // Accessing this on class Circle
    draw() {
        // returns and calls function
        _move.get(this)();

        console.log('draw');
    }
}

const c = new Circle(1);