'use strict';

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let count = 0;


btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const classes = e.currentTarget.classList;
        if(classes.contains('decrease')){
            count--;
        }
        else if(classes.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count === 0){
            value.style.color = '#222';
        }
        value.textContent = count;
    })
});
