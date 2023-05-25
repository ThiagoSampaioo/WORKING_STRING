const cont =  document.querySelector('.BUM');
const back =  document.querySelector('.back');
const img =  document.querySelector('.img');
const gambs = document.querySelector('.gambs');
const p = document.createElement('p');
back.appendChild(p);



const startBUM =()=>{
    gambs.classList.add('d-none')
    let contador = Number(cont.value);
    let interval = setInterval(()=>{
        p.innerHTML+= `${contador} \n`;
       contador-=1;
        if(contador < -1){
            p.innerHTML = '';
            img.classList.add('d-flex');
        }
        if(contador< -4){
            clearInterval(interval);
           window.location.reload(true);
        }
    },1000);
}