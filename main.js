var navegador;


function setup() {

  createCanvas(1200, 750);

  navegador = new Navegador(this);
  navegador.add(new Inicio(navegador))
  navegador.add(new Seleccion(navegador))
  navegador.add(new Instrucciones(navegador))
  navegador.add(new Juego(navegador, configLevel1))
  navegador.add(new Juego(navegador, configLevel2))
  navegador.add(new Juego(navegador, configLevel3))
  navegador.add(new Juego(navegador, configLevel4))
  navegador.add(new Juego(navegador, configLevel5))
  navegador.add(new Juego(navegador, configLevel6))
  navegador.add(new Win(navegador))

  navegador.add(new Ko(navegador), "PERDIO");

  navegador.goIndex(0)

  navegador.setup();

  styledefault();

  onResize()
  window.addEventListener("resize", ()=>{
    onResize()
  })

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


const styledefault = () => {
  canvas.style.width = "";
  canvas.style.height = "";
}


const onResize = () => {
  const canvas = this.canvas;
  const bodyHTML = document.querySelector("body");

  if (bodyHTML) {

    const totalWidth = bodyHTML.clientWidth;
    const totalHeight = bodyHTML.clientHeight;

    const ratioScaleX = totalWidth / 1200;
    const ratioScaleY = totalHeight / 750;

    console.log("General",totalWidth, totalHeight)

    console.log("Ratio",ratioScaleX, totalHeight)

    if (750 * ratioScaleX <= totalHeight) {

      canvas.style.width = "100%";
      canvas.style.height = "auto";

    } else {
      canvas.style.height = "100%";
      canvas.style.width = "auto";

    }

  }



}

