class Juego {
  constructor(nav, config, table) {
    this.nav = nav;
    this.app = nav.app;
    this.config = config;
    this.table = table;
  }

  setup() {
    const { config } = this;
    this.escenario = new Escenario(this.app, config);

    this.enemigos = [];

    for (let i = 0; i < config.enemigos.length; i++) {
      const enemigoData = config.enemigos[i];
      const enemigo = new Enemigo(this.escenario, enemigoData.index, enemigoData.view, enemigoData.movimientos);
      this.enemigos.push(enemigo);
    }

    this.editor = new Editor(this.escenario, this.enemigos);

    const viewPersonaje = './img/players/harry.png';
    const viewPersonaje2 = './img/players/hermione.png';
    const celdaPos = this.config.jugador;
    const celdaPos2 = this.config.jugador2;
    this.jugador = new Jugador(this.escenario, celdaPos, viewPersonaje, this.nav);
    this.jugador2 = new Jugador2(this.escenario, celdaPos2, viewPersonaje2, this.nav);

    this.taskbar = new TaskBar(this.jugador, this.nav);
    this.taskbar = new TaskBar(this.jugador2, this.nav);

    this.jugador.puntuacion = this.nav.config.puntuacion;
    this.jugador.lives = this.nav.config.vidas;

    this.jugador2.puntuacion = this.nav.config.puntuacion;
    this.jugador2.lives = this.nav.config.vidas;

    console.log('EJECUTO SETUP');
  }

  draw() {
    this.escenario.draw();
    this.taskbar.draw();

    for (let i = 0; i < this.enemigos.length; i++) {
      const enemigo = this.enemigos[i];
      enemigo.draw();
      enemigo.keyGenerator();

      if (this.app.dist(this.jugador.pos.x, this.jugador.pos.y, enemigo.pos.x, enemigo.pos.y) <= 25) {
        this.jugador.colision();
      }

      if (this.app.dist(this.jugador2.pos.x, this.jugador2.pos.y, enemigo.pos.x, enemigo.pos.y) <= 25) {
        this.jugador2.colision();
      }
    }

    this.jugador.draw();
    this.jugador.slide();
    this.jugador2.draw();
    this.jugador2.slide();

    // Matantando enemigos
    for (let j = 0; j < this.jugador.armas.length; j++) {
      const arma = this.jugador.armas[j];
      arma.draw();

      for (let e = 0; e < this.enemigos.length; e++) {
        const enemigo = this.enemigos[e];

        const distancia = this.app.dist(arma.pos.x, arma.pos.y, enemigo.pos.x, enemigo.pos.y);

        // Validando colicion con el arma
        if (arma.carga === true && distancia <= 25) {
          arma.carga = false;
          enemigo.lives--;
          arma.destroy = true;
        }
      }
    }

    // Matantando enemigos
    for (let j = 0; j < this.jugador2.armas.length; j++) {
      const arma = this.jugador2.armas[j];
      arma.draw();

      for (let e = 0; e < this.enemigos.length; e++) {
        const enemigo = this.enemigos[e];

        const distancia = this.app.dist(arma.pos.x, arma.pos.y, enemigo.pos.x, enemigo.pos.y);

        // Validando colicion con el arma
        if (arma.carga === true && distancia <= 25) {
          arma.carga = false;
          enemigo.lives--;
          arma.destroy = true;
        }
      }
    }

    // Eliminando armas disparadas
    for (let i = this.jugador.armas.length - 1; i >= 0; i--) {
      const arma = this.jugador.armas[i];
      if (arma.destroy === true) {
        this.jugador.armas.splice(i, 1);
      }
    }

    for (let i = this.jugador2.armas.length - 1; i >= 0; i--) {
      const arma = this.jugador2.armas[i];
      if (arma.destroy === true) {
        this.jugador2.armas.splice(i, 1);
      }
    }

    // Removiendo enemigos muertos
    for (let i = this.enemigos.length - 1; i >= 0; i--) {
      const enemigo = this.enemigos[i];
      // Validando muete del enemigo
      if (enemigo.lives <= 0) {
        this.jugador.puntuacion += enemigo.moneda;
        this.enemigos.splice(i, 1);
      }
    }

    for (let i = this.enemigos.length - 1; i >= 0; i--) {
      const enemigo = this.enemigos[i];
      // Validando muete del enemigo
      if (enemigo.lives <= 0) {
        this.jugador2.puntuacion += enemigo.moneda;
        this.enemigos.splice(i, 1);
      }
    }

    // Siguiente nivel
    if (this.enemigos.length === 0) {
      this.nav.config.puntuacion = this.jugador.puntuacion;
      this.nav.config.vidas = this.jugador.lives;

      this.nav.next();
    }

    if (this.enemigos.length === 0) {
      this.nav.config.puntuacion = this.jugador2.puntuacion;
      this.nav.config.vidas = this.jugador2.lives;

      this.nav.next();
    }

    this.editor.draw();
  }

  mousePressed() {
    this.escenario.mousePressed();
    this.editor.mousePressed();
    this.jugador.mousePressed();
    this.jugador2.mousePressed();
  }

  keyPressed() {
    this.editor.keyPressed();
    this.jugador.keyPressed();
    this.jugador2.keyPressed();
  }

  keyReleased() {
    this.jugador.keyReleased();
    this.jugador2.keyReleased();
  }
}
//export default Juego;
