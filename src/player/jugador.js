class Jugador extends Personaje {
  constructor(escenario, index, view, nav) {
    super(escenario, index, view);

    this.nav = nav;
    this.isMoveUp = false;
    this.isMoveDown = false;
    this.isMoveLeft = false;
    this.isMoveRight = false;

    this.puntuacion = '120';

    this.points = '120';

    this.isArmado = false;

    this.isCapa = false;

    this.armas = [];
  }

  changeCelda() {
    if (this.celda.type === CELDA.MONEDA) {
      // Aqui recoge moneda
      this.puntuacion += "100";
      this.celda.type = this.celda.typeDefault;
      this.nav.soundCoin.play();
    }

    if (this.celda.type === CELDA.VIDA) {
      // Aqui recoge vida
      this.lives += "1";
      this.celda.type = this.celda.typeDefault;
      this.nav.soundVida.play();
    }

    if (this.celda.type === CELDA.ARMA) {
      // Aqui recoge arma
      this.isArmado = true;
      this.celda.type = this.celda.typeDefault;
      this.nav.soundArma.play();
    }
    if (this.celda.type === CELDA.CAPA) {
      // Aqui recoge capa
      this.puntuacion += "100";
      this.celda.type = this.celda.typeDefault;
      this.nav.soundArma.play();
    }
  }

  slide() {
    if (this.isMoveUp === true) {
      this.goRelativeCelda(0, -1);
    }
    if (this.isMoveDown === true) {
      this.goRelativeCelda(0, 1);
    }
    if (this.isMoveLeft === true) {
      this.goRelativeCelda(-1, 0);
    }
    if (this.isMoveRight === true) {
      this.goRelativeCelda(1, 0);
    }
  }

  mousePressed() {
    if (this.isArmado === true) {
      const pos = { x: this.app.mouseX, y: this.app.mouseY };
      const arma = new Arma(this, this.celda.getViewIndex(CELDA.ARMA), pos);
      this.armas.push(arma);
    }
  }

  keyPressed() {
    const key = this.app.key.toLowerCase();

    if (key === 'w') {
      this.isMoveUp = true;
    }

    if (key === 's') {
      this.isMoveDown = true;
    }

    if (key === 'a') {
      this.viewDirection = 1;
      this.isMoveLeft = true;
    }

    if (key === 'd') {
      this.viewDirection = -1;
      this.isMoveRight = true;
    }

    if (key === ' ') {
      console.log('capa');
      this.invulnerable = true;
    }
  }

  keyReleased() {
    const key = this.app.key.toLowerCase();

    if (key === 'w') {
      this.isMoveUp = false;
    }

    if (key === 's') {
      this.isMoveDown = false;
    }

    if (key === 'a') {
      this.isMoveLeft = false;
    }

    if (key === 'd') {
      this.isMoveRight = false;
    }
    if (key === ' ') {
      setTimeout(() => {
        this.invulnerable = false;
      }, 4000);
    }
  }

  colision() {
    if (this.invulnerable === false) {
      this.invulnerable = true;
      this.lives--;
      if (this.lives <= 0) {
        this.nav.goName('PERDIO');
      }

      setTimeout(() => {
        this.invulnerable = false;
      }, 2000);
    }
  }

  destroy() {
    this.isMoveUp = false;
    this.isMoveDown = false;
    this.isMoveLeft = false;
    this.isMoveRight = false;

    this.isMoved = false;
  }
}

//export default Jugador;
