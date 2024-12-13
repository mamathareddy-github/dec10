// 1. How would you define a function that takes two numbers 
// as parameters and returns their sum?
function sumOfTwoNumbers(a,b){
    return a+b
}
console.log(sumOfTwoNumbers(10,20));
console.clear();

// 2. If you define a function that accepts a string as a 
//parameter, how would you modify it to print the string in
//  uppercase?

function toConvertUpperCase(string){
    return string.toUpperCase();
}
var res=toConvertUpperCase("mamatha");
console.log(res)
console.clear();

// 3. In JavaScript, what happens if you pass an undefined 
// value as an argument to a function that expects a 
// parameter?

function funOne(a,b){
    console.log(a,b)
    
}
funOne(18,)
console.clear();


// 4. Suppose you have a function that takes an array as a 
// parameter. How would you check inside the function if the 
// array is empty?
function arr(x){
    if(x==0){
        console.log('empty')
    }
    else{
        console.log('not empty')
    }
}
arr([]);
arr([7]);
console.clear();

// 5. write a function that takes two numbers as parameters and 
// returns their difference.

function differenceOfTwoNumbers(a,b){
return `difference between ${a} and ${b} is ${a-b}`;
}
console.log(differenceOfTwoNumbers(20,10));
console.clear();

// 6. Define a function that accepts a name and age as parameters, 
// and returns a string with a greeting like "Hello, [name]! You 
// are [age] years old."

function greeting(name,age){
    return `hello,${name}! you are ${age} years old`
}
console.log(greeting("Mamatha",22));
console.clear();

// 7. Write a function that takes a number as a parameter and
//  returns true if the number is a even number, otherwise false.
function evenOrOddCheck(a){
    if(a%2==0)
        return`${a} is true`
    else
    return`${a} is false`

}
console.log(evenOrOddCheck(7));
console.log(evenOrOddCheck(8));