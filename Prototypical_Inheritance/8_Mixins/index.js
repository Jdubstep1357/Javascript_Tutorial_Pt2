// --------------------------------------------------
// MIXINS = sharing abilities between unrelated objects
// Instead of inheritance (parent → child),
// we "copy abilities" into objects.
// --------------------------------------------------


// This function copies properties from source objects
// into the target object.
function mixin(target, ...sources) {

    // Object.assign copies methods/properties
    // from each source into the target.
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
function Goldfish() {
    this.hunger = 5;
}

// Give Goldfish the ability to eat and swim
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);
