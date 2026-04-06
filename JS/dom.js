function result(){



let displayheading=document.getElementById('text');

displayheading.innerHTML=inputvalue;

displayheading.style.color="red"

//change color of body element

document.getElementsByTagName('body')[0].style.backgroundColor="green";

}

//addeventlistener method

let paraBkg=document.getElementById('para');

function colorchange(){
    paraBkg.stylebackgroundcolor="blue"
}
paraBkg.addEventListener('mouseout',colorchange)