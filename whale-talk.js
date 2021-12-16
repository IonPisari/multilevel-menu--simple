let input = 'a whale of a deal';
let vowels = ['u', 'e', 'i', 'a', 'e'];
let resultArray = [];
for(inputIndex = 0; inputIndex < input.length; inputIndex++) {
    // console.log(inputIndex);
    for(vowelCheck = 0; vowelCheck < vowels.length; vowelCheck++) {
        // console.log(vowelCheck);
        if (input[inputIndex] === vowels[vowelCheck]) {
            resultArray.push(input[inputIndex]);
        }
    }
    if(input[inputIndex] === 'e' || input[inputIndex] === 'u'){
        resultArray.push(input[inputIndex]);
    }
}
console.log(resultArray.join('').toUpperCase());