//Esse método é para tirar elementos de um array e também pode adicionar elementos ao mesmo tempo que tira outros

const frutas = ['maçã', 'uva', 'abacaxi', 'laranja'];

//O primeiro parâmetro é para dizer onde começa e o segundo é a quantidade de elementos que vão ser retidados
frutas.splice(1, 1);
console.log(frutas); //maçã, abacaxi, laranja

frutas.splice(0, 2);
console.log(frutas); //laranja

//Depois do segundo parâmetro os próximos são para adicionar elementos, não há limites para colocar elementos
frutas.splice(1, 0, 'romã', 'amora', 'acerola');
console.log(frutas); //laranja, romã, amora, acerola