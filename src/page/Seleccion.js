class Seleccion{
    constructor(nav) {
        this.nav = nav;
        this.app = nav.app;
        this.background = this.app.loadImage("./img/inicio-background.png")

        this.btnMan = new Boton(this.app, {x:400, y:300}, "./img/btn-inicio.png")
        this.btnWoman = new Boton(this.app, {x:800, y:300}, "./img/btn-inicio.png")
    }

    draw() {
        this.app.imageMode(this.app.CORNER)
        this.app.image(this.background, 0, 0);

        this.btnMan.draw();
        this.btnWoman.draw();

    }

    mousePressed() {
        if(this.btnMan.isOver()){
            this.nav.next();
        }

        if(this.btnWoman.isOver()){
            this.nav.next();
        }
    }

}