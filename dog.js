const myAge = 24;//my years old
let earlyYears = 2;//this value will change
earlyYears *= 10.5;
let laterYears = myAge - 2; //result when i substract 2 form myAge
laterYears *= 4;
console.log(earlyYears, laterYears);
let myAgeInDogYears = (earlyYears) + (laterYears);
let myName = 'Ion Pisari'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`)
