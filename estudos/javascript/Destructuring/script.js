const numeros = [1, 2, 3, 4, 5];

//Destructuring, ao invês de eu falar o valor de cada variável uma de cada vez eu posso fazer isso com apenas uma linha, a atribuição de valores é em ordem então a primeira variável recebe o primeiro valor do array.
const [primeiro, segundo, ...finais] = numeros;

console.log(primeiro, segundo, finais);

//Também funciona em classes
class Pessoa {
    nome = 'João';
    idade = 18;
};

const {nome, idade} = new Pessoa;

console.log(nome, idade);