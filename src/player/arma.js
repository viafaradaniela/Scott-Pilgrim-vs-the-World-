class Arma {
  constructor(jugador, view, posObj) {
    this.jugador = jugador;
    this.pos = jugador.getPos();
    this.posAct = jugador.getPos();
    this.posObj = posObj;
    this.app = this.jugador.app;
    this.escenario = this.jugador.escenario;
    this.view = view;
    this.rotate = 0;
    this.isMoved = true;

    // NUMERO DE MOVIMIENTOS
    this.vel = 10;
    this.distancia = 0;

    this.destroy = false;

    this.carga = true;
  }

  draw() {
    this.app.imageMode(this.app.CENTER);
    this.app.push();
    this.app.translate(this.pos.x, this.pos.y);
    //  this.app.rotate(this.app.radians(this.rotate))
    this.app.image(this.view, 0, 0);
    this.app.pop();

    this.movimiento();
  }

  movimiento() {
    if (this.isMoved === true && (this.pos.x !== this.posObj.x || this.pos.y !== this.posObj.y)) {
      this.rotate += 10;

      // CATETO ABYACENTE
      const distanciaX = this.posObj.x - this.posAct.x;
      const directionX = distanciaX > 0 ? 1 : -1;
      // CATETO OPUESTO
      const distanciaY = this.posObj.y - this.posAct.y;
      const directionY = distanciaY > 0 ? 1 : -1;
      // HIPOTENUSA
      const distancia = Math.sqrt(distanciaX ** 2 + distanciaY ** 2);
      const angulo = Math.asin(distanciaY / distancia);

      this.distancia += this.vel;

      const x = (Math.cos(angulo) * this.distancia * directionX) + this.posAct.x;
      const y = (Math.sin(angulo) * this.distancia) + this.posAct.y;

      this.pos.x = x;
      this.pos.y = y;

      if (Math.abs(distancia - this.distancia) <= 5) {
        this.pos.x = this.posObj.x;
        this.pos.y = this.posObj.y;
        if (this.isMoved === true) {
          this.changeCelda();
        }
        this.isMoved = false;
      }

      const celda = this.escenario.getCeldaPos(this.pos.x, this.pos.y);
      if (celda !== undefined && celda.type >= CELDA.MURO1) {
        this.colisionMuro();
      }
    }
  }

  colisionMuro() {
    this.isMoved = false;
    setTimeout(() => {
      this.destroy = true;
    }, 500);
  }

  changeCelda() {
    setTimeout(() => {
      this.destroy = true;
    }, 500);
  }
}
//export default Arma;
