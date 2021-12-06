class Juego {

    constructor(nav) {
        this.nav = nav;
        this.app = nav.app;
        this.escenario = new Escenario(this.app, configLevel1)
        this.editor = new Editor(this.escenario)
    }


    draw(){ 
        this.escenario.draw()
    }


    mousePressed(){
        this.escenario.mousePressed();
    }

    keyPressed(){
        this.editor.keyPressed();
    }
}