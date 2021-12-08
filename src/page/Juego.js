class Juego {

    constructor(nav) {
        this.nav = nav;
        this.app = nav.app;
        this.escenario = new Escenario(this.app, configLevel1)
        this.editor = new Editor(this.escenario)
        this.jugador = new Jugador(this.escenario, 1, this.app.loadImage("./img/players/ramona.png"))
    }


    draw(){ 
        this.escenario.draw()
        this.jugador.draw();
    }


    mousePressed(){
        //this.escenario.mousePressed();
    }

    keyPressed(){
      //  this.editor.keyPressed();
        this.jugador.keyPressed();
    }
}
// ME ESCRIBES POS WHATSAPP CUANDO VUELVAS