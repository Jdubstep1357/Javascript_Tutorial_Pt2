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

