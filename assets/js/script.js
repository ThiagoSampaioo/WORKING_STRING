const containerName =  document.querySelector('.nome');
const containerDate = document.querySelector('.data');
const back = document.querySelector('.back');
const tel = document.querySelector('.tel');
const p = document.createElement('p');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4= document.createElement('p');
const p5 = document.createElement('p');
const p6 = document.createElement('p');




const handleClick = () => {
    if(formValid()){
        const name = containerName.value;
        const date = containerDate.value;
        const telefone = tel.value;
        const numDate=date.split('-').reverse().join('');
        p.innerText = `Seu nome é : "${name}."`;                                                              
        p1.innerText = ` Contém : ${name.length} caracteres.`;                                                    
        p2.innerText =  ` Seu nome ao contrário é: ${name.split('').reverse().join('')}.  `; 
        p3.innerText = `A metade de seu nome é: ${name.slice(0,name.length/2)}`;                                    
        p4.innerText =  ` Sua data de nascimento é: ${date.split('-').reverse().join('-')}.`;                                            
        p5.innerText = ` A soma dos numeros da sua data de nascimento é: ${numDate.split('').join('+')} = ${soma(numDate.split(''))}.`;
        p6.innerText = ZoneDDD(telefone.slice(0,2));
        back.appendChild(p);
        back.appendChild(p1);
        back.appendChild(p2);
        back.appendChild(p3);
        back.appendChild(p4);
        back.appendChild(p5);
        back.appendChild(p6);
        
    }
    
    
}
formValid =()=>{
    let msg = '';
    if(containerName.value === '') msg += 'Campo nome não preenchido .\n';
    if(containerDate.value === '') msg += 'Campo data não preenchido .\n';
    if(containerDate.value.split("-")[0] < 1900 || containerDate.value.split("-")[0] > 2023) msg += 'Data invalida .\n';
    if(tel.value=== '') msg += 'Campo telefone não preenchido .\n';
    if(msg != ''){
        alert(msg);
        return false;
    }
    return true;
}

const soma = (data) =>{
    
        var total = 0;
        for (i=0; i<data.length; i++){
            total += Number(data[i]);
        }
        return total;
}

const ZoneDDD = (tel) =>{
    if(tel === '61'){
        return "Seu DDD pertence a Brasilia."
    }
    else if(tel === '71'){
        return "Seu DDD pertence a Salvador."
    }else if(tel === '11'){
        return "Seu DDD pertence a São Paulo."
    }else if(tel === '21'){
        return "Seu DDD pertence a Rio de Janeiro."
    }else if(tel === '32'){
        return "Seu DDD pertence a Juiz de Fora."
    }else if(tel === '19'){
        return "Seu DDD pertence a Campinas."
    }else{
        return "DDD não cadastrado!"
    }
}



const handleBUM = ()=>{

}


