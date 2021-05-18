const box1 = document.querySelector('#b1');
const box2 = document.querySelector('#b2');

// function rownanie(){
//     box1.style.zIndex=2;
//     box2.style.zIndex=1;
// }


const btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{

   
        
        
        

if((box1.className=='box')&&(box1.className=='box')){
box1.classList.add('front');
box2.classList.add('back');
}else if(box1.className=='box front'){
    box1.classList.remove('front');
    box1.classList.add('front_rev');
    box2.classList.remove('back');
    box2.classList.add('back_rev');

    setTimeout(function(){  box1.classList.remove('front_rev');
    box1.classList.add('back_again');
    box2.classList.remove('back_rev');
    box2.classList.add('front_again'); }, 1001);
    
   
}else if((box1.className=='box back_again')&&(box2.className=='box front_again')){
    box1.classList.remove('back_again');
    box1.classList.add('back_again_rev');
    box2.classList.remove('front_again');
    box2.classList.add('front_again_rev');
}


setTimeout(function(){ 
    box1.classList.remove('back_again_rev');
    box2.classList.remove('front_again_rev'); }, 1001);
})

