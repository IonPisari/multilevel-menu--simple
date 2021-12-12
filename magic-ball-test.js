let userName = "Ion";
console.log(`Hello, ${userName}!`);
const userQuestion = "how are you";
console.log(`${userName} asked: ${userQuestion}?`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = `${randomNumber}`;
if (eightBall === "0") {
    console.log("It is certain")
} else if (eightBall === "1") {
    console.log("It is decidedly so")
} else if (eightBall === "2") {
    console.log("Reply hazy try again")
} else if (eightBall === "3") {
    console.log("Cannot predict now")
} else if (eightBall === "4") {
    console.log("Do not count on it")
} else if (eightBall === "5") {
    console.log("My sources say no")
} else if (eightBall === "6") {
    console.log("Outlook not so good")
} else {
    console.log("Signs point to yes")
}
//start test 
const expectedRes = [ "It is certain", "It is decidedly so", "Reply hazy try again", "Cannot predict now", "Do not count on it", "My sources say no", "Outlook not so good", "Signs point to yes" ];

let res = (expectedRes[randomNumber]);  
if(expectedRes[randomNumber] === res) {
    console.log(`test ${randomNumber} passed`)
    
}else if(expectedRes[randomNumber] != res) {
    console.log(`test ${randomNumber}  failed, reason:got ${res}, expected ${expectedRes[randomNumber]}`);
    
}
        
