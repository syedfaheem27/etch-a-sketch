const grand_container=document.querySelector('.grand_container');
grand_container.style.cssText='display: flex; justify-content: center; gap: 16px;\
border: 3px solid black; margin 30px auto; padding: 24px;';

const container_1=document.querySelector('.container_1');
const container_2=document.querySelector('.container_2');

container_1.style.cssText='display: flex; flex-direction: column; justify-content: center;\
gap: 12px; border: 3px solid red; padding: 12px;';

container_2.style.cssText='box-sizing: border-box; width: 486px; height: 486px;\
border: 3px solid bisque; display: flex; gap: 0; flex-wrap: wrap;\
align-items: flex-start;';

const btn_container=document.querySelector('.btn_container');

btn_container.style.cssText='display: flex; border: 3px solid grey; justify-content: center;\
gap: 18px; padding: 12px; margin: 40px; auto;'

const btn_up=document.createElement('button');  //buttons to be placed in container_1 for scaling the grid
const btn_down=document.createElement('button');

container_1.appendChild(btn_up);
container_1.appendChild(btn_down);

const btn_scale=document.querySelectorAll('button');

btn_scale.forEach((btn) => {
    btn.style.cssText='border: 1px solid blue; color: gold; padding: 6px;\
    border-radius: 4px;';
});
btn_up.textContent='Scale-up';
btn_down.textContent='Scale-down';

//adding buttons for various color options and other options like clear and erase

const btn_option=[];
for(let i=0;i<4;i++) {
    btn_option[i]=document.createElement('button');
    btn_option[i].style.cssText='border: 1px solid blue; color: gold; \
    background-color: bisque; padding: 6px; border-radius: 4px;';
    btn_container.appendChild(btn_option[i]);
}
btn_option[0].textContent='Grey-Black';
btn_option[1].textContent='Rainbow';
btn_option[2].textContent='Eraser';
btn_option[3].textContent='Clear';

// add hover class to the buttons
const btn_list=document.querySelectorAll('button');
btn_list.forEach((btn)=> {
    btn.classList.add('hover');
})

// adding a grid of default side = 16px
let div=[];
function default_start() {
    for(let i=0;i<(30*30);i++) {
        div[i]=document.createElement('div');
        div[i].style.cssText='height: 14px; width: 14px; border: 1px solid black;'
        container_2.appendChild(div[i]);
    }
}
default_start();

// adding functionalities to the buttons
function scale_up() {
    const len_up=div.length;
    if(len_up==3600){
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<1600;i++){
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 10px; height: 10px;'
            container_2.appendChild(div[i]);
        }
        
    }
    else if(len_up==1600) {
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<900;i++){
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 14px; height: 14px;'
            container_2.appendChild(div[i]);
        }
    }
    
    else if(len_up==900) {
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<576;i++){
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 18px; height: 18px;'
            container_2.appendChild(div[i]);
        }
    
    }
    else if(len_up==576) {
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<400;i++){
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 22px; height: 22px;'
            container_2.appendChild(div[i]);
        }
    }
    else if(len_up==400) {
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<256;i++){
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 28px; height: 28px;'
            container_2.appendChild(div[i]);
        }
    }
    else if(len_up==256) {
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<144;i++){
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 38px; height: 38px;'
            container_2.appendChild(div[i]);
        }
    }
    else if(len_up==144) {
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<100;i++){
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 46px; height: 46px;'
            container_2.appendChild(div[i]);
        }
    }
    else return;
}



btn_up.addEventListener('click',scale_up);