
// example - 1

let pakiName ;
console.log(pakiName);


// example - 2 did not return anything
 
function add (num1,num2){
    console.log (num1,num2);
}

var result = add(10, 5);
console.log(result);



// example - 3 did not return undefined /nothing

function add (num1,num2){
    console.log (num1,num2);
    return
}

var result = add(10, 5);
console.log(result);



// example - 4 did not  pass a  parameter value 

function add (num1,num2){
    console.log (num1,num2);
    return num1 + num2;
}

var result = add(10);
console.log(result);


// example - 5 

const friend = {name : 'AJ khan', phone : '01072778606'}
console.log(friend.gfName);


// example - 6

const fun = undefined;
console.log(fun);


// example - 7

let ages = [10, 16, 26, 38]
console.log(ages[2]);

console.log(ages[12]);

