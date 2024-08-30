//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
//Orientação: No terminal, insira um número e tecle enter para testar o programa:

const prompt = require('prompt-sync')();
let number = Number(prompt(" Insira um número para mostrar 10 vezes: "))

for (let i = 0; i < 10; i++) {
    console.log(number) 
}
