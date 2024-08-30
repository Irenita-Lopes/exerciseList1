//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
//Orientação:  Insina números no terminal quando solicitado e tecle enter para testar o programa.

const prompt = require('prompt-sync')();

let sum = 0
let count = 0   

while (true) {
    let number = parseFloat(prompt("Insira um número: "))   

    if (number == 0) {
        break
    }
    sum += number
    count++
}

console.log(sum / count)
