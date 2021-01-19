/* Teste Console  
    Estrutura de decisao e desvio condicional
*/


/* IF simples */
var idade = prompt("Digite sua idade");

if (idade >= 18) {
    console.log("Parabéns você já pode dirigir.");
}

/* O uso do ELSE */
var idade = prompt("Digite sua idade");
if (idade >= 18) {
    console.log("Libera catraca");
   } else {
    console.log("Barra catraca");
}

/**
 *Operadores de comparação no IF
    Igual (==)
    Diferente (!=)
    Menor (<) ou Menor igual (<=)
    Maior (>) ou Maior igual (>=)
 */

if (idade == 18) {
    console.log("Parabéns pelos 18 anos, amanhã não terá meu abraço."); 
}

if (idade != 18) {
    console.log("Meu abraço é para quem tem 18 anos, você não tem hoje."); 
}
if (idade > 18) {
    console.log("Poxa parabéns atrasado."); 
}

if (idade >= 18) {
    console.log("Parabéns meu amigo, vamos sair hoje a noite e nos vingar daquele programa que te barrou no show semana passada."); 
}

if (idade < 18) {
    console.log("1..2..3.... Tô contando nos dedos."); 
}

if (idade <= 18) {
    console.log("Uhuuu chegou."); 
}
/**
 * Operadores lógicos IF
    AND (&&)
    OR (||)
    NOT (!)
 */

if ((idade == 18) && (cidade == "SP")) {
    console.log("Parabéns pelos 18 anos, você é de SP e ganhou um ingressográtis.");
}

if ((idade == 18) || (cidade == "SP")) {
    console.log("Bem-vindo, você possuí 18 ou é de SP.");
}

if (!false) {
    console.log("Comando executado.");
}

/*
Desafio
No nosso desafio da calculadora, criar um IF para verificar se o valor é maior que 10, caso seja, informar
uma mensagem escolhida por você.
*/

var x = prompt("Digite o primeiro numero: ");
var y = prompt("Digite o segungo numero: ");
var r = Number(x) + Number(y)

if (r > 10) {
    alert("A soma de x e Y e maior que 10 ");
}else{
    alert("A soma de x e Y e menor que 10 ");
}