class Personaje {
  constructor(escenario, index, view) {
    this.escenario = escenario;
    this.app = escenario.app;

    // posicion del personaje con el escenario
    const celda = this.escenario.getCeldaIndex(index);
    this.celda = celda;
    this.celdaInit = celda;
    this.pos = { x: celda.pos.x, y: celda.pos.y };
    this.posObj = { x: celda.pos.x, y: celda.pos.y };

    this.lives = 3;
    this.arma = undefined;

    // Variables de movimiento
    this.isMoved = false;

    this.viewUrl = view;
    this.view = this.app.loadImage(view);
    this.vel = 2;

    this.viewDirection = 1;

    this.invulnerable = false;
    this.capa = false;
  }

  draw() {
    if (this.invulnerable === true) {
      if (this.app.frameCount % 15 === 0) {
        this.app.imageMode(this.app.CENTER);
        this.app.push();
        this.app.translate(this.pos.x, this.pos.y);
        this.app.scale(this.viewDirection, 1);
        this.app.image(this.view, 0, 0);
        this.app.pop();
      }
    } else {
      this.app.imageMode(this.app.CENTER);
      this.app.push();
      this.app.translate(this.pos.x, this.pos.y);
      this.app.scale(this.viewDirection, 1);
      this.app.image(this.view, 0, 0);
      this.app.pop();
    }

    this.movimiento();
  }

  changeCelda() {
    // METODO ABSTRACTO
  }

  movimiento() {
    if (this.pos.x !== this.posObj.x) {
      const distancia = this.posObj.x - this.pos.x;
      const direction = distancia >= 0 ? 1 : -1;
      this.pos.x = Math.abs(distancia) <= 5 ? this.posObj.x : this.pos.x + (this.vel * direction);
    } if (this.pos.y !== this.posObj.y) {
      const distancia = this.posObj.y - this.pos.y;
      const direction = distancia >= 0 ? 1 : -1;
      this.pos.y = Math.abs(distancia) <= 5 ? this.posObj.y : this.pos.y + (this.vel * direction);
    } else if (this.pos.x === this.posObj.x && this.pos.y === this.posObj.y) {
      if (this.isMoved === true) {
        this.changeCelda();
      }
      this.isMoved = false;
    }
  }

  goRelativeCelda(columna, fila) {
    const l = this.celda.getLocation();
    const celda = this.escenario.getCelda(l.columna + columna, l.fila + fila);
    if (celda !== undefined && celda.type < CELDA.MURO1) {
      this.setCelda(celda);
    }
  }

  setCelda(celda) {
    if (this.isMoved === false) {
      this.isMoved = true;
      this.celda = celda;
      this.posObj = { x: celda.pos.x, y: celda.pos.y };
    }
  }

  setCeldaPos(celda) {
    this.celda = celda;
    this.celdaInit = celda;
    this.pos = { x: celda.pos.x, y: celda.pos.y };
    this.posObj = { x: celda.pos.x, y: celda.pos.y };
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

  getPos() {
    return {
      x: this.pos.x + 0,
      y: this.pos.y + 0,
    };
  }

  destroy() {

  }
}

//export default Personaje;
