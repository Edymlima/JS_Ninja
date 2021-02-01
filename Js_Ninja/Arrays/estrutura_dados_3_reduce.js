/* Teste Console */

/** Soma com total item */

var valores = [1, 2, 3, 4, 5];

var calc= function(total, item){
    console.log(`total: ${total} item: ${item}`);
    return total + item;
}

var  soma = valores.reduce(calc,0);
console.log(soma);

/** Soma com total, item e Indice */

var valores = [1, 2, 3, 4, 5];

var calc= function(total, item, indice){
    console.log(`total: ${total} item: ${item} indice: ${indice}`);
    return total + item;
}

var  soma = valores.reduce(calc,0);
console.log(soma);


/** Media com total, item, Indice e array */

var valores = [1,2,3,4,5];

var calc= function(total, item, indice, array){
    total += item;
    if (indice == array.length-1) {
        return total / array.length ;
    } 
        return total; 
}

var  media = valores.reduce(calc);
console.log(media);

/** Media com total, item, Indice e array Simplificado */
var valores = [1,2,3,4,5];
var  media = valores.reduce((total, item, indice, array) => {
    total += item;
    if (indice == array.length-1) {
        return total / array.length ;
    } 
        return total; 
});
console.log(media);

/** Reduce com array finalidade dobra os valores do array */

var numeros = [1,2,3,4,5];
var dobro = numeros.reduce((total, item) => {
     total.push(item * 2);
     return total;
},[]);
console.log(dobro);

/** Reduce com array finalidade dobra os valores do array
 *  utilizando o concat
 *  obs o retorno com o push gera erro sendo assim utilizamos o concat para soma os array
 */

var numeros = [1,2,3,4,5];
var dobro = numeros.reduce((total, item) => {    
     return  total.concat(item * 2);
},[]);
console.log(dobro);


/** Reduce com array finalidade filtrar os valores do array menor que 3
 */
var numeros = [1,2,3,4,5];
var filtroMenorQueTres = numeros.reduce((total, item)=>  {
      if (item < 3){
        total.push(item);
      }
      return total; 
},[])
console.log(filtroMenorQueTres);


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

var total = produtos.map((x)=>{
    arr = parseFloat(x.valor); 
    return arr;
})
console.log(total);

var soma = total.reduce((total, item)=>{    
    return  parseFloat(total) + parseFloat(item);
});
console.log(soma);

/** simplificado */

var total = produtos.map((x)=>{
    arr = parseFloat(x.valor); 
    return arr;
}).reduce((total, item)=>{    
    return  parseFloat(total) + parseFloat(item);
});
console.log(total);

