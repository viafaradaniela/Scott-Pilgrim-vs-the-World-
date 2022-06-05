class Boton {
  // Pos {x, y}

  constructor(app, pos, url) {
    this.app = app;
    this.view = this.app.loadImage(url);
    this.pos = pos;
  }

  draw() {
    this.app.imageMode(this.app.CENTER);
    this.app.image(this.view, this.pos.x, this.pos.y);
  }

  isOver() {
    let isSobre = false;
    const { mouseX } = this.app;
    const { mouseY } = this.app;
    const width = this.view.width / 2;
    const height = this.view.height / 2;
    const { x } = this.pos;
    const { y } = this.pos;

    if (mouseX > x - width && mouseX < x + width && mouseY > y - height && mouseY < y + height) {
      isSobre = true;
    }

    return isSobre;
  }
}
//export default Boton;
