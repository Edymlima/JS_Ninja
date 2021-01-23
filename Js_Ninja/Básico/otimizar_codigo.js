/* Teste Console 

Usando funções para otimizar o código

*/

/** Modo sem função */
var x = 10;
var y = 20;
var resultado = x + y;
console.log(resultado);


/** Modo com função */
var soma = function(x,y){
    var Resultado = x + y;
    return Resultado
}
console.log(soma(10, 20));

/** Utilizando variável global */
var x = "variável global";
var f1 = function() {
 x = "variável da função 1"; // altera a variável global a primeira vez
}
f1();

var f2 = function() {
 x = "variável da função 2"; // altera a variável global a segunda vez
}
f2();

console.log(x);

/** Passando uma função no parâmetro de outra */

var x = Number(prompt("Digite o primeiro número:"));
var y = Number(prompt("Digite o segungudo número:"));

function soma(x, y){
    return x + y;
}

function sub(x, y){
    return x - y;
}

function mult(x, y){
    return x * y;
}

function div(x, y){
    if( x < y){
        return("Operação invalida x não pode ser menor que y")
    }else{
        return x / y;
    }
    
}

function calculadora (x , y , operacao){
    return "Resultado do calculo = " + operacao(x, y);
}

calculadora(x,y,soma);
calculadora(x,y,sub);
calculadora(x,y,mult);
calculadora(x,y,div);