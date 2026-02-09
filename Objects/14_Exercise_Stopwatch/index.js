<<<<<<< HEAD
=======
// ==================================================
// File: Objects/14_Exercise_Stopwatch/index.js
// Purpose: Stopwatch exercise: encapsulation + state + getters.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
// design a stopwatch object'

// object has: 1 property: duration, 3 methods: reset, start, and stop
// duration shows time
// start - start it
// stop - stops it
// if one tries to use stop twice, or start twice display error
// reset resets duration and places it at 0

// design a stopwatch object

// object has: 1 property: duration, 3 methods: reset, start, and stop
// duration shows time
// start - start it
// stop - stops it
// if one tries to use stop twice, or start twice display error
// reset resets duration and places it at 0

const sw = new Stopwatch();

<<<<<<< HEAD
=======
// Constructor function `Stopwatch()` — called with `new Stopwatch(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running)
            throw new Error('Stopwatch has already started');

        running = true;

        startTime = new Date();

    },

        this.stop = function () {
            if (!running)
                throw new Error('Stopwatch has already stopped');

            running = false;

            endTime = new Date();

            // calculate running time
            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;

        },

        this.reset = function () {
            startTime = null,
                endTime = null,
                running = false,
                duration = 0;
        };

    // getter - returns duration in function
    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    });
}
<<<<<<< HEAD

=======
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
