// factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);


// Constructor Function
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

//  without new it just goes to global scope
const another = new Circle(1);


// Both are regular functions in javascript