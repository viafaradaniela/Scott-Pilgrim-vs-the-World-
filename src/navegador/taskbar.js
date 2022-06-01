class TaskBar {
    constructor(jugador, jugador2, nav) {
        this.nav = nav;
        this.app = jugador.app;
        this.jugador = jugador;

        this.app = jugador2.app;
        this.jugador2 = jugador2;

        this.background = this.app.loadImage("./img/barra.png");
        this.moneda = this.app.loadImage("./img/players/moneda.png")
        this.font = this.app.loadFont("./fonts/hooge-05-54.ttf");

        const urlView = "./img/players/vida1.png";

        this.viewVidas = this.app.loadImage(urlView);
    }

    draw() {
        this.app.imageMode(this.app.CORNER);
        this.app.image(this.background, 0, 0)

        this.app.imageMode(this.app.CENTER);
        this.app.image(this.moneda, 60, 25)
        this.app.fill(255);
        this.app.textSize(25)
        this.app.textFont(this.font);
        this.app.text(this.jugador.puntuacion, 85, 35);
        this.app.text(this.jugador2.puntuacion, 85, 35);


        const vw = this.viewVidas.width;

        for (let i = 0; i < this.jugador.lives; i++) {

            this.app.image(this.viewVidas, this.app.width - (((vw+10) * i) +45), 25)

        }

        for (let i = 0; i < this.jugador2.lives; i++) {

            this.app.image(this.viewVidas, this.app.width - (((vw+10) * i) +45), 25)

        }

      


    }
}