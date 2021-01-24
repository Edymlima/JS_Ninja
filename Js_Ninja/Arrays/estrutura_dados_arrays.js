/* Teste Console */

/** Iniciar lista com entrada do usuário */

var nomes = [];
var maxConvidados = Number(prompt("Digite a quantidade de convidados"));

for (let i = 0; i < maxConvidados; i++) {
     nomes[i] = prompt("Nome convidados: " + i);    
}
console.log(nomes);

/** Novo convidado insert no final da lista */

nomes.push("Edson");
console.log(nomes);

/** Novo convidado inserto no inicio da lista */

nomes.unshift("Ariane");
console.log(nomes);

/** Deleta o ultimo da lista */

nomes.pop();
console.log(nomes);

/** Delete e retorna o valor deletado */

var nomeExcluído = nomes.shift("excluído");
console.log(nomeExcluído);

/** Delete todos apartir do indice passado */
nomes.splice(0);
console.log(nomes);

/** Delete todos apartir do indice passado que foi o "0", seguendo parametros quantos serão excluídos que foi o "1" */
nomes.splice(0,1);
console.log(nomes);

/** Descobir a posição de um elemento no array lembrando que se inicia com zero(0)*/

nomes.indexOf("edson");

/** Calculadora com laço while e função recursiva */

var somaNumeros = [];

while (true){
    var Numero = prompt("Digite um numero ou 'S' para Sair.");
    if (Numero ==   'S'){
        break;
    }else{
        somaNumeros.push(Number(Numero));
    }
}

var soma = 0;
var c = 0;
function somaRec(){
    if (c == somaNumeros.length) {
        return console.log(soma);    
    }
    soma += (somaNumeros[c]);
    c++;
    somaRec();
}
somaRec();
