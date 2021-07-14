
let bonus = 10;

function sum(first, second){
    
    let result = first + second +bonus;
    console.log(result);
    console.log(bonus);

    if(result>9){
        let mood = 'happy';
        mood = 'lovely';
        mood ='funny';
        console.log(mood);

        var mood2 ='happy 2'
        mood2 = 'funny2';
        mood2 = 'lovely2';
        // console.log(mood2);
    }
    // console.log(mood);
    console.log('2,', mood2);  /**var scope its parent area */
    return result;
    
}

const output = sum(10,65);
console.log(output)

// console.log(result); = undefined variable result declare in a function

console.log(bonus); /* bonus is a universal variable because it declare outside a function we can use it inside function*/

// console.log(mood); = undefined variable result declare in a function

 console.log(mood2);