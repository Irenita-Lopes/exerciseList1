
//4. Menu interativo no console que oferece ao usuário a escolha de três opções, utilizando "switch-case".
// Orientação: No terminal, digite o número da opção que deseja conforme a legenda indica:

console.log("Suas opções para seguir adiante são: \nDigite 1 para falar com o atendente \nDigite 2 para retornar ao menu \nDigite 3 para encerrar a chamada")
const prompt = require('prompt-sync')();
let selectedOption = Number(prompt("Escolha um número: "))
switch(selectedOption){
    case 1:
        console.log("Aguarde para falar com o atendente")
        break
    case 2:
        console.log("Retornando ao menu")
        break
    case 3:
            console.log("Encerrando a chamada")
        break
    default:
        console.log("opção inválida")
        break
}