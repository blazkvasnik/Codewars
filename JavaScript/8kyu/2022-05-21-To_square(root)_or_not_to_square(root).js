// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {

    //why do i have to have 2x return

    // return array.map(value => Math.sqrt(value) % 1 == 0 ? Math.sqrt(value) : Math.pow(value,2));
    //Works

    return array.map(value =>{
        return Math.sqrt(value) % 1 == 0 ? Math.sqrt(value) : Math.pow(value,2)     
    });
}