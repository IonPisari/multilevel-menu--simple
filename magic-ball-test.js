let userName = "Ion";
console.log(`Hello, ${userName}!`);
const userQuestion = "how are you";
console.log(`${userName} asked: ${userQuestion}?`);
let randomNumber = Math.floor(Math.random(1) * 8);
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
let expectedRes = `${eightBall}`;// new line
for(i=-1;i<`${randomNumber}`;i++){
    let res = (randomNumber[i],eightBall[i]);  
    if(expectedRes[i] === res) {
        console.log(`test ${randomNumber} passed`)
       
    }else if(expectedRes[i] != res) {
        console.log(`test ${randomNumber} failed, reason:got ${res}, expected ${expectedRes}`);
        
    }
        
}