<<<<<<< HEAD
// ... collects all arguments and turns into array
function mixin(target, ...sources) {
=======
// ==================================================
// File: Prototypical_Inheritance/6_Polymorphism/index.js
// Purpose: Polymorphism: same method name, different behavior per child type.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// ... collects all arguments and turns into array
// Regular function `mixin(target, ...sources)`.
function mixin(target, ...sources) {
// `Object.assign(target, sources...)` copies properties/methods from sources onto target (used for mixins).
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
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

<<<<<<< HEAD
=======
// Constructor function `Person()` — called with `new Person(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Person() {
    // Add any properties specific to objects
}


// create person that can eat and walk
// Added person the ability to can eat and walk
mixin(Person.prototype, canEat, canWalk);
console.log(person);

<<<<<<< HEAD
=======
// Constructor function `Goldfish()` — called with `new Goldfish(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Goldfish() {

}

// modify prototype of goldfish
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
<<<<<<< HEAD
console.log(goldfish);
=======
console.log(goldfish);
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
