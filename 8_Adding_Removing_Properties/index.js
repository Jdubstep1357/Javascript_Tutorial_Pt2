function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

// add whenever we need them rather than use classes

circle.location = { x: 1 };


// bracket notation - useful when accessing dymanic property of name
circle.draw['location'] = { x: 1 };

const propertyName = 'location';
circle[propertyName] = { x: 1 };

// delete property from object
delete circle.location;