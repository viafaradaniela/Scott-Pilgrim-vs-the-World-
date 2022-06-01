class Ko {
    constructor(nav) {
        this.nav = nav;
        this.app = nav.app;
        this.background = this.app.loadImage("./img/muerte.jpg");

        this.btnYes = new Boton(this.app, { x: 500, y: this.app.height - 100 }, "./img/yes.png")
        this.btnNo = new Boton(this.app, { x: 700, y: this.app.height - 100}, "./img/no.png")
    }


    draw() {
        this.app.imageMode(this.app.CORNER);
        this.app.image(this.background, 0, 0);

        this.btnYes.draw();
        this.btnNo.draw();
    }

    mousePressed(){
        if(this.btnYes.isOver()){
          this.nav.goIndex(this.nav.indexAnterior);
        }

        if(this.btnNo.isOver()){
           this.nav.goIndex(0)
        }
    }
}