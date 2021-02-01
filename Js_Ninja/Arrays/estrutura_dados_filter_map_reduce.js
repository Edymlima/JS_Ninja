/** Função generica de agrupamento */
/*
    filter : Retorna um array com os valores filtrados
    map : Retorna um array com os valores modificados e mesma quantidades de elementos
    reduce : Retorna um array ou valor agregado a partir do array principal    
*/

var produtos = [{
    id: '1',
    nome: 'notebook',
    categoria: 'computador',
    valor: 5000.00,
    qtd: 3
},
{
    id: '2',
    nome: 'PC Gamer',
    categoria: 'computador',
    valor: 7000.00,
    qtd: 2
},
{
    id: '3',
    nome: 'teclado',
    categoria: 'acessorio',
    valor: 150.00,
    qtd: 10
}
];
/** Modo function */
function groupBy(array, prop){
    var value = array.reduce((total, item)=>{
        var key = item[prop];
        total[key] = (total[key] || []).concat(item);
        return total;
    }, {});
    return value;
}
var produtosFilter = produtos.filter(f => {
    return f.categoria == 'acessorio';
})
var agrupamento = groupBy(produtosFilter,'categoria');


/** Utilizando o Prototype para realizar a chamada via callback */
Array.prototype.groupBy = function(prop) {
    var value = this.reduce((total, item)=>{
        var key = item[prop];
        total[key] = (total[key] || []).concat(item);
        return total;
    }, {});
    return value;
}

var produtosFilter = produtos.filter(f => {
    return f.categoria == 'acessorio';
}).groupBy('categoria'); //Chamada callback

console.log(produtosFilter);


/** Controle de convidados 
 * Critérios 

 * [ x ] - Maior de 18 anos
 * [ x ] - Mulher paga meia entrada
 * [ x ] - Ordenado por nomes

 */

 festa = [
     {
         entrada: 100.00,
         convidados: [
                    {id : 1, nome : "Edy", idade : 30, sexo : 'M'},
                    {id : 2, nome : "Miguel", idade : 17, sexo : 'M'},
                    {id : 3, nome : "Lu", idade : 23, sexo : 'F'},
                    {id : 4, nome : "Ariane", idade : 50, sexo : 'F'}
                  ]
     }
]

var lista = festa[0].convidados.map( pessoa => {
    convidados = festa.map( valor => {
        var v = 0;
            if(pessoa.sexo == 'F'){
                v = valor.entrada - (valor.entrada * 50 / 100);     
            } else {
                v = valor.entrada
            }
        obj = {
            id : pessoa.id,
            nome : pessoa.nome, 
            idade : pessoa.idade, 
            sexo : pessoa.sexo,           
            entrada : v  
        }
    })   
    return obj;
}).filter(idade => {
    return idade.idade >=18;
}).sort((a, b) => {
    return a.nome.localeCompare(b.nome);
})


console.log(lista);
