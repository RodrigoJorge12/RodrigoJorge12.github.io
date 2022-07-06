const botao1 = document.querySelector(".executa01")


    const obtemValor = (seletor) => {
        const val = document.querySelector(seletor)
        let num = isNaN(parseFloat(val.value))? 0:parseFloat(val.value)
        val.value = ""
        return num
    }


    const escreveValor = (seletor, valor) => {
        const nodeConteudo = document.createTextNode(valor)
        document.querySelector(seletor).textContent = ""
        document.querySelector(seletor).appendChild(nodeConteudo)
    }

    const somar = (num1, num2) => num1 + num2

botao1.addEventListener("click", () => {
    
    const num1 = obtemValor("#quest1-v1")
    const num2 = obtemValor("#quest1-v2")

    escreveValor("#resp01", somar(num1, num2))
})


const botao2 = document.querySelector(".executa02")

const identificaMaiorNum = (num1, num2) => {
    let resp = ""
    if(num1>num2){
        resp = `O número ${num1} é maior que o número ${num2}`
    }
    else if (num2>num1){
        resp = `O número ${num2} é maior que o número ${num1}`
    }
    else {
        resp = `Os números são iguais`
    }
    return resp
}


botao2.addEventListener("click", () => {
    const num1 = obtemValor("#quest2-v1")
    const num2 = obtemValor("#quest2-v2")

    
    escreveValor("#resp02", identificaMaiorNum(num1, num2))
})
    

    const botao3 = document.querySelector(".executa03")
    
    const identificaPrimo = (num1) => {
        let primo = 0, aux, resp
        for(aux = 2;aux < num1; ++aux)
        {
            if (num1 % aux == 0)
            {
            ++primo
            aux = num1
            }    
        }
        
        if (primo == 0) {
        resp = `O número ${num1} é primo`
        }
        else {
            resp = `O número ${num1} não é primo`
        }
        return resp
    }



botao3.addEventListener("click", () => {
    const num1 = obtemValor("#quest3-v1")

    escreveValor("#resp03", identificaPrimo(num1))
})


const botao4 = document.querySelector(".executa04")

    const calculaHipotenusa = (num1,num2) => {
        
        let hipo = Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2))
        return hipo
    }

botao4.addEventListener("click", () => {
    const num1 = obtemValor("#quest4-v1")
    const num2 = obtemValor("#quest4-v2")
    
    escreveValor("#resp04", calculaHipotenusa(num1, num2))
})

const button = document.getElementById('button');
var result = document.getElementById("result");

button.addEventListener('click', salario);

function salario(){
    var i = document.getElementById("input1").value;
    var j = document.getElementById("input2").value;
    i = parseInt(i);
    j = parseInt(j);
    result.innerHTML = i * (1 + (j / 100));
}

const button2 = document.getElementById('button');
var result = document.getElementById("result");

button2.addEventListener('click', total);

function total(){
    var i = document.getElementById("input1").value;
    var j = document.getElementById("input2").value;
    var x = document.getElementById("input3").value;
    var y = document.getElementById("input4").value;
    i = parseInt(i);
    j = parseInt(j);
    x = parseInt(x);
    y = parseInt(y);
    i = (i * y) + x + (j * 0.05);
    result.innerHTML = i;
}