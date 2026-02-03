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

