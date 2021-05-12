const box1 = document.querySelector('#b1');
const box2 = document.querySelector('#b2');



const btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{

if((box1.className!='box front')&&(box1.className!='box back')){
box1.classList.add('front');
box2.classList.add('back');
}else if(box1.className=='box front'){
    box1.classList.remove('front');
    box2.classList.remove('back');
}



})