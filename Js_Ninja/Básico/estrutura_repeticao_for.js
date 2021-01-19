/* Teste Console 
    A estrutura de repetição FOR
*/

for (x = 0; x < 10; x++) { // 1, 2 e 3
    console.log(x); // comando de execução
}

/*
Operadores do FOR

    Diferente (!=)
    Menor (<) ou Menor igual (<=)
    Maior (>) ou Maior igual (>=)

*/

for (x = 0; x <= 15; x++) {
    console.log(x);
}

/*
O contador do FOR
    x++ - incrementar de 1 em 1.
    x-- - decrementar de 1 em 1.
    x+=2 - incrementar de 2 em 2 (ou de n);
    x-=2 - decrementar de 2 em 2 (ou de n);
    x*=2 - multiplicar de 2 em 2 (ou de n);
*/

for (x = 10; x > 0; x--) {
    console.log(x);
}

/*
Desafio
Utilizando o for crie um programa que calcule a função log Math.log(x) para cada valor do contador.
Este programa deve solicitar os valores iniciais, finais e de incremento. E também escrever na tela o
resultado.
*/

var vi = Number(prompt("Digite o valor inicial"));
var vf = Number(prompt("Digite o valor final"));
var vc = Number(prompt("Digite o valor de incremento"));
var res = 0;
for (x = vi; x <= vf; x += vc) {
    res = Math.log(x);
    console.log(res);
}