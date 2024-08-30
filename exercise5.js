//5. Calcular o IMC de uma pessoa e determinando a categoria de peso utilizando if-else.
// Orientação: Insira seu peso e tecle enter, após insira sua altura, como solicitado no terminal e tecle enter para testar a operação:

const prompt = require('prompt-sync')();
let weight = Number(prompt(" Insira seu peso: "))
let height = Number(prompt(" Insira sua altura: "))

let imc = weight / (height * height)

if (imc < 18.5) {
    console.log("Você está abaixo do peso")
}   
else if ((imc >= 18.5) && (imc <= 24.9)) {
    console.log("Você está no peso normal")
}
else if ((imc >= 25) && (imc <= 29.9)) {
    console.log("Você está com sobrepeso")
}
else if ((imc >= 30) && (imc <= 34.9)) {
    console.log("Seus dados indicam uma obesidade grau I")
}
else if ((imc >= 35) && (imc <= 39.9)) {
    console.log("Seus dados indicam uma obesidade grau II")
}
else if (imc >= 40) {
    console.log("Seus dados indicam uma obesidade grau III")
}   
else {
    console.log("IMC inválido")
}
