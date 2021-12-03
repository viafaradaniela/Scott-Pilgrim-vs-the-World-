class Inicio {

    constructor(nav) {
        this.nav = nav;
        this.app = nav.app;
        this.background = this.app.loadImage("./img/inicio-background.png")

        this.btnInicio = new Boton(this.app, {x:this.app.width/2, y:500}, "./img/btn-inicio.png")
    }

    draw() {
        this.app.imageMode(this.app.CORNER)
        this.app.image(this.background, 0, 0);

        this.btnInicio.draw();

    }

    mousePressed() {
        if(this.btnInicio.isOver()){
            this.nav.next();
        }
    }

}