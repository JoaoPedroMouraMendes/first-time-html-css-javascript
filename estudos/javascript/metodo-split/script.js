//O método split procura um padrão que você passa de parâmetro.
//Ao encontra o valor do parâmetro o método começa a cortar essa string e retorna um array

const fato = 'nada é impossível basta acreditar';

const palavras = fato.split(' ');
console.log(palavras) //nada, é, impossível, basta, acreditar

//Se o primeiro parâmetro for uma string vária o método vai fazer um array com todas as letras da string
const letras = fato.split('');
console.log(letras); //n, a, d, a,  , é...

//Também pode se incluir outro parâmetro de delimita a quantidade de separação

const poucasPalavras = fato.split(' ', 2); //nada, é
console.log(poucasPalavras);