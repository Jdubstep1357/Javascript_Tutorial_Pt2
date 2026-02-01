// factory function

function createCircle(radius) {
    return {
        // key value pairs:
        // radius is same as radius: radius,
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

// 1 is the radius
const circle = createCircle(1);
circle.draw();