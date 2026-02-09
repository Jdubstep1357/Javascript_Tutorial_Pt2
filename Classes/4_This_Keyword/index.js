// when using strict mode will set things from undefined
// prevents us from modifing the global object
`use strict`;



const Circle = function () {
    this.draw = function () { console.log(this); }
};

const c = new Circle();
// method call - call method on an object - draw -> c
c.draw();

const draw = c.draw();
// function call - call like stand alone function
draw();


class Circle2 {
    draw() {
        console.log(this);
    }
}

const c2 = new Circle2();
const draw2 = c2.draw2;
draw2();

// result: undefined
// body of classes executed in strict mode