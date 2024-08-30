//2. Classificar a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
// Orientação: Digite um número no terminal e tecle enter para testar a operação:

const prompt = require('prompt-sync')();
let agePerson = Number(prompt(" Insira sua idade: "))

if ((agePerson >= 0) && (agePerson <= 12)) {
    console.log("Você é uma criança")
}
else if ((agePerson >= 13) && (agePerson <= 17)) {
    console.log("Você é uma pessoa adolescente")
}
else if ((agePerson >= 18) && (agePerson <= 59)) {
    console.log("Você é uma pessoa adulta")
}
else if (agePerson >= 60) {
    console.log("Você é uma pessoa idosa")
}
else {
    console.log("Idade inválida")
}
