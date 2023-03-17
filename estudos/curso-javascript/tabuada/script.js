function gerarTabuada() {
    //Peganda as tags
    let inputNum = document.getElementById('num');
    let selTab = document.getElementById('sel-tab')

    //Verificando se tem algum erro
    if (inputNum.value.length == 0) {
        alert('Digite algum valor');
        return;
    }

    //Pega o valor do input
    let num = Number(inputNum.value);
    //Zerando as option da área da tabuada
    selTab.innerHTML = '';

    for (let index = 1; index <= 10; index++) {
        let option = document.createElement('option');
        option.text = `${num} x ${index} = ${num*index}`;
        option.value = `v${index}`;
        selTab.appendChild(option);
    }
}