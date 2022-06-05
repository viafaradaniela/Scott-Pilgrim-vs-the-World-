class Instrucciones {
  constructor(nav) {
    this.nav = nav;
    this.app = nav.app;
    this.background = this.app.loadImage('./img/instrucciones.png');
    this.btnNext2 = new Boton(this.app, { x: this.app.width * 0.5, y: 600 }, './img/botonplaypeque.png');
  }

  draw() {
    this.app.imageMode(this.app.CORNER);
    this.app.image(this.background, 0, 0);
    this.btnNext2.draw();
  }

  mousePressed() {
    if (this.btnNext2.isOver()) {
      this.nav.next();
    }
  }
}
//export default Instrucciones;
