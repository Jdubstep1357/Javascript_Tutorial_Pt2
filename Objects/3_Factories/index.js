// factory function
function createCircle(radius) {
    return {
        // key value pairs:
        // radius is same as radius: radius,
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

// 1 is the radius
const circle = createCircle(1);

// constructor function - first letter uppercase
function Circle(radius) {
    // this points to global object
    // global object is window object
    // console.log('this', this);

    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// when using new
// 1. creates empty object
// 2. sets this to point to object
// 3. return that object from this function
const another = new Circle(1);