function verificar() {
    let inputAno = window.document.getElementById('txtano');
    let ano = inputAno.value;
    let data = new Date();
    let anoAtual = data.getFullYear();
    let divRes = window.document.getElementById('divres');

    //Caso o ano seja inválido
    if (ano > anoAtual || ano.length == 0) {
        alert('Ano inválido, tente novamente');
        return;
    }

    //Calcula a idade
    let idade = anoAtual - ano;
    let txtIdade = '';
    if (idade === 0 ) {
        txtIdade = 'com menos de 1 ano';
    } else if (idade === 1) {
        txtIdade = 'de 1 ano';
    } else {
        txtIdade = `de ${idade} anos`;
    }

    //Descobre a faixa etária
    let fEtaria = '';
    if (idade >= 0 && idade < 11) {
        //Criança
        fEtaria = 'crianca';
    } else if (idade < 18) {
        //Jovem
        fEtaria = 'jovem';
    } else if (idade < 50) {
        //Adulto
        fEtaria = 'adulto';
    } else {
        //Idoso
        fEtaria = 'idoso';
    }

    //Verifica o gênero e coloca uma foto
    let inputGenero = window.document.getElementsByName('radsex');
    let genero = '';
    let img = window.document.createElement('img');
    img.setAttribute('id', 'foto');
    if (inputGenero[0].checked) {
        //Homem
        genero = 'um homem';
        img.setAttribute('src', `imagens/${fEtaria}-m.jpg`);
    } else {
        //Mulher
        genero = 'uma mulher';
        img.setAttribute('src', `imagens/${fEtaria}-f.jpg`);
    }

    //Exibe a idade
    divRes.style.textAlign = 'center';
    let res = window.document.createElement('p');
    divRes.innerHTML = '';
    res.innerHTML = `Os dados informados correspondem a ${genero} ${txtIdade}`;
    divRes.appendChild(res);

    //Adicionando o componente imagem
    img.style.marginTop = '20px';
    divRes.appendChild(img);
}