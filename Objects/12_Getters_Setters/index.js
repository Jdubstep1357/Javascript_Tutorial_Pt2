

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };


    this.getDefaultLocation = function () {
        return defaultLocation;
    };


    this.draw = function () {
        console.log('draw');
    };


    // makes default location read only
    // use definProperty to define getters and setters
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            // part of closuer of inner function, so we can access it
            return defaultLocation;
        },
        set: function () {
            if (!value.x || !value.y)
                throw new Error('Invalid Location');

            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();