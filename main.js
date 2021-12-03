var navegador;


function setup() {
  createCanvas(1200, 700);
  navegador = new Navegador(this);
  navegador.add(new Juego(this))
  navegador.add(new Inicio(this))

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