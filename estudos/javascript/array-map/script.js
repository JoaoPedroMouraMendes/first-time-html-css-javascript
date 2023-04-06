//Aprendendo a usar a função map e reduce em arrays

class user {
    name;
    year;

    constructor(nome, year) {
        this.name = nome;
        this.year = year;
    }
}

let users = new Array(new user('Pedro', 18));
users.push(new user('Juca', 16));

//Essa função lembra o forEach mas tem informações extras que da para extrair
//O user é o array atual exemplo (array[1]), o indice e o indice atual do array e o array é todo o array
//Nesse caso oq está acontecem é que a variavel criada 'changeYear' está somando +1 na idade de todos os users
let changeYear = users.map(function(user, indice, array) {
    console.log(array[indice]);
    return {
        name: user.name,
        year: user.year + 1
    }
});

console.log(changeYear);

//Essa função serve para juntar tudo em uma variável sem usar array
let names = users.reduce((storage, current) => storage += current.name, '');

console.log(names);