let numeros = [];

function adicionarNumero() {
    //Pegando tags
    let inputNum = document.getElementById('num');
    let sel = document.getElementById('sel');
    //Valor do input
    let num = Number(inputNum.value);

    //Verificando algum tipo de erro
    if (inputNum.value.length == 0) {
        alert('Digite um número');
        return;
    } else if (num > 100 || num < 0) {
        alert('Número invalido');
        return;
    }
    for (let index = 0; index < numeros.length; index++) {
         if (numeros[index] == num) {
            alert('O número não pode ser adicionado quando for repetido');
            return;
         }
    }

    //Adicionando o número
    let option = document.createElement('option');
    option.text = `número ${num} adicionado`;
    sel.appendChild(option);

    //Limpando os resultados caso sejam existente
    let res = document.getElementById('res');
    res.innerHTML = '';

    //Adicionando o número ao array
    numeros.push(num);

    //Apaga o valor que está no input
    inputNum.value = '';
    inputNum.focus();
}

function analizarNumeros() {
    //Verificar algum erro
    if (numeros.length == 0) {
        alert('adicione no mínimo um número');
        return;
    }

    //Pegando a tag responsável pelos resultados
    let res = document.getElementById('res');
    //Adicionar informações
    //Totais de números
    let pNumTotais = document.createElement('p');
    pNumTotais.innerText = `Ao todo foram adicionados ${numeros.length}`;
    res.appendChild(pNumTotais);
    //Número maior
    let pNumMaior = document.createElement('p');
    let numMaior = 0;
    for (let index = 0; index < numeros.length; index++) {
        if (numMaior < numeros[index]) {
            numMaior = numeros[index];
        }        
    }
    pNumMaior.innerText = `O maior valor informado é ${numMaior}`
    res.appendChild(pNumMaior);
    //Número menor
    let pNumMenor = document.createElement('p');
    let numMenor = numeros[0];
    for (let index = 0; index < numeros.length; index++) {
        if (numMenor > numeros[index]) {
            numMenor = numeros[index];
        }        
    }
    pNumMenor.innerText = `O menor valor informado é ${numMenor}`
    res.appendChild(pNumMenor);
    //Somando todos os números
    let pSoma = document.createElement('p');
    let valorSoma = 0;
    for (let index = 0; index < numeros.length; index++) {
        valorSoma += numeros[index];
    }
    pSoma.innerText = `A soma de todos os valores é igual a ${valorSoma}`;
    res.appendChild(pSoma);
    //Fazendo a média dos valores
    let pMedia = document.createElement('p');
    let valorMedia = valorSoma / numeros.length;
    valorMedia = valorMedia.toFixed(2);
    pMedia.innerText = `O valor da média é ${valorMedia}`;
    res.appendChild(pMedia);
}

function limpar() {
    //Pegando as tags
    let sel = document.getElementById('sel');
    let res = document.getElementById('res');

    //Limpando as tags
    sel.innerHTML = '';
    res.innerHTML = '';

    //Limpando o valor do array
    numeros = [];
}