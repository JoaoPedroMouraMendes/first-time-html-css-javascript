const relogio = setInterval(function time() {
    let horas = document.getElementById('horas');
    let data = new Date();
    //Pegando as horas, minutos e segundos
    let horasAtual = data.getHours();
    let minAtual = data.getMinutes();
    let segAtual = data.getSeconds();

    if (horasAtual < 10) horasAtual = '0' + horasAtual;

    if (minAtual < 10) minAtual = '0' + minAtual;

    if (segAtual < 10) segAtual = '0' + segAtual;

    horas.innerText = `${horasAtual}:${minAtual}:${segAtual}`;
})