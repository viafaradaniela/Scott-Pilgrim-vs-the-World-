class Inicio {

    constructor(nav) {
        this.nav = nav;
        this.app = nav.app;
        this.background = this.app.loadImage("./img/inicio.jpg")

        this.btnInicio = new Boton(this.app, { x: this.app.width * .7, y: 600 }, "./img/btn-inicio.png")
    }

    draw() {
        this.app.imageMode(this.app.CORNER)
        this.app.image(this.background, 0, 0);

        this.btnInicio.draw();

    }

    mousePressed() {
        if (this.btnInicio.isOver()) {
            this.nav.next();
        }
    }

}