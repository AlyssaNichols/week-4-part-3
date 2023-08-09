console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
    console.log('added item:', item)
    basket.push(item);
    return true;
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

addItem('banana');
addItem('orange');


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

