let input = 'a whale of a deal';
let vowels = ['u', 'e', 'i', 'a', 'e'];
let resultArray = [];
for(inputIndex = 0; inputIndex < input.length; inputIndex++) {
    // console.log(inputIndex);
    for(checkVowels = 0; checkVowels < vowels.length; checkVowels++) {
        // console.log(checkVowels);
        if (input[inputIndex] === vowels[checkVowels]) {
            resultArray.push(input[inputIndex]);
        }
    }
    if(input[inputIndex] === 'e' || input[inputIndex] === 'u'){
        resultArray.push(input[inputIndex]);
    }
}
console.log(resultArray.join('').toUpperCase());
