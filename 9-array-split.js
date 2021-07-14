
// array slice

const numbers = [11,12,13,14,15,22,23,44];

const part = numbers.slice(2,5);
console.log('slice', part);
console.log(numbers);

// array splice

const numbers2 = [11,12,13,14,15,22,23,44];
const removed = numbers2.splice(2,5);
console.log('splice', removed);
console.log( numbers2);

const together = numbers.join(" ");
console.log(together);
