console.log(number);

// function declaration are hoisted, or raised to top of code
sayHello();

// Will NOT work
sayGoodbye();



// Function Declaration
function sayHello() { }

// Function Expression
const sayGoodbye = function () { };
const number = 1;



//  Classes are NOT hoisted!
// class Declaration - MOST COMMON
class Circle {

}


// Class Expression
const Square = class {

};
