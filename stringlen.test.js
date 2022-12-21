const { expect } = require('@jest/globals');
const { stringLength, reverseString, capitalizeString, calculator } = require('./stringlen');

test('Should be return string length if string length less than 10', () => {
    expect(stringLength("hello")).toBe(5)
});

test('Should reverse a string', () => {
    expect(reverseString("hello")).toBe("olleh")
    expect(reverseString("hello")).not.toBe("hello")
});

test('Should capitalize a string', () => {
    expect(capitalizeString("hello")).toBe("Hello")
    expect(capitalizeString("hello")).not.toBe("hello")
}
);


describe ('calculator', () => {
    test('Should add two numbers', () => {
        expect(calculator.add(1, 2)).toBe(3)
    })
    test('Should subtract two numbers', () => {
        expect(calculator.subtract(1, 2)).toBe(-1)
    })
    test('Should divide two numbers', () => {
        expect(calculator.divide(1, 2)).toBe(0.5)
    })
    test('Should multiply two numbers', () => {
        expect(calculator.multiply(1, 2)).toBe(2)
    })
})


