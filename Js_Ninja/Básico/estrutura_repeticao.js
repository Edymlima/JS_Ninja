/* Teste Console 
    A estrutura de repetição
*/

/* WHILE */
var x = 1
while (x < 150) {
    console.log("Passei aqui pela " + x + "º");
    x = x + 1;
}

/*
Nas condições de parada você pode utilizar o:
    Igual (==)
    Diferente (!=)
    Menor (<) ou Menor igual (<=)
    Maior (>) ou Maior igual (>=)
E:
    AND (&&)
    OR (||)
    NOT (!)
*/

/**
  x++ e o mesmo que  x = x + 1
  x-- e o mesmo que  x = x - 1
 */

var x = 10;
while (x < 10) {
    // comando
    x++; // isso é um atalho para x = x + 1
}

var x = 10;
while (x > 0) {
    // comando
    x--; // isso é um atalho para x = x - 1
}

/*Desafio
No nosso exemplo da calculadora criar uma rotina que fique sempre perguntando os valores até que seja
digitado a letra N em qualquer valor (indicando uma condição de parada).
*/

    var c = "S";

    while ( c == "S" ) {

        var x = prompt("Digite o primeiro número:");

        var y = prompt("Digite o segungudo número:");
   
        if (x === "" || y === ""){
            alert("E obrigatório informar todos os valores.")
            break;
        }

        var r = Number(x) + Number(y)

        alert("A soma de x e y é = " + r);

        c = prompt("Deseja fazer novo calculo? \n Digite -S- para continuar \n Digite -N- para sair");
    }

