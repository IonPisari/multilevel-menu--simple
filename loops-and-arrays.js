// //1. Display numbers from 1 to 10


for (let i = 1; i <= 10; i++) {
    console.log(i)
};


//2.Print the odd numbers less than 100


// for (let i = 1; i <= 100; i+=2) {
//     console.log(i)
// };


//3.Print the multiplication table with 7


// for (let i = 7; i <= 7; i++) {
//     for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i*j}`)
//  };
// };



//4.Print all the multiplication tables with numbers from 1 to 10


// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i*j}`)
//  };
// };



//5.Calculate the sum of numbers from 1 to 10


// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);


//6.Calculate 10!


// const ten = result => {
//     let res = 0;
//     for (let i = 0; i < result.length; i++) {
//         res += result[i];
//     }
//     console.log(res);
// }
// ten([1, 2, 3, 4]);


//7.Calculate the sum of odd numbers greater than 10 and less than 30



// let sum = 10;
// for (let i = 10; i <= 30; i++) {
//     sum += i;
// }
// console.log(sum);


//8.Calculate the sum of numbers in an array of numbers


// const ten = result => {
//     let res = 0;
//     for (let i = 0; i < result.length; i++) {
//         res += result[i];
//     }
//     console.log(res);
// }
// ten([1, 2, 3, 4]);


//9.Calculate the average of the numbers in an array of numbers


// function calculateAverage(array){
//     let average = 0;
//     for (let i = 0; i < array.length; i++) {
//         let res = array[i];
//         average += res;
//     }
//     average = average / array.length
//     return average;
// }

// console.log(calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// 10. Create a function that receives an array of numbers and returns an array containing only the positive numbers


// let array = [5, -1, 3, 7, -71, 9, 10, 19, -5, -3];

// const getpositiveNumbers = (array) => array.filter(value => value > 0);

// let positives = getpositiveNumbers(array);

// console.log(positives);



//11.Find the maximum number in an array of numbers



// const array = [1, 3, 2, 23, 5, 66, 100, 7, 8, 10, 43, 26, 34, 65];
// let num = 0;
// array.forEach((element) => {
//     if(num < element) {
//          num = element
//     }
// });
// console.log(`${num}`);



//12.Create a function that will return a Boolean specifying if a number is prime


// function isPrime(n) {
//     if(n < 2) {
//         return false
//     }
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) { //ce este % ? si cum lucreaza?
//             return false
//         }        
//     }
//     return true
// }
// console.log(isPrime(5));



//13.Calculate the sum of digits of a positive integer number


// function sumOfDigits(num) {
//     let array = num.toString().split('')
//     let sum = array.reduce((priviousV, currentV) => priviousV += parseInt(currentV), 0);
//     console.log(sum)
//     return sum
// }
// sumOfDigits(334)



//14.Print the first 100 prime numbers


// const array = [];
// for (let j = 0; j <= 100; j++){
//     array.push(j)
// }
// function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//         if (num % i == 0) {
//         return false;
//         }
//     }
//     return num > 1;
// }
// console.log(array.filter(isPrime)); 



//15.Rotate an array to the left 1 position


// let array = [1, 2, 3, 4, 5]
// function rotateLeft(arr) {
//     arr = array.shift();
//     array.push(arr);
//     return array
// }
// console.log(rotateLeft())



//16.Reverse an array


// let array = [1, 2, 3, 4, 5]
// let reverse = array.reverse()
// console.log(reverse)

//17.Create a function that will merge two arrays and return the result as a new array


// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10];
// function concat() {
//     let array3 = array1.concat(array2)
//     return array3
// }
// console.log(concat())



//18.Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both


// let a = [1, 2, 3, 4, 5]
// let b = [5, 6, 7, 8, 9]
// function concatDistinct(a1, a2) {
//     return a1.concat(a2).filter(e => !a1.includes(e) || !a2.includes(e))
// }
// console.log(concatDistinct(a,b));


//19.Create a function that will receive an array of numbers as argument and will return a new array with distinct elements



// let arr = [1, 2, 3, 4, 2, 3, 1, 5, 3, 5, 6, 7, 6, 2, 8, 4];
// arrayDinstinct = () => {
//     arr = arr.filter((x, i, arr) => arr.indexOf(x) === i);
//     return arr
// }
// console.log(arrayDinstinct())



//20. Create a function that will return the number of words in a text


// let text = 'Create a function that will return the number of words in a text';
// function countWords(){
//     return text.split(' ').length;
// }
// console.log(countWords())