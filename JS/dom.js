function result(){
    let inputValue=document.getElementById('inputData').value;

console.log(inputValue);
let displayHeading=document.getElementById('text');
displayHeading.innerHTML=inputValue;

displayHeading.style.color='blue'

// change color of body element

document.getElementsByTagName('body')[0].style.backgroundColor='green';
}

let paraBkg=document.getElementById('para');

function changeColor(){
    paraBkg.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);
}
paraBkg.addEventListener('mouseout',changeColor);