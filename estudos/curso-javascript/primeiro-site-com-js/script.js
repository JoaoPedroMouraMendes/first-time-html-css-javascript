function carregar() {
    //Pegando as tags
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('imagem');
    var body = window.document.querySelector('body');

    //Pegando as horas
    var data = new Date();
    var horas = data.getHours();
    horas = 15;
    //Aplicando as horas na tag
    msg.innerText = `Agora são ${horas} horas`

    //Tempos do dia
    if (horas >= 0 && horas < 6) {
        //Madrugada
        imagem.src = 'imagens/madrugada.png';
        body.style.backgroundColor = 'rgb(40, 50, 75)';
    } else if (horas >= 6 && horas < 12) {
        //Manhã
        imagem.src = 'imagens/manha.png';
        body.style.backgroundColor = 'rgb(130, 185, 180)';
    } else if (horas >= 12 && horas < 18) {
        //Tarde
        imagem.src = 'imagens/tarde.png';
        body.style.backgroundColor = 'rgb(145, 105, 105)';
    } else {
        //Noite
        imagem.src = 'imagens./noite.png';
        body.style.backgroundColor = 'rgb(71, 67, 97)';
    }
}