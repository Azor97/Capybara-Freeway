function setup() {
    createCanvas(500, 400);
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraCarro();
    mostraAtor();
    movimentaCarro();
    movimentaAtor();
    verificaColisao();
    incluiPontos();
    marcaPonto();
    winOrLoser();
  }