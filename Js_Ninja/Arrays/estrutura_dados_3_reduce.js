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
