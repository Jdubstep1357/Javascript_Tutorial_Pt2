


// has count property - tells how many is on stack
// has 3 methods peek, pop and push
// peek - returns object at top of stack but does not remove it
// pop - removes newest added on stack
// push - adds to stack
// if none and use stack.pop throw error: Stack is empty
// same as peek, whereby at 0 throw error: Stack is empty

// Test123


class Stack {

    // Creating object in class
    constructor(maxSize = 3) {
        this.items = [];
        this.Zero = 0;
        this.maxSize = maxSize;
    }



    // tells how many is in array
    count() {
        return console.log(this.items.length);
    }


    peek() {
        // peek shows how many EXIST, not indexed at one below which is usually 0
        return this.items[this.items.length - 1];

    }

    pop(value) {

        try {
            if(this.items.length <= 0) {
                throw new Error("You cant be less than 0!");
            }
        } catch (err) {
            console.log("ERROR", err.message);
        }

        this.items.pop(value);
    }

    push(value) {

        try {
            if (this.items.length >= this.maxSize) {
                throw new Error("You cannot add more than 3 items to the array");
            }
            this.items.push(value);
        } catch (err) {
            console.log("ERROR", err.message);
        }
    }
    

}


const stack = new Stack()
