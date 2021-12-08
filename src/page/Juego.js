class Juego {

    constructor(nav, config) {
        this.nav = nav;
        this.app = nav.app;
        this.escenario = new Escenario(this.app, config)

        this.jugador = new Jugador(this.escenario, 1, "./img/players/ramona.png")

        this.enemigos = [];

        for (let i = 0; i < config.enemigos.length; i++) {
            const enemigoData = config.enemigos[i];
            const enemigo = new Enemigo(this.escenario, enemigoData.index, enemigoData.view, enemigoData.movimientos);
            this.enemigos.push(enemigo)
        }



        this.editor = new Editor(this.escenario, this.enemigos)
    }


    draw() {
        this.escenario.draw()

        for (let i = 0; i < this.enemigos.length; i++) {
            const enemigo = this.enemigos[i];
            enemigo.draw()
            enemigo.keyGenerator()
        }

        this.jugador.draw();
        this.jugador.slide();

        this.editor.draw();

    }


    mousePressed() {
        this.escenario.mousePressed();
        this.editor.mousePressed()
    }

    keyPressed() {
        this.editor.keyPressed();
        this.jugador.keyPressed();
    }

    keyReleased() {
        this.jugador.keyReleased();
    }
}
// ME ESCRIBES POS WHATSAPP CUANDO VUELVAS