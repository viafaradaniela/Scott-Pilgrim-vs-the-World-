class Jugador extends Personaje {

    constructor(escenario, index, view) {
        super(escenario, index, view)
    }

    goRelativeCelda(columna, fila){
        const l = this.celda.getLocation();
        const celda = this.escenario.getCelda(l.columna + columna, l.fila + fila);
        if(celda !== undefined && celda.type < CELDA.MURO1){
            this.setCelda(celda)
        }
     
    }

    keyPressed() {

        const key = this.app.key.toLowerCase();

        if (key === "w") {
            this.goRelativeCelda(0,-1)
        }

        if (key === "s") {
            this.goRelativeCelda(0,1)
        }

        if (key === "a") {
            this.goRelativeCelda(-1,0)
        }

        if (key === "d") {
            this.goRelativeCelda(1,0)
        }

    }

    keyReleased() {

    }
}