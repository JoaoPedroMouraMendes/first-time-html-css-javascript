//Esse método retorna partes de um array de acordo com valores dos parâmetros
//Nesse método se declara o início e o fim do que você quer retornar de uma array

const animais = ['pato', 'coelho', 'cachorro', 'gato'];

console.log(animais.slice(2, 3)); //cachorro
//O primeira parâmetro começa do 0 como um array normal, porém o segundo começa do 1 como o length

console.log(animais.slice(0, 3)); //pato, coelho, cachorro

console.log(animais.slice(-1)); //gato

//Não funciona só com array
const comunicado = 'os animais fugiram';

console.log(comunicado.slice(3, comunicado.length)); //animais fugiram