function contar() {
    //Pegando os inputs
    let inputIni = document.getElementById('ini');
    let inputFim = document.getElementById('fim');
    let inputPasso = document.getElementById('passo');
    //Pegando os valores dos inputs;
    const INI = Number(inputIni.value);
    const FIM = Number(inputFim.value);
    let passo = Number(inputPasso.value);

    //Checando se os dados estão certos
    if (INI > FIM) {
        alert('o número inicial não pode ser maior que o final');
        return;

    } else if (inputIni.value.length == 0 || inputFim.value.length == 0) {
        alert('por favor preencha todos os dados');
        return;

    } else if (inputPasso.value.length === 0) {
        alert('você não informou o valor do passo, nesse caso vamos considera-lo como 1');
        passo = 1;

    } else if (passo <= 0) {
        alert('o valor do passo não pode ser 0 ou um número negátivo');
        return;
    }

    //Pegando as tags de resultado
    let res = document.getElementById('#res');
    let resP = document.querySelector('#res > p');

    //Contando
    resP.innerHTML = 'Contanto:';
    let ultNumero = 0;
    for (let index = INI; index < FIM; index += passo) {
        resP.innerHTML += ` ${index}`;
        ultNumero = index;
    }
    if (ultNumero + passo === FIM) {
        resP.innerHTML += ` ${FIM}\u{1F6A9}`;
    }
}