class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance method - 
    // available of instance of method ie: object
    draw() {

    }


    // Static method - only tied to class and not object
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = Circle.parse(`{"radius": 1}`);
console.log(circle);

// static method here
Circle.parse();

// use static methods to create utility functons
// that aren't tied to objects