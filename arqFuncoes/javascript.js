/* PRIMEIRA QUESTÃO */

const numero = document.querySelector('#numero');
const calcular = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

const quadrado = numero => numero * numero;

const resolverExer01 = () => {
    resultado.innerHTML = quadrado(numero.value);
}

calcular.addEventListener('click', resolverExer01);

/* SEGUNDA QUESTÃO */

const numero1 = document.querySelector('#valor1');
const numero2 = document.querySelector('#valor2');
const calcular2 = document.querySelector('#segundoCalcular');
const resultado2 = document.querySelector('#segundoResultado');

const maior = (numero1, numero2) => {
    return Math.max(numero1, numero2);
} 

const resolverExer02 = () => {
    resultado2.innerHTML = maior(numero1.value, numero2.value);
}

calcular2.addEventListener('click', resolverExer02);

/* TERCEIRA QUESTÃO */

const nome = document.getElementById('nome');
const estados = document.getElementsByClassName('estados');
const calcular3 = document.getElementById('terceiroCalcular');
const resultado3 = document.getElementById('terceiroResultado');

const radio = () => {
    for (let i = 0 ; i < estados.length ; i++) {
        if (estados[i].checked) {
            return estados[i].value;
        }
    } 
}

const resolverExer03 = () => {
    resultado3.innerHTML = nome.value + " mora no estado de " + radio();
}

calcular3.addEventListener('click', resolverExer03);

/* QUARTA QUESTÃO */

const nomeDois = document.getElementById('nomeDois');
const profissoes = document.getElementsByClassName('profissoes');
const calcular4 = document.getElementById('quartoCalcular');
const resultado4 = document.getElementById('quartoResultado');

const checkbox = () => {
    for (let i = 0 ; i < profissoes.length ; i++) {
        if (profissoes[i].checked) {
            return profissoes[i].value;
        }
    } 
}   

const resolverExer04 = () => {
    resultado4.innerHTML = checkbox() + " são áres de preferência de " + nomeDois.value;
}
    
calcular4.addEventListener('click', resolverExer04);    