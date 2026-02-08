// ==================================================
// File: Prototypical_Inheritance/8_Mixins/index.js
// Purpose: Mixins: composition by copying abilities into prototypes.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// --------------------------------------------------
// MIXINS = sharing abilities between unrelated objects
// Instead of inheritance (parent → child),
// we "copy abilities" into objects.
// --------------------------------------------------


// This function copies properties from source objects
// into the target object.
// Regular function `mixin(target, ...sources)`.
function mixin(target, ...sources) {

    // Object.assign copies methods/properties
    // from each source into the target.
// `Object.assign(target, sources...)` copies properties/methods from sources onto target (used for mixins).
    Object.assign(target, ...sources);
}



// --------------------------------------------------
// ABILITIES (FEATURE PACKS)
// --------------------------------------------------
// These are reusable behavior objects.

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
        console.log('swimming');
    }
};



// --------------------------------------------------
// PERSON "CLASS"
// --------------------------------------------------
// Constructor function `Person()` — called with `new Person(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Person() {
    // Here we could add Person-specific properties
    this.hunger = 10;
}

// Give Person the ability to eat and walk
mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);



// --------------------------------------------------
// GOLDFISH "CLASS"
// --------------------------------------------------
// Constructor function `Goldfish()` — called with `new Goldfish(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Goldfish() {
    this.hunger = 5;
}

// Give Goldfish the ability to eat and swim
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);