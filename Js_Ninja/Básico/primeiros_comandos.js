/* Teste Console 
primeiros_comandos
*/

/* Funcao console.log */
var x = 1;
console.log(x);

/* Funcao alert */
var x = 1;
alert(x);

/* Funcao prompt e confirm */
var x = prompt("Digite seu número da sorte");
alert(x);

var x = confirm("O seu número da sorte é 13?");
alert(x);

/*Desafio
Incremente a nossa calculara para receber os valores a partir dos dados digitados pelo usuário e mostrar
como um alerta.
*/

var x = prompt("Digite o primeiro número:");
var y = prompt("Digite o segungudo número:");
var r = Number(x) + Number(y)
alert("A soma de x e y é = " + r);