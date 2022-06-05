//console.log(p5 as unknown as any);
let navegador;

function setup() {
  createCanvas (1200, 750);

  navegador = new Navegador(this);
  navegador.add(new Inicio(navegador));
  navegador.add(new Seleccion(navegador));
  navegador.add(new Instrucciones(navegador));
  navegador.add(new Juego(navegador, configLevel1, 1));
  navegador.add(new Juego(navegador, configLevel2, 2));
  navegador.add(new Juego(navegador, configLevel3, 3));
  navegador.add(new Juego(navegador, configLevel4, 4));
  navegador.add(new Juego(navegador, configLevel5, 5));
  navegador.add(new Juego(navegador, configLevel6, 6));

  navegador.add(new Win(navegador));

  navegador.add(new GameOver(navegador), 'PERDIO');

  navegador.goIndex(0);

  navegador.setup();

  styledefault();

  onResize();
  window.addEventListener('resize', () => {
    onResize();
  });
}

function draw() {
  background(200);
  /*if (this.navegador.Juego.table === 1) {
    this.app.imageMode(this.app.CORNER);
    this.app.image(this.app.loadImage('./img/tables1.png'), 0, 0);
  }
  if (this.navegador.Juego.table === 3) {
    this.app.imageMode(this.app.CORNER);
    this.app.image(this.app.loadImage('./img/tables2.png'), 0, 0);
  }
  if (this.navegador.Juego.table === 5) {
    this.app.imageMode(this.app.CORNER);
    this.app.image(this.app.loadImage('./img/tables3.png')
    , 0, 0);
  }*/
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

const styledefault = () => {
  canvas.style.width = '';
  canvas.style.height = '';
};

const onResize = () => {
  const { canvas } = this;
  const bodyHTML = document.querySelector('body');

  if (bodyHTML) {
    const totalWidth = bodyHTML.clientWidth;
    const totalHeight = bodyHTML.clientHeight;

    const ratioScaleX = totalWidth / 1200;
    const ratioScaleY = totalHeight / 750;

    console.log('General', totalWidth, totalHeight);

    console.log('Ratio', ratioScaleX, totalHeight);

    if (750 * ratioScaleX <= totalHeight) {
      canvas.style.width = '100%';
      canvas.style.height = 'auto';
    } else {
      canvas.style.height = '100%';
      canvas.style.width = 'auto';
    }
  }
};
//let myp5 = new p5(sketch);
