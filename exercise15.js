//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
//Orientação:

 for (let i = 0; i < 10; i++) {
     console.log(fibonacci(i));
 }
 function fibonacci(n) {
     if ((n == 0) || (n == 1)) {
         return n
     }
     return fibonacci(n - 1) + fibonacci(n - 2);
 }  
