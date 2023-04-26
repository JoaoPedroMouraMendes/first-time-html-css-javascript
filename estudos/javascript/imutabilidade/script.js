//O que seria a imutabilidade, em resumo é fazer com que não seja possível alterar valores
//Uma const por exemplo não permite que seu valor seja alterado

const gmail = 'helloworld@gmail.com';
/*Caso eu tentasse mudar o valor dessa variável como por exemplo "gmail = 'olamundo@gmail.com'"
Isso criaria um erro já que não é possível alterar o valor de uma const
Porém isso não se aplica a só uma variável do tipo const */

//Imutabilidade com objetos

//Objetos também podem ser imutaveis

class User {
    #name;
    #password;

    constructor(name, password) {
        this.#name = name;
        this.#password = password;
    }

    set name(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
}

/*As variáveis estão com uma hashtag isso torna elas privadas
Elas não podem ser acessadas e nem alteradas, mas com esses métodos get e set elas podem ser acessadas e modificadas novamente */

const jhon = new User('jhon', 'helloworld123');

console.log(jhon.name); //'jhon'
//Nesse caso retornou devido ao método get

console.log(jhon.password); //undefined
//Não deu para acessar a variável pois ela não tem o método para isso

/*Nesse caso quando se deixa uma variável privada na classe podemos modificar a forma que obtemos
valores e que modificamos */