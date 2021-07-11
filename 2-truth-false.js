
// 1. false values are :  false, 0, "", undefined, null, NaN 

// 2.truthy values are : truth, "0", " ", [], {}, etc....

// example -1

const age = 4;

if(age > 0){
    console.log('1.condition is true')
}
else{
    console.log('condition is false')
}


// example -2

const age2 = 4;

if(age2){
    console.log('2.condition is true') }
else{
    console.log('condition is false')
}



// example -3

const name = 'Salman But';

if(name.length > 2){
    console.log('3.condition is true') }
else{
    console.log('condition is false')
}


// example -4

const name2 = 'Salman But';

if(name2){
    console.log('4.condition is true') }
else{
    console.log('condition is false')
}


// example -5

const name3 = " ";

if(name3){
    console.log('5.condition is true') }
else{
    console.log('condition is false')
}


// *****example -6 

const name4= "";

if(name4){
    console.log('6.condition is true') }
else{
    console.log('6. ....condition is false')
}


// example -7

const name5 = null;

if(name5){
    console.log('7.condition is true') }
else{
    console.log('7. ....condition is false')
}