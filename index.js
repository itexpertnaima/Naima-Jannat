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
