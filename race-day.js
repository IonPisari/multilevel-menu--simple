let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegister = true;
let runnerAge = 18;
if(runnerAge >= 18 && earlyRegister === true) {
  raceNumber = raceNumber + 1000;
} 
if (runnerAge >= 18 && earlyRegister === true) {
  console.log ('Your race begins at 9:30 am. Your race number is ' + raceNumber);
} else if (runnerAge >= 18 && earlyRegister === false) {
  console.log ('Your race begins at 11:00 am. Your race number is ' + raceNumber);
} else {
  console.log ('Your race begins at 12:30 pm. Your race number is ' + raceNumber);
}
