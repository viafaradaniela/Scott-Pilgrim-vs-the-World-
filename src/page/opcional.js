class Opcional {
  constructor(nav) {
    this.nav = nav;
    this.app = nav.app;
    this.background = this.app.loadImage('./img/opcional.png');
    this.btnNext = new Boton(this.app, { x: this.app.width * 0.5, y: 600 }, './img/boton.png');
  }

  draw() {
    this.app.imageMode(this.app.CORNER);
    this.app.image(this.background, 0, 0);
    this.btnNext.draw();
  }

  mousePressed() {
    if (this.btnNext.isOver()) {

      // this.nav.next();
    }
  }
}
//export default Opcional;
