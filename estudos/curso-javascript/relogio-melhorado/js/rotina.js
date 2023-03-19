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

    //Pega os valores dos inputs
    let nomeRotina = inputNomeRotina.value;
    let inicioNum = inputInicioNum.value[0] + inputInicioNum.value[1] + inputInicioNum.value[3] + inputInicioNum.value[4];
    let fimNum = inputFimNum.value[0] + inputFimNum.value[1] + inputFimNum.value[3] + inputFimNum.value[4];

    //Verifica se tem algum erro
    if (verificarErros(inicioNum, fimNum)) {
        return;
    }

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

function verificarErros(inicioRot, fimRot) {
    const inputNomeRotina = document.getElementById('nomerotina');
    const inputInicioNum = document.getElementById('inicionum');
    const inputFimNum = document.getElementById('fimnum');

    //Verifica se todos os inputs foram preenchidos
    if (inputNomeRotina.value.length == 0 || inputInicioNum.value.length == 0 || inputFimNum.value.length == 0) {
        alert('[ERRO] Preencha todos os campos')
        return true;
    }

    //Verifica se a rotina não começa e termina no mesmo tempo
    if (inicioRot == fimRot) {
        alert('[ERRO] O início da rotina não pode ser ao mesmo tempo que se termina');
        return true;
    }

    //Verifica se a rotina interfere no horário de outras
    //Pegando as horas e minutos separados
    let inicioHr = inicioRot.substring(0, 2);
    let inicioMin = inicioRot.substring(2, 4);
    let fimHr = fimRot.substring(0, 2);
    let fimMin = fimRot.substring(2, 4);

    //Pegando a duração da rotina
    let inicio = new Date(`2023-03-18T${inicioHr}:00:00`);
    let fim = new Date(`2023-03-18T${fimHr}:00:00`);
    let diferencao = new Date(fim - inicio);
    let duracaoRotinaHr = diferencao.getUTCHours();

    for (let x = 0; x < nome.length; x++) {
        //Calcula Horas
        let minutos = parseInt(inicioMin);
        for (let y = 0; y <= duracaoRotinaHr; y++) {
            //Verifica se a hora da rotina atual bate com alguma das outras rotinas
            let inicial = new Date(`2023-03-18T${inicioHr}:00:00`);
            inicial.setHours(inicial.getHours() + y);
            let hora = inicial.getHours();
            //Pegando as horas das rotinas salvas
            let inicioHrSalva = inicioHoras[x].substring(0, 2);
            let fimHrSalva = fimHoras[x].substring(0, 2);
            //Pegando os minutos das rotinas salvas
            let inicioMinSalva = inicioHoras[x].substring(2, 4);
            let fimMinSalva = fimHoras[x].substring(2, 4);

            if (hora == inicioHrSalva || hora == fimHrSalva) {
                if (y == 0 && hora == fimHrSalva || y == duracaoRotinaHr && hora == inicioHrSalva) {} else {
                    alert('[ERRO]');
                    return true;
                }
            }

            //Verifica os minutos
            if (duracaoRotinaHr == 0) {
                for (minutos; minutos < fimMin; minutos++) {
                    if (hora == inicioHrSalva || hora == fimHrSalva) {
                        if (minutos == inicioMinSalva || minutos == fimMinSalva) {
                            alert('[ERRO]');
                            return true;
                        }
                    }
                }
            } else if (y == duracaoRotinaHr) {
                for (minutos; minutos < fimMin; minutos++) {
                    if (hora == inicioHrSalva || hora == fimHrSalva) {
                        if (minutos == inicioMinSalva || minutos == fimMinSalva) {
                            alert('[ERRO]');
                            return true;
                        }
                    }
                }
            } else {
                for (minutos; minutos < 60; minutos++) {
                    if (hora == inicioHrSalva || hora == fimHrSalva) {
                        if (minutos == inicioMinSalva || minutos == fimMinSalva) {
                            alert('[ERRO]');
                            return true;
                        }
                    }
                }
            }

            if (y == 0) {
                minutos = parseInt(inicioMinSalva);
            } else {
                minutos = 0;
            }

            //Verifica se a hora das outras rotinas bate com a atual

            //Calcular duração da rotina salva
            let inicioSalv = new Date(`2023-03-18T${inicioHrSalva}:00:00`);
            let fimSalv = new Date(`2023-03-18T${fimHrSalva}:00:00`);
            let diferencaoSalv = new Date(fimSalv - inicioSalv);
            let duracaoRotinaHrSalv = diferencaoSalv.getUTCHours();

            for (let z = 0; z <= duracaoRotinaHrSalv; z++) {
                let inicialSalv = new Date(`2023-03-18T${inicioHrSalva}:00:00`);
                inicialSalv.setHours(inicialSalv.getHours() + z);
                let horaSalv = inicialSalv.getHours();

                if (horaSalv == inicioHr || horaSalv == fimHr) {
                    if (z == 0 && horaSalv == fimHr || z == duracaoRotinaHrSalv && horaSalv == inicioHr) {} else {
                        alert('[ERRO]');
                        return true;
                    }
                }

                //Verifica os minutos
                if (duracaoRotinaHrSalv == 0) {
                    for (minutos; minutos < fimMinSalva; minutos++) {
                        if (horaSalv == inicioHr || horaSalv == fimHr) {
                            if (minutos == inicioMin || minutos == fimMin) {
                                alert('[ERRO]');
                                return true;
                            }
                        }
                    }
                } else if (y == duracaoRotinaHrSalv) {
                    for (minutos; minutos < fimMinSalva; minutos++) {
                        if (horaSalv == inicioHr || horaSalv == fimHr) {
                            if (minutos == inicioMin || minutos == fimMin) {
                                alert('[ERRO]');
                                return true;
                            }
                        }
                    }
                } else {
                    for (minutos; minutos < 60; minutos++) {
                        if (horaSalv == inicioHr || horaSalv == fimHr) {
                            if (minutos == inicioMin || minutos == fimMin) {
                                alert('[ERRO]');
                                return true;
                            }
                        }
                    }
                }
            }

            minutos = 0;
        }
    }

    return false;
}

function detectarRotinaAtual(horasAtual) {
    let rotinaAtual = '';
    for (let index = 0; index < inicioHoras.length; index++) {
        if (horasAtual >= inicioHoras[index] && horasAtual < fimHoras[index]) {
            rotinaAtual = nome[index];
            return rotinaAtual;
        }
        //Caso a rotina comece em um dia e acabe em outro
        if (inicioHoras[index] > fimHoras[index]) {
            let fimHorasAjus = fimHoras[index] * 10;
            let horasAtualAjus = horasAtual * 10;

            if (horasAtualAjus < fimHorasAjus) {
                rotinaAtual = nome[index];
                return rotinaAtual;
            }
        }
    }
}