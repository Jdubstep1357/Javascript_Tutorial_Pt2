// ... collects all arguments and turns into array
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}



const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walking');
    }
};

const canSwim = {
    swim: function () {
        console.log('swim');
    }
};

function Person() {
    // Add any properties specific to objects
}


// create person that can eat and walk
// Added person the ability to can eat and walk
mixin(Person.prototype, canEat, canWalk);
console.log(person);

function Goldfish() {

}

// modify prototype of goldfish
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);