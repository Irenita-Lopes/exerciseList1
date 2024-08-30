//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
//Orientação: 

const prompt = require('prompt-sync')();
const numberFornec = Number(prompt("Insira um número para fatoração: "));

let fatorial = 1;

for (let i = 1; i <= numberFornec; i++) {
    fatorial *= i;
    console.log(fatorial);
}

