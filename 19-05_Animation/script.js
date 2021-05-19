const box = document.querySelector('#box');
const btn_down = document.querySelector('#btn_down');
const btn_roll_left = document.querySelector('#btn_roll_left');
const btn_back = document.querySelector('#btn_back');
const p_link = document.querySelectorAll('.link_start');



btn_down.addEventListener('click',()=>{

    box.classList.remove('roll_left');
    box.classList.remove('back');
    box.classList.add('lay_down');
    
    for (i = 0; i < p_link.length; i++) {
        
        p_link[i].classList.add('link_move');
      }
    
})




btn_roll_left.addEventListener('click',()=>{

    box.classList.remove('back');
    box.classList.remove('lay_down');
    box.classList.add('roll_left');
    
})


btn_back.addEventListener('click',()=>{

    box.classList.remove('lay_down');
    box.classList.remove('roll_left');
    box.classList.add('back');
    
})