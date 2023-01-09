const grand_container=document.querySelector('.grand_container');
grand_container.style.cssText='display: flex; justify-content: center; gap: 16px;\
border: 3px solid black; margin 30px auto; padding: 24px;';

const container_1=document.querySelector('.container_1');
const container_2=document.querySelector('.container_2');

container_1.style.cssText='display: flex; flex-direction: column; justify-content: center;\
gap: 12px; border: 3px solid red; padding: 12px;';

container_2.style.cssText='box-sizing: border-box; width: 486px; height: 486px;\
border: 3px solid black; display: flex; gap: 0; flex-wrap: wrap;\
align-items: flex-start;  ';

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
btn_option[3].textContent='Reset';

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

function scale_down() {
    const len_down=div.length;
    if(len_down==100) {
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<144;i++) {
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 38px; height: 38px;'
            container_2.appendChild(div[i]);
        }
    }
    else if(len_down==144) {
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<256;i++) {
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 28px; height: 28px;'
            container_2.appendChild(div[i]);
        }
    }
    else if(len_down==256) {
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<400;i++) {
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 22px; height: 22px;'
            container_2.appendChild(div[i]);
        }
    }
    else if(len_down==400) {
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<576;i++) {
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 18px; height: 18px;'
            container_2.appendChild(div[i]);
        }
    }
    else if(len_down==576) {
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<900;i++) {
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 14px; height: 14px;'
            container_2.appendChild(div[i]);
        }
    }
    else if(len_down==900) {
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<1600;i++) {
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 10px; height: 10px;'
            container_2.appendChild(div[i]);
        }
    }
    else if(len_down==1600) {
        container_2.innerHTML='';
        div=[];
        for(let i=0;i<3600;i++) {
            div[i]=document.createElement('div');
            div[i].style.cssText='border: 1px solid black; width: 6px; height: 6px;'
            container_2.appendChild(div[i]);
        }
    }
    else return;

}



btn_up.addEventListener('click',scale_up);
btn_down.addEventListener('click',scale_down);

const btn=btn_container.querySelectorAll('button');           // btn is a node list of all the buttons that give the user options to pick the color.
btn.forEach((button)=> {
    button.addEventListener('click',color_grid);
});

let counter_black=0;    //this will assist in changing the opacity when the color is black
let counter_rainbow=0;  //this will assist in changing the colors from red to violet
  
function color_grid(e) {
    const div_list=container_2.querySelectorAll('div');
    if(e.target.textContent=='Grey-Black'){
        div_list.forEach((box)=> {
            box.addEventListener('mouseenter',(e)=> {
                counter_black+=1;
                if(counter_black==1){
                    e.target.style.opacity='0.1';
                    e.target.style.backgroundColor='black';
                }
                else if(counter_black==2){
                    e.target.style.opacity='0.2';
                    e.target.style.backgroundColor='black';
                }
                else if(counter_black==3){
                    e.target.style.opacity='0.3';
                    e.target.style.backgroundColor='black';
                }
                else if(counter_black==4){
                    e.target.style.opacity='0.4';
                    e.target.style.backgroundColor='black';
                }
                else if(counter_black==5){
                    e.target.style.opacity='0.5';
                    e.target.style.backgroundColor='black';
                }
                else if(counter_black==6){
                    e.target.style.opacity='0.6';
                    e.target.style.backgroundColor='black';
                }
                else if(counter_black==7){
                    e.target.style.opacity='0.7';
                    e.target.style.backgroundColor='black';
                }
                else if(counter_black==8){
                    e.target.style.opacity='0.8';
                    e.target.style.backgroundColor='black';
                }
                else if(counter_black==9){
                    e.target.style.opacity='0.9';
                    e.target.style.backgroundColor='black';
                }
                else {
                    e.target.style.opacity='1';
                    e.target.style.backgroundColor='black';
                    counter_black=0;
                }
            })
        })
    }
    else if(e.target.textContent=='Rainbow'){
        div_list.forEach((box)=> {
            box.addEventListener('mouseenter',(e)=>{
                counter_rainbow+=1;
                if(counter_rainbow==1){
                    e.target.style.opacity='1';
                    e.target.style.backgroundColor="violet";
                }
                else if(counter_rainbow==2){
                    e.target.style.opacity='1';
                    e.target.style.backgroundColor='indigo';
                }
                else if(counter_rainbow==3){
                    e.target.style.opacity='1';
                    e.target.style.backgroundColor='blue';
                }
                else if(counter_rainbow==4){
                    e.target.style.opacity='1';
                    e.target.style.backgroundColor='green';
                }
                else if(counter_rainbow==5){
                    e.target.style.opacity='1';
                    e.target.style.backgroundColor='yellow';
                }
                else if(counter_rainbow==6){
                    e.target.style.opacity='1';
                    e.target.style.backgroundColor='orange';
                }
                else {
                    e.target.style.opacity='1';
                    e.target.style.backgroundColor='red';
                    counter_rainbow=0;
                }
            })
        })
    }

    else if(e.target.textContent=='Eraser'){
        div_list.forEach((box) => {
            box.addEventListener('mouseenter',(e)=> {
                e.target.style.opacity='1';
                e.target.style.backgroundColor='white';
                
            })
        })
    }
    else {
        const dimension=div.length;
        for(let i=0; i<dimension;i++){
            div[i].style.opacity='1';
            div[i].style.backgroundColor='white';
            div[i].removeEventListener('mouseenter',()=> {
                console.log('hello');
            })
        }

    }
}