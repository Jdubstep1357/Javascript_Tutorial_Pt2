// Constructor - references function that was used to 
// construct or create object

// factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

// 1 is the radius
const circle = createCircle(1);


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);

// comments are regular typeing in, for example var x = true 
// and not var x = new Boolean();
new String(); // '', ""
new Boolean(); // true, false
new Number(); // 1, 2, 3,

let x = {};

// let x = new Object();