class Juego {

    constructor(nav, config) {
        this.nav = nav;
        this.app = nav.app;
        this.escenario = new Escenario(this.app, config)

        this.jugador = new Jugador(this.escenario, 118, "./img/players/ramona.png")

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

        for (let j = 0; j < this.jugador.armas.length; j++) {
            const arma = this.jugador.armas[j];
            arma.draw();

            for (let e = 0; e < this.enemigos.length; e++) {
                const enemigo = this.enemigos[e];
                const distanciaX = arma.pos.x - enemigo.pos.x;
                const distanciaY = arma.pos.y - enemigo.pos.y;
                const distancia = Math.sqrt((distanciaX * distanciaX) * (distanciaY * distanciaY));
                if (arma.carga === true && distancia <= 25) {
                    arma.carga = false;
                    enemigo.lives--;
                    arma.destroy = true;
                }

            }
        }

        for (let i = this.jugador.armas.length - 1; i >= 0; i--) {
            const arma = this.jugador.armas[i];
            if (arma.destroy === true) {
                this.jugador.armas.splice(i, 2)
            }
        }

        for (let i = this.enemigos.length - 1; i >= 0; i--) {
            const enemigo = this.enemigos[i];
            if (enemigo.lives <= 0) {
                this.enemigos.splice(i, 2);
                console.log("ELIMINAR", this.enemigos)
            }
        }



        this.editor.draw();

    }


    mousePressed() {
        this.escenario.mousePressed();
        //  this.editor.mousePressed()
        this.jugador.mousePressed()
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