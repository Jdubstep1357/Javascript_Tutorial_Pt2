function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

for (let key in circle) {



    // every iteration every key will have one iteration
    console.log(key);
    // output: radius draw

    // output: radius 10 draw function
    console.log(key, circle[key]);


    if (typeof circle[key] !== 'function')
        console.log(key, circle[key])
    // displays radius
}

// returns all keys in circle as array
Object.keys(circle);
console.log(keys);

// check if property has something
if ('radius' in cricle) {
    console.log('circle has a radius');
}