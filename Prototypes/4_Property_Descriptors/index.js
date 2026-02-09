<<<<<<< HEAD
=======
// ==================================================
// File: Prototypes/4_Property_Descriptors/index.js
// Purpose: Property descriptors: writable/enumerable/configurable, getters/setters.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
let person = { name: 'Mosh' };


for (let key in person)
    console.log(key);

// cant iterate over all other things in prototype
// Javascript has attributes attached to them
// Attributes prevent property from being enumerated

// get prototype
let objectBase = Object.getPrototypeOf(person);
let descriptor = objectBase.getOwnPropertyDescriptor(objectBase, 'toString');

console.log(descriptor);



// define getter and setter for property
// 1st argument - person
// 2nd argument - name of target property
// 3rd - object - property descriptor add attributes to property
Object.definePropertyMethod(person, 'name', {

    // makes it readonly, cannot change name
    writeable: false,
    // will not show up in object.keys
    enumerable: false,
    // cannot delete property
    configurable: false
});

person.name = 'John';

console.log(Object.keys(person));
<<<<<<< HEAD

=======
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
