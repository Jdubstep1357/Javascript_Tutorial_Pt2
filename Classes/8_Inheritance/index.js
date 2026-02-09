const _radius = new WeakMap();

// read _radius outside of constructor

class Circle {
    constrctor(radius) {
        _radius.set(this, radius);
    }
    // OLD WAY
    // Object.defineProperty(this, 'radius', {
    //     get: function() {

    //     }
    // });


    // GETTER
    get radius() {
        return _radius.get(this);
    }

    // SETTER
    set radius(value) {
        if (value <= 0) throw new Error('invalid radius');
        _radius.set(this, value);
    }

}

const c = new Circle(1);