// Design 2 objects: HTMLElement, HTMLSelectElement


// one method - click - prototype other method focus
// console.log clicked that says clicked. e.focu is focused


function HTMLElement() {
    this.click = function () {
        console.log("Clicked");
    }
}

HTMLElement.prototype.focus = function () {
    console.log("Focused");
}


function HTMLSelectElement(items = []) {
    this.items = items;

    this.addItem = function (items) {
        this.items.push(items);
    }

    this.removeItem = function (items) {
        this.items.splice(this.items.indexOf(items), 1);
    }

}

// HTMLSelectElement.prototype.addItem = function () {
//     items.push();
//     console.log("Item added");
// }

// HTMLSelectElement.prototype.removeItem = function () {
//     console.log("Item removed");
// }



const e = new HTMLElement();
// HTMLSelectElement
const s = new HTMLSelectElement([]);

// has items property which is intiially an empty array
// Has addItem and removeItem
// s.addItem adds one item and displays it on array

//456