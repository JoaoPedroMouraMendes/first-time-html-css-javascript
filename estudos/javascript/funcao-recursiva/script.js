//Essa função vai ficar se chamando até que o número seja igual a 1
//Por se tratar de uma função que se chama dá-se o nome dela de função recursiva
function factorial(n) {
    if(n === 1)
        return 1;
    else
        return n * factorial(n - 1);
}

console.log(factorial(5)); /*Exemplo de execução da função:
return 5 * factorial(5 - 1)
return 4 * factorial(4 - 1)
return 3 * factorial(3 - 1)
return 2 * factorial(2 - 1)
return 1

O que está acontecendo é que a função pega seu valor atual e retorna ele mais ela mesma porém
com seu valor atual subtraído por 1, ao chegar em 1 apenas vai retornar seu valor e não a si mesma.

ou seja: return 5 * 4 * 3 * 2 * 1
*/

//Outro exemplo de função recursiva
function clearArray(array) {
    console.log(array);
    if (array.length === 0) {
        console.log('array esvaziado');
        return;
    }
    array.shift();
    return clearArray(array);
}

let numberStorage = [1, 2, 3];
clearArray(numberStorage);