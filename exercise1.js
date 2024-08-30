//1.Receber um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
//Orientação: Digite um número no terminal e tecle enter para testar a operação:

const prompt = require('prompt-sync')();
let num = Number(prompt(" Insira um número para descobrirmos se é par ou impar: "))

if (num % 2 === 0) {
    console.log("O número indicado é par")
} else {
    console.log("O número indicado é ímpar")
}
