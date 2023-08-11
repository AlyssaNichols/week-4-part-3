console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


const maxItems = 5;
let basket = [];

/* THIS IS THE ORIGINAL FUNCTION BEFORE THE STRETCH GOAL

function addItem(item){
    console.log('added item:', item)
    basket.push(item);
    return true;
}
*/

function addItem(item){
    if (basket.length < maxItems) {
        console.log('added item:', item)
        basket.push(item);
        return true;
    } else {
        return false
    }
}

console.log(`Basket is ${basket}`);
console.log('Did I add apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

addItem('banana');
addItem('orange');

//basket now contains 3 items: apple, banana, and orange.

function listItems(){
    for (let i=0; i<basket.length; i++){
        console.log(basket[i]);   
    }
}
console.log('basket item 1', basket[0]);
console.log('basket item 2', basket[1]);
console.log('basket item 3', basket[2]);

function empty(basket){
    basket.length = 0;
    return true
}

console.log('is basket empty?', empty(basket));

console.log(basket);

//basket is reset back to an empty array

function isFull(){
    if (basket.length > maxItems){
        return true
    } else {
        return false
    }
}
console.log("Is the basket full? (should return false)", isFull());



// filled basket back up with fruit using the addItem function

console.log(addItem("apple")); // Output: true
console.log(addItem("banana")); // Output: true
console.log(addItem("orange")); // Output: true
console.log(addItem("grape"));  // Output: true
console.log(addItem("kiwi"));   // Output: true
console.log(addItem("melon")); // no room, Output: false

console.log("Is the basket full? (should return true)", isFull());

// couldn't figure out the last stretch goal but will continue to look at it and try to understand what it's asking for.