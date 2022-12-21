// task 1
const stringLength = (string) => {
    const len = string.length;
    if (len > 0 && len < 10) {
        return len;
    }

    throw new Error('String length must be between 1 and 10');
}


// task 2
// reverse a string
const reverseString = (string) => {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

// task 3
// capitalize a string
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// task 4
// calculator
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
}





module.exports = { stringLength, reverseString, capitalizeString, calculator };