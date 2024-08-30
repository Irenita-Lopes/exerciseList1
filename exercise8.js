//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();
let number1 = Number(prompt(" Insira o primeiro número: "))
let number2 = Number(prompt(" Insira o segundo número: "))  

if (number1 > number2) {
    console.log(number2, number1)
} else {
    console.log(number1, number2)
}