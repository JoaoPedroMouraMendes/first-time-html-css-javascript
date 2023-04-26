//Currying, nada mais é do que fazer diminuir a quantidade de parâmetros de uma função dividindo ela em partes
//Nesse exemplo primeiro salvamos o valor do imposto e depois calculamos o preço com imposto
//Também serve para evitar repetições de parâmetros

function armazenarImposto(imposto) {
    return function (preco) {
        return preco * (1 + imposto);
    }
}

const calcularPrecoComImposto = armazenarImposto(0.10);

console.log(calcularPrecoComImposto(20));
console.log(calcularPrecoComImposto(5));
console.log(calcularPrecoComImposto(13));
console.log(calcularPrecoComImposto(35));