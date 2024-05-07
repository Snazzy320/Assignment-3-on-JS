// Area of a rectangle
// L *  W

length = 20

width = 6

// calculate the area of a rectangle

function calculateArea (length, width) {
    const area = length * width
   return area
}

console.log(20 * 6);


// create a function called reverse strings

function reverseString() {
    let original = "AKOR EMMANUEL";
    let reversed = original.split('').reverse().join('');
    console.log(reversed);
    
}

reverseString()


// write a javascript called isEven

function isEven(number) {
    return Math.floor(number / 2) * 2==number;
}

console.log(isEven(10));
console.log(isEven(21));
console.log(isEven(167));
console.log(isEven(5689));
console.log(isEven(5555));
console.log(isEven(6023));
console.log(isEven(416));
console.log(isEven(200));