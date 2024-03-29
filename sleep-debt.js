const getSleepHours = day => {
    switch(day){
        case 'monday':
            return 8;
        case 'tuesday':
            return 7;
        case 'wednesday':
            return 6;
        case 'thursday':
            return 7;
        case 'friday':
            return 8;
        case 'saturday':
            return 9;
        case 'sunday':
            return 8;
    }

// if (day === 'monday') {
//     return 8;
// }
// else if (day === 'tuesday') {
//     return 7;
// }
// else if (day === 'wednesday') {
//     return 6;
// }
// else if (day === 'thrusday') {
//     return 7;
// }
// else if (day === 'friday') {
//     return 8;
// }
// else if (day === 'saturday') {
//     return 9;
// }
// else {
//     return 5;
// }
// console.log(getSleepHours('friday'));
}
  
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
// const getActualSleepHours = () => 8 + 7 + 6 + 7 + 8 + 9 + 5 ; // this we can use for if/else statement not for switch
// console.log(getActualSleepHours())

const getIdealSleepHours = () =>{
    let idealHours = 8;
    return idealHours * 7;
  }
// const getIdealSleepHours = (idealHours) => idealHours * 7;
  
// console.log(getIdealSleepHours());
// const calculateHours = () => {
//     if (getActualSleepHours > getIdealSleepHours) {
//         return getActualSleepHours() - getIdealSleepHours(); 
//     }else {
//         return getIdealSleepHours() - getActualSleepHours();
//     }
// }>>>>>>>> |
//          sau 
//      folosim metoda mai scurta 
//           |
const calculateHours = () => (getActualSleepHours > getIdealSleepHours) ? getActualSleepHours() - getIdealSleepHours():getIdealSleepHours() - getActualSleepHours();

let res = calculateHours()

const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    // let more = actualSleepHours - idealSleepHours;
    // let less = idealSleepHours - actualSleepHours;
    if (actualSleepHours === idealSleepHours) {
        console.log(`You have got the perfect amount of sleep:  ${actualSleepHours} `);
    }else if (actualSleepHours > idealSleepHours) {
        console.log(`You got more sleep than needed:   ${res}`);
    }else {
        console.log(`You should get some rest, you have  ${res}  hours of sleep this week.`);
    }
}
  
 calculateSleepDebt();
