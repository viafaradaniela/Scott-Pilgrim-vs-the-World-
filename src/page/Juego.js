class Juego {

    constructor(nav) {
        this.nav = nav;
        this.app = nav.app;
        this.escenario = new Escenario(this.app, configLevel1)
    }


    draw(){ 
    
        this.escenario.draw()
    }


    mousePressed(){
        
    }
}