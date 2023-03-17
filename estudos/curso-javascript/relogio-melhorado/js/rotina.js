//Variáveis para salvar as rotinas
let nome = [];
let inicioHoras = [];
let fimHoras = [];

function carregarVar() {
    if (!localStorage.nome) return;

    nome = JSON.parse(localStorage.getItem('nome'));
    inicioHoras = JSON.parse(localStorage.getItem('inicioHoras'));
    fimHoras = JSON.parse(localStorage.getItem('fimHoras'));
}

function salvarVar(nome, inicioHoras, fimHoras) {
    localStorage.nome = JSON.stringify(nome);
    localStorage.inicioHoras = JSON.stringify(inicioHoras);
    localStorage.fimHoras = JSON.stringify(fimHoras);
}

function resetar() {
    localStorage.removeItem('nome');
    localStorage.removeItem('inicioHoras');
    localStorage.removeItem('fimHoras');

    const listaRotina = document.getElementById('listarotinas');
    listaRotina.innerHTML = '';
}

function carregarLista() {
    const listaRotina = document.getElementById('listarotinas');
    for (let index = 0; index < nome.length; index++) {
        listaRotina.innerHTML += `<li>${nome[index]}: ${inicioHoras[index]}-${fimHoras[index]}</li>`;
    }
}

function adicionarRotina() {
    const inputNomeRotina = document.getElementById('nomerotina');
    const inputInicioNum = document.getElementById('inicionum');
    const inputFimNum = document.getElementById('fimnum');
    const listaRotina = document.getElementById('listarotinas');
    
    //Verifica se tem algum erro

    //Pega os valores dos inputs
    let nomeRotina = inputNomeRotina.value;
    let inicioNum = inputInicioNum.value;
    let fimNum = inputFimNum.value;

    //Salvar a rotina
    nome.push(nomeRotina);
    inicioHoras.push(inicioNum);
    fimHoras.push(fimNum);
    salvarVar(nome, inicioHoras, fimHoras);

    //Adiciona a rotina a uma lista
    let item = document.createElement('li');
    item.textContent = `${nomeRotina}: ${inicioNum}-${fimNum}`;
    listaRotina.appendChild(item);

    //Limpa os inputs
    inputNomeRotina.value = '';
    inputInicioNum.value = '';
    inputFimNum.value = '';
}

function detectarRotinaAtual(horasAtual) {
    let rotinaAtual = '';
    for (let index = 0; index < inicioHoras.length; index++) {
        if (horasAtual >= inicioHoras[index] && horasAtual < fimHoras[index]) {
            rotinaAtual = nome[index];
            return rotinaAtual;
        }
    }
}