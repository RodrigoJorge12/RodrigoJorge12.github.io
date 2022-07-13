const botao1 = document.querySelector(".botao1");
var resultado1 = document.querySelector(".resultado1");

botao1.addEventListener('click', fatorial);

function fatorial (){
    var numero = document.querySelector(".questao1").value;
    numero = parseInt(numero);
    var Resultfatorial = numero;
    Resultfatorial = parseInt(Resultfatorial);
    for(i = 1;i < numero; i++){
        Resultfatorial = Resultfatorial * i;
    }
    resultado1.innerHTML = Resultfatorial;
}

const botao2 = document.querySelector(".botao2");
var resultado2 = document.querySelector(".resultado2");
var aviso = "Acesse o console";
botao2.addEventListener('click', Pot30);

function Pot30(){
    for(i = 1; i < 31; i++){
        console.log(4**i);
    }
    resultado2.innerHTML = aviso;
}

const botao3 = document.querySelector(".botao3");
var resultado3 = document.querySelector(".resultado3");

botao3.addEventListener('click', numerosPares);

function numerosPares(){
    soma = 0;
    for(i = 0;i < 1001; i++){
        if (i % 2 == 0){
            soma += i;
        }
    }
    resultado3.innerHTML = soma;
}

const botao4 = document.querySelector(".botao4");
var resultado4 = document.querySelector(".resultado4");
botao4.addEventListener('click' ,sequencia);

function sequencia(){
    let num1 = 0;
    let num2 = 1;
    let aux = 0;
    console.log(num1);
    console.log(num2);
    for(i = 2; i < 100; i++){
        aux = num2;
        num2 = num2 + num1;
        num1 = aux;
        console.log(num2);
    }
    resultado4.innerHTML = aviso;
}


const isPrime = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  };
const botao5 = document.querySelector(".botao5");
var resultado5 = document.querySelector(".resultado5");

botao5.addEventListener('click', primos1a1000);

function primos1a1000(){
    for(i = 0;i <= 1000; i++){
        if (isPrime(i) != false){
            console.log(i);
        }
    }
    resultado5.innerHTML = aviso;
}

