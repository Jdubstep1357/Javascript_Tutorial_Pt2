// Symbol - a unique identifier
const _radius = Symbol();
const _draw = Symbol();

class Circke {
    constructor(radius) {
        // exafctly the same
        // this._radius = radius;
        // this['radius'] = radius;

        this[_radius] = radius;
    }

    // computed property name - expression, when evaluated
    // resulting value used as method
    [_draw]() {

    }
}

// private properties ad methods
const c = new Circle(1);
c._radius();


// 1st approach use _this - NOT IDEAL 
// can be accessed outside of property