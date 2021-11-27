//global variable
let size = 100; // Number

//declare a function
function increase() {
    size += 10;
    console.log(size);
    //template string
    container.innerHTML = 
    `<div class="box" style="width: ${size}px; height: ${size}px;"></div>`;
}
function decrease() {
    size -= 10;
    console.log(size);
    //template string
    container.innerHTML =`
    <div class="box"  style="width: ${size}px; height: ${size}px;"></div>`;
}


function colorred() {
    container.innerHTML =`
    <div class="box"  style="width: ${size}px; height: ${size}px;background-color: red;"></div>`;
}
function coloryellow() {
    container.innerHTML =`
    <div class="box"  style="width: ${size}px; height: ${size}px;background-color: yellow;"></div>`;
}
function colorblue() {
    container.innerHTML =`
    <div class="box"  style="width: ${size}px; height: ${size}px;background-color: blue;"></div>`;
}
