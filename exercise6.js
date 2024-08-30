
//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
//Orientação: Insira os valores dos lados do triângulo e tecle enter para testar a operação:

const prompt = require('prompt-sync')();
let sideA = Number(prompt(" Insira a largura do triângulo: "))
let sideB = Number(prompt(" Insira a altura do lado direito do triângulo: "))
let sideC = Number(prompt(" Insira a altura do lado esquerdo do triângulo: "))
function isTriangle(sideA, sideB, sideC) {
    if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
        return true;
    }
    else return false;
}

if (isTriangle(sideA, sideB, sideC)) {
    console.log("É um triangulo")
    if ((sideA == sideB && sideB != sideC) || (sideA == sideC && sideB != sideC) || (sideB == sideC && sideA != sideB)) {
        console.log("Trata-se de um triângulo isósceles por possuir dois lados iguais")
    }
    else if (sideA != sideB || sideA != sideC || sideB != sideC) {
        console.log("Trata-se de um triângulo escaleno por possuir todos os lados diferentes")
    }
    else {
        console.log("Trata-se de um triângulo eqUiláiero por possuir todos os lados iguais")
    }
}
else {
    console.log("Não é um triangulo")
}
