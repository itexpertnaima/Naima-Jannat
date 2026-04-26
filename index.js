HEAD
// 1) Even numbers between 1 and 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 2) Reverse a string function
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Test:
// console.log(reverseString("hello"));


// 3) Remove duplicates from array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Test:
// console.log(removeDuplicates([5, 5, 5, 6, 7]));
=======
// 1) Write a function named calculateDifference that takes two arguments
//  and returns the difference between the first and second arguments.
function calculateDifference(x, y) {
    return x - y;
}
console.log("Difference(20, 10):", calculateDifference(20, 10));


// 2) Write a function named isOdd that takes one argument 
// and returns true if the number is odd, and false if it is not.
function isOdd(num) {
    return num % 2 !== 0;
}
console.log("Is Odd!!!", isOdd(7));
console.log("Is Odd!!!", isOdd(8));


// // 3) Write a function named findMin that takes an array of numbers
// and returns the smallest number in the array.
function findMin(arr) {
    return Math.min(...arr);
}
const numbers = [12, 5, 8, 1, 20];
console.log("Find Min:", findMin(numbers)); 

// // 4) Write a function named filterEvenNumbers that takes an array of numbers 
//and returns a new array containing only the even numbers.
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
const Numbers = [1,2,3,4,5,6,8,10,9];
console.log("Filter Even Numbers:", filterEvenNumbers(Numbers));


// // 5) Write a function named sortArrayDescending that takes an array of numbers
// and returns a new array sorted in descending order.
const sortArrayDescending = arr => [...arr].sort((a, b) => b - a);

const numberToSort = [3, 1, 4, 1, 5, 15, 9];
console.log("Sort Descending:", sortArrayDescending(numberToSort));

// // 6) Write a function named lowercaseFirstLetter that takes a capitalized string
// and returns the same string with the first letter lowercased. 
const lowercaseFirstLetter = str => str.charAt(0).toLowerCase() + str.slice(1);

console.log(lowercaseFirstLetter("Optimus")); 
console.log(lowercaseFirstLetter("JavaScript")); 


// // 7) Write a function named findAverage that takes an array of numbers
// and returns the average of all elements.
function findAverage(arr) {
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
console.log("Find Average:", findAverage([1, 2, 3, 4, 5, 6]));


// // 8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.
const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log("Is Leap Year (2020)?", isLeapYear(2022)); 
console.log("Is Leap Year (2021)?", isLeapYear(2025));
37ed2a223567b00ee95b9ae4dab25fd929c12b79
