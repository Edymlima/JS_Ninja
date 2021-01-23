/* Teste Console 
Na programação em geral é OK uma função "chamar" ela mesmo. Ou seja, dentro do código existir uma
chamada para ele mesmo:
*/

function ola(){
    console.log('Loop infinito');
    ola();
}
/** Loop infinito */

function potencia(base, expoente) {
    if (expoente == 0) {
    return 1;
    } else {
    return base * potencia(base, expoente - 1); // nessa parte a recursão dá lugar ao for
    }
   }
   console.log(potencia(2, 3));


function fatorial(f){
       if (f == 0){
           return 1;
       }else{
           return( f * fatorial(f - 1));
       }
   }
   fatorial(5);


