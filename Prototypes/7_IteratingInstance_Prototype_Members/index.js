function Circle(radius) {

    // Instance members
    this.radius = radius;

    this.move = function () {
        console.log('move');
    }
}

// Prottype members
Circle.prototype.draw = function () {
    console.log('draw');
}

const c1 = new Circle(1);


// Output (@) ["radius", "move"]
console.log(Object.keys(cc1));



// returns all members (instance + prototype)
for (let key in c1) console.log(key);