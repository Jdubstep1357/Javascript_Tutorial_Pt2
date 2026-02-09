function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}


Circle.call({}, 1);
Circle.apply({}, 1);

const another = new Circle(1);


// const Circle1 = new Function('radius', `
    
//     this.radius - radius;
//     this.draw = function() {
//     cosole.log('draw');
//     }

//     `);

// Circle.call({}, 1)
// same as .call but with array
// /circle.appl({}, [1,2,3])

// same as above
//     const circle = new Circle(1);



