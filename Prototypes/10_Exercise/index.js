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


// move methods start stop ect to prototype of stopwatch
// To note, don't have multiple copies of methods in memory
// use only one instance

// define public read only property and access with this







const sw = new Stopwatch();

function Stopwatch() {
    let startTime, endTime, running, duration = 0;



    // getter - returns duration in function
    Object.defineProperty(this, 'duration', {
        get: function () { return duration; },
        set: function (value) { duration = value }
    });

    Object.defineProperty(this, 'startTime', {
        get: function () { return startTime; }
    });

    Object.defineProperty(this, 'endTime', {
        get: function () { return endTime; }
    });

    Object.defineProperty(this, 'running', {
        get: function () { return running; }
    });
}



/* PROTOTYPE WORKS HERE */

// moves it to parent prototype


Stopwatch.prototype.start = function () {
    if (this.running)
        throw new Error('Stopwatch has already started');

    this.running = true;

    this.startTime = new Date();

},

    Stopwatch.prototype.stop = function () {
        if (!this.running)
            throw new Error('Stopwatch has already stopped');

        this.running = false;

        this.endTime = new Date();

        // calculate running time
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        // duration comes from set from Object
        this.duration += seconds;

    },

    Stopwatch.prototype.reset = function () {
        this.startTime = null,
            this.endTime = null,
            this.running = false,
            this.duration = 0;
    };




/* PROTOTYPE ENDS HERE */
