const kelvin = 293;//kelvin will stay constant
let celsius = kelvin - 273;//calculate celsius
let fahrenheit = celsius * (9/5)+32;//Calculate Fahrenheit
fahrenheit = Math.floor(fahrenheit);//Round down the Fahrenheit temperature
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
//start test
function solution(kelvin,fahrenheit) {
    if(kelvin<fahrenheit) {
        return kelvin;
    }else {
        return fahrenheit;
    }
}
let res = solution(kelvin,fahrenheit);
console.log(res);