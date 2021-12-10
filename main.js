var navegador;


function setup() {

  createCanvas(1200, 750);

  navegador = new Navegador(this);
  navegador.add(new Inicio(navegador))
  navegador.add(new Seleccion(navegador))
  navegador.add(new Juego(navegador, configLevel1))
  navegador.add(new Juego(navegador, configLevel2))
  navegador.add(new Juego(navegador, configLevel3))
  navegador.add(new Juego(navegador, configLevel4))
  navegador.add(new Juego(navegador, configLevel5))
  navegador.add(new Juego(navegador, configLevel6))

  navegador.add(new Ko(navegador), "PERDIO");

  navegador.goIndex(7)

  navegador.setup();
}

function draw() {
  background(200);
  navegador.draw();
}

function mousePressed() {
  navegador.mousePressed();
}

function mouseReleased() {
  navegador.mouseReleased();
}

function keyPressed() {
  navegador.keyPressed();
}

function keyReleased() {
  navegador.keyReleased();
}