class Enemigo extends Personaje {
  constructor(escenario, index, view, movimientos) {
    super(escenario, index, view);

    const {
      UP, DOWN, LEFT, RIGHT,
    } = MOV;

    this.step = 0;
    this.movimientos = movimientos;
    this.automatic = true;
    this.moneda = 100;
  }

  keyGenerator() {
    const movimiento = this.getMovimiento();
    if (this.automatic === true && movimiento !== undefined && this.isMoved === false) {
      if (movimiento === MOV.UP) {
        this.goRelativeCelda(0, -1);
      }

      if (movimiento === MOV.DOWN) {
        this.goRelativeCelda(0, 1);
      }

      if (movimiento === MOV.LEFT) {
        this.viewDirection = 1;
        this.goRelativeCelda(-1, 0);
      }

      if (movimiento === MOV.RIGHT) {
        this.viewDirection = -1;
        this.goRelativeCelda(1, 0);
      }

      if (this.step + 1 >= this.movimientos.length) {
        this.step = 0;
      } else {
        this.step += 1;
      }
    }
  }

  getMovimiento() {
    return this.movimientos[this.step];
  }
}

const MOV = {
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4,
};
//export default Enemigo;
