class Seleccion {
    constructor(nav) {
        this.nav = nav;
        this.app = nav.app;
        this.background = this.app.loadImage("./img/seleccion personaje.jpg")

        this.btnMan = new Boton(this.app, { x: 400, y: 300 }, "./img/players/seleccion1.png")
        this.btnWoman = new Boton(this.app, { x: 800, y: 300 }, "./img/players/seleccion2.png")
    }

    draw() {
        this.app.imageMode(this.app.CORNER)
        this.app.image(this.background, 0, 0);

        this.btnMan.draw();
        this.btnWoman.draw();

    }

    mousePressed() {
        if (this.btnMan.isOver()) {
            this.nav.config.gender = "man";
            console.log(this.nav.config)
            this.nav.next();
        }

        if (this.btnWoman.isOver()) {
            this.nav.config.gender = "woman";
            console.log(this.nav.config)
            this.nav.next();
        }
    }

}