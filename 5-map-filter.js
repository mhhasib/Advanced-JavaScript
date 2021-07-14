
const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

for(let i = 0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element*element;
    output.push(result);
}

console.log(output);


// 2. map can deal maximum three parameter like element , index & array

numbers.map( function(element, index, array){
    console.log(element, index, array);
} )



// declare a function in many ways

// example - 1

const numbers2 = [5, 10, 15, 20]

function square (element){
    return element*element;
}

const result = numbers2.map(square);
console.log('1.', result);


// example - 2

const numbers3 = [5, 10, 15, 20]

const result3 = numbers3.map(function (element){
    return element*element
});
console.log('2.',result3);


// example - 3

const numbers4 = [5, 10, 15, 20]

const square2 = element => element*element;

const result4 = numbers4.map(square2)
console.log('3.',result4);


// example - 4

const numbers5 = [5, 10, 15, 20]

const square3 = x =>  x * x;

const result5 = numbers5.map(square3)
console.log('4.',result5);


// example - 5 The Best & short way

const numbers6 = [5, 10, 15, 20]

const result6 = numbers6.map( x => x * x )

console.log('5. The Shortest way ',result6);



// Learn about filter : filter gives array

// example - 1 

const numbers8 = [3, 5, 6, 7, 8, 9, 10, 18]
const bigger = numbers8.filter(x => x>6);
console.log('The bigger numbers are ', bigger);


// example - 2 filter gives empty array when condition does not match 

const numbers9 = [3, 5, 6, 7, 8, 9, 10, 18]
const bigger2 = numbers9.filter(x => x>18);
console.log('The bigger numbers are ', bigger2);


// learn about find: find gives only array value

// example - 1: find  gives the lowest minimum value for less than condition (x <)

const ages = [3, 5, 6, 7, 8, 9, 10, 18];
const lower = ages.find(x => x<10);
console.log('The lowest value is: ', lower);


// example - 2: find gives the immediate maximum value (lowest maximum value) for getter than condition (x >)

const ages2 = [3, 5, 6, 7, 8, 9, 10, 18];
const bigger3 = ages2.find(x => x>6);
console.log('The immediate bigger value is : ', bigger3);
