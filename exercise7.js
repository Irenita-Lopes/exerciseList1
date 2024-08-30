//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
// Orientação: Insira a quantidade de maçãs que foram compradas, como solicitado no terminal e tecle enter para checar o preço da sua compra:

const prompt = require('prompt-sync')();
let numberApple = Number(prompt(" Insira quantas maçãs foram compradas: "))

if (numberApple < 12) {
    let applePrice = 0.30
    let total = numberApple * applePrice
    console.log(`O valor total da sua compra é R$ ${total}`)
}
else {
    let applePrice = 0.25
    let total = numberApple * applePrice
    console.log(`O valor total da sua compra é R$ ${total}`)
}
