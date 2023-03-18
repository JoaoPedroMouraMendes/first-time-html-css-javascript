//Variáveis para salvar as rotinas
var nome = [];
var inicioHoras = [];
var fimHoras = [];

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

    nome = [];
    inicioHoras = [];
    fimHoras = [];

    const listaRotina = document.getElementById('listarotinas');
    listaRotina.innerHTML = '';
}

function carregarLista() {
    const listaRotina = document.getElementById('listarotinas');

    for (let index = 0; index < nome.length; index++) {

        //Convertendo as horas para string
        let inicioHr = `${inicioHoras[index]}`;
        let hrIniCon = inicioHr.substring(0, 2) + ':' + inicioHr.substring(2, 4);
        let fimHr = `${fimHoras[index]}`;
        let hrFinalCon = fimHr.substring(0, 2) + ':' + fimHr.substring(2, 4);

        listaRotina.innerHTML += `<li>${nome[index]}: ${hrIniCon}-${hrFinalCon}</li>`;
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
    let inicioNum = inputInicioNum.value[0] + inputInicioNum.value[1] + inputInicioNum.value[3] + inputInicioNum.value[4];
    let fimNum = inputFimNum.value[0] + inputFimNum.value[1] + inputFimNum.value[3] + inputFimNum.value[4];
    //Converte as horas que estão em string para int
    inicioNum = parseInt(inicioNum);
    fimNum = parseInt(fimNum);

    //Salvar a rotina
    nome.push(nomeRotina);
    inicioHoras.push(inicioNum);
    fimHoras.push(fimNum);
    salvarVar(nome, inicioHoras, fimHoras);

    //Adiciona a rotina a uma lista
    let item = document.createElement('li');
    item.textContent = `${nomeRotina}: ${inputInicioNum.value}-${inputFimNum.value}`;
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