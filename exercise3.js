//3. Receber uma nota de 0 a 10 e classificando como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
// Orientação: Digite um número no terminal e tecle enter para testar a operação:

const prompt = require('prompt-sync')();
let nota = Number(prompt(" Insira a nota do estudante: "))

if ((nota >= 7) && (nota <= 10)) {
    console.log("O estudante está aprovado, parabéns!")
} else if ((nota >= 3) && (nota <= 6)) {
    console.log("O estudante está em recuperação.")
} else if ((nota >= 0 ) && (media < 3)) {
    console.log("O estudante foi reprovado.")
} else {
    console.log("reinicie e insira uma nota válida.")
}
