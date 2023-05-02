// Em resumo uma função com callback executa seus códigos e depois injeta valores nos parâmetros de uma função que você vai criar.
// O map é um exemplo de método que tem callback, ele executa seus códigos e te retorna valores em uma função.

function soma(num1, num2, callback) {
    const op = num1 + num2;

    callback(op);
}

soma(2, 3, (op) => {
    console.log(op);
});

const numeros = [0, 1, 2, 3, 4];

function mapClone(array, callback) {
    array.forEach(element => {
        callback(element);
    });
}

mapClone(numeros, (numero) => {
    console.log(numero);
});