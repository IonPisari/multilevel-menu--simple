let  width = 800; 
let  height = 200;

let groundX = 0;
let dinoY = 0;
// let dinoIsJumping = false;

let obstacles = [
    ["cactus-small-1", 150],     //obstacle 1
    ["flydino-1", 300],         //obstacle 2
    ["cactus-big-1", 400],      //obstacle 3    
    ["cactus-big-3", 600],      //obstacle 4    
]

function showObstacles(obstacles, i, obstacles) {
//     //clear
//     map.innerHTML = ``
 
        map.innerHTML += `<div class="${obstacles[i][0]} all-draw" style="left: ${obstacles[i][1]}px"></div>`
//         //move
//         obstacles[i][1] -= 10
    
//         //limits
//         if (obstacles[i][1] < 0) {
//             obstacles.splice(i, 1)
//         } else {
                
//             //render
//             map.innerHTML += `<div class= "${obstacles[i][0]}" style="left: ${obstacles[i][1]}px"></div>`
            
//         }
//         //game over conditions
//         if (obstacles[i][1] < 100 && !dinoIsJumping) {
//             alert("GAME OVER")
//             clearInterval(timerId)
//         }
//     }
    
}
obstacles.forEach(showObstacles);
// function showObstacles() {
//     for (let i = 0; i < obstacles.length; i++) {
        
//         map.innerHTML += `<div class="${obstacles[i][0]}" style="left: ${obstacles[i][1]}px"></div>`

//     }
// }



function showDino() {
    map.innerHTML += `<div class="dino all-draw"></div>`
}
// function moveDino (){
    //     if (dinoIsJumping){
//         map.innerHTML += `<div class="dino jumping"></div>`
//     }else {
    //         map.innerHTML += `<div class="dino"></div>`
    //     }
    // }
    
    // function jumpDino (){
        //     dinoIsJumping = true
        //     //dupa ce sare isi revine la loc cu timeout
//     setTimeout(() => {dinoIsJumping = false},3000)
// }

function moveGround() {
    ground.style = `background-position: ${groundX}px -104px`
    groundX -= 1
}

//game loop
// setInterval( moveGround, 20)




// let timerId = setInterval(() =>{

//         moveObstacles()
//         moveDino()
        
// }, 200)


// function action() {
//     if (event.code == "ArrowUp") {
//         jumpDino()
//     }
// }