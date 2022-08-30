'use strict';
function changeColor(){
    const colorChange = document.querySelectorAll(".color-change");
    for (const color of colorChange){
        colorChange.classList.add('red');
    }
    
}

function validateNumber(evt){
    // event.preventDefault() is a method
    evt.preventDefault();

    const numberInput = document.querySelector('#number-input');
    //get the value from the user input and convert to number
    const userNum =  Number(numberInput.value);
    const formFeedback = document.querySelector('#formFeedback');
    if (userNum>=10 || isNaN(userNum)){
    formFeedback.innerText = 'Please enter a smaller number';
    }else{
    formFeedback.innerText ='You are good to go!';
}
}

document.querySelector('.color-changer').addEventListener('click', changeColor);
document.querySelector('.number-form').addEventListener('submit', validateNumber);