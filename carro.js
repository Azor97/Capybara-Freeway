let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [46, 100, 150, 215, 266, 320];
let velocidades = [7.2, 6, 4.5, 5, 7, 4];


function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++)
    image(imagemCarros[i], xCarros[i], yCarros[i], 40, 30);
}

function movimentaCarro() {
    for (xCarros[0] -= velocidades[0]; xCarros[0] <= -20; xCarros[0] = 600);

    for (xCarros[1] -= velocidades[1]; xCarros[1] <= -150; xCarros[1] = 600);

    for (xCarros[2] -= velocidades[2]; xCarros[2] <= -60; xCarros[2] = 600);

    for (xCarros[3] -= velocidades[3]; xCarros[3] <= -100; xCarros[3] = 600);

    for (xCarros[4] -= velocidades[4]; xCarros[4] <= -90; xCarros[4] = 600);

    for (xCarros[5] -= velocidades[5]; xCarros[5] <= -50; xCarros[5] = 600);
}
