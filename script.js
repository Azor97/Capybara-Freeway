function setup() {
    createCanvas(500, 400);
    //somDaTrilha.loop();
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