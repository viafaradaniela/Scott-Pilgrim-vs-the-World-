class Jugador extends Personaje {

    constructor(escenario, index, view) {
        super(escenario, index, view)

        this.isMoveUp = false;
        this.isMoveDown = false;
        this.isMoveLeft = false;
        this.isMoveRight = false;

        this.puntuacion = 0;

        this.isArmado = false;

        this.armas = [];
    }

    changeCelda() {
        if (this.celda.type === CELDA.MONEDA) {
            //Aqui recoge moneda
            this.puntuacion += 1;
            this.celda.type = this.celda.typeDefault;
        }

        if (this.celda.type === CELDA.VIDA) {
            //Aqui recoge vida
            this.lives += 1;
            this.celda.type = this.celda.typeDefault;
        }

        if (this.celda.type === CELDA.ARMA) {
            //Aqui recoge arma
            this.isArmado = true;
            this.celda.type = this.celda.typeDefault;
        }
    }



    slide() {
        if (this.isMoveUp === true) {
            this.goRelativeCelda(0, -1)
        }
        if (this.isMoveDown === true) {
            this.goRelativeCelda(0, 1)
        }
        if (this.isMoveLeft === true) {
            this.goRelativeCelda(-1, 0)
        }
        if (this.isMoveRight === true) {
            this.goRelativeCelda(1, 0)
        }
    }

    mousePressed() {
        if(this.isArmado === true){
            const pos = { x: this.app.mouseX, y: this.app.mouseY }
            const arma = new Arma(this, this.celda.getViewIndex(CELDA.ARMA), pos);
            this.armas.push(arma);
        }
      
    }

    keyPressed() {

        const key = this.app.key.toLowerCase();

        if (key === "w") {
            this.isMoveUp = true;
        }

        if (key === "s") {
            this.isMoveDown = true;
        }

        if (key === "a") {
            this.viewDirection = 1;
            this.isMoveLeft = true;
        }

        if (key === "d") {
            this.viewDirection = -1;
            this.isMoveRight = true;
        }

    }

    keyReleased() {
        const key = this.app.key.toLowerCase();

        if (key === "w") {
            this.isMoveUp = false;
        }

        if (key === "s") {
            this.isMoveDown = false;
        }

        if (key === "a") {
            this.isMoveLeft = false;
        }

        if (key === "d") {
            this.isMoveRight = false;
        }
    }
}