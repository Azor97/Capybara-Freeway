let yAtor = 366;
let xAtor = 150;
let colisao = false;
let meusPontos = 0;
let perdeuOuVenceu = 'TENTE ATRAVESSAR!';

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 35, 30);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 1;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if(podeSeMoverAltura()){
        yAtor += 1;
    }
    }
    if (keyIsDown(LEFT_ARROW)) {
        if(moverEsquerda()){
        xAtor -= 2;
    }
    }
    if (keyIsDown(RIGHT_ARROW)) {
        if(moverDireita()){
        xAtor += 2;
    }
    }
}

function verificaColisao() {
    //collideRectRect(x, y, width, height, x2, y2, width2, height2 )

    for (i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectRect(xCarros[i], yCarros[i], 40, 30, xAtor, yAtor, 35, 30)
        if (colisao) {
            voltaAtor();
            meusPontos--;
            somDaColisao;
        }
    }
}

function voltaAtor() {
    yAtor = 366;
}

function incluiPontos() {
    textAlign(CENTER);
    textSize(20);
    text(meusPontos, width / 5, 25);
}

function marcaPonto() {
    if (yAtor < 15) {
        meusPontos++;
        voltaAtor();
        somDoPonto;
    }
};

function winOrLoser() {
    textAlign(CENTER);
    textSize(20);
    text(perdeuOuVenceu, width / 2, 25);
    if (meusPontos == 2) {
        meusPontos = 0;
        perdeuOuVenceu = 'VOCE VENCEU!'
        setTimeout(function () {
            window.location.reload(1);
        }, 2000);
    } else if (meusPontos == -10) {
        meusPontos = 0;
        perdeuOuVenceu = 'PERDEU!';
        setTimeout(function () {
            window.location.reload(1);
        }, 2000);

    }
}

function podeSeMoverAltura(){
    return yAtor < 366;
}

console.log(xAtor);

function moverEsquerda(){
    return xAtor > -4;
}
function moverDireita(){
    return xAtor < 470;
}
//-4 xAtor
//xAtor 470