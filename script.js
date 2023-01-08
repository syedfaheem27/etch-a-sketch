const grand_container=document.querySelector('.grand_container');
grand_container.style.cssText='display: flex; justify-content: center; gap: 16px;\
border: 3px solid black; margin 30px auto; padding: 24px;';

const container_1=document.querySelector('.container_1');
const container_2=document.querySelector('.container_2');

container_1.style.cssText='display: flex; flex-direction: column; justify-content: center;\
gap: 12px; border: 3px solid red; padding: 12px;';

container_2.style.cssText='box-sizing: border-box; width: 486px; height: 486px;\
border: 3px solid bisque;'

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