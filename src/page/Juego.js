class Juego {

    constructor(nav, config) {
        this.nav = nav;
        this.app = nav.app;
        this.config = config;

    }

    setup() {

        const config = this.config;
        this.escenario = new Escenario(this.app, config)

        this.enemigos = [];

        for (let i = 0; i < config.enemigos.length; i++) {
            const enemigoData = config.enemigos[i];
            const enemigo = new Enemigo(this.escenario, enemigoData.index, enemigoData.view, enemigoData.movimientos);
            this.enemigos.push(enemigo)
        }

        this.editor = new Editor(this.escenario, this.enemigos)

        const viewPersonaje = this.nav.config.gender === "man" ? "./img/players/scott.png" : "./img/players/ramona.png";
        this.jugador = new Jugador(this.escenario, 118, viewPersonaje, this.nav)

        this.taskbar = new TaskBar(this.jugador, this.nav);

        this.jugador.puntuacion = this.nav.config.puntuacion;

        console.log("EJECUTO SETUP")

    }


    draw() {
        this.escenario.draw();
        this.taskbar.draw();

        for (let i = 0; i < this.enemigos.length; i++) {
            const enemigo = this.enemigos[i];
            enemigo.draw()
            enemigo.keyGenerator()

            if (this.app.dist(this.jugador.pos.x, this.jugador.pos.y, enemigo.pos.x, enemigo.pos.y) <= 25) {
                this.jugador.colision();
            }
        }

        this.jugador.draw();
        this.jugador.slide();


        //Matantando enemigos
        for (let j = 0; j < this.jugador.armas.length; j++) {
            const arma = this.jugador.armas[j];
            arma.draw();

            for (let e = 0; e < this.enemigos.length; e++) {
                const enemigo = this.enemigos[e];
            
                const distancia = this.app.dist(arma.pos.x, arma.pos.y, enemigo.pos.x, enemigo.pos.y);

                //Validando colicion con el arma
                if (arma.carga === true && distancia <= 25) {
                    arma.carga = false;
                    enemigo.lives--;
                    arma.destroy = true;
                }

            }
        }

        //Eliminando armas disparadas
        for (let i = this.jugador.armas.length - 1; i >= 0; i--) {
            const arma = this.jugador.armas[i];
            if (arma.destroy === true) {
                this.jugador.armas.splice(i, 1)
            }
        }

        //Removiendo enemigos muertos
        for (let i = this.enemigos.length - 1; i >= 0; i--) {
            const enemigo = this.enemigos[i];
            //Validando muete del enemigo
            if (enemigo.lives <= 0) {
                this.jugador.puntuacion += enemigo.moneda;
                this.enemigos.splice(i, 1);
            }
        }

        //Siguiente nivel
        if (this.enemigos.length === 0) {
            this.nav.config.puntuacion = this.jugador.puntuacion;
            this.nav.next()
        }



        this.editor.draw();

    }


    mousePressed() {
        this.escenario.mousePressed();
        this.editor.mousePressed()
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
