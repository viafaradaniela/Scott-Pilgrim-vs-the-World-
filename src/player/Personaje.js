class Personaje {
    constructor(escenario, index, view) {
        this.escenario = escenario;
        this.app = escenario.app;

        //posicion del personaje con el escenario
        const celda = this.escenario.getCeldaIndex(index)
        this.celda = celda;
        this.pos = { x: celda.pos.x, y: celda.pos.y }

        this.lives = 3;
        this.arma = undefined;

        //Variables de movimiento
        this.isMoved = false;

        this.isMoveUp = false;
        this.isMoveDown = false;
        this.isMoveLeft = false;
        this.isMoveRight = false;

        this.view = view;
        this.vel = 30;

    }

    draw() {

        this.app.imageMode(this.app.CENTER);
        this.app.image(this.view, this.pos.x, this.pos.y)

    }

    setCelda(celda) {
        this.celda = celda;
        this.pos = { x:celda.pos.x, y:celda.pos.y }
    }
}