class Celda {
    constructor(escenario, pos, location, index, type) {
        this.escenario = escenario;
        this.app = escenario.app;
        this.location = location;
        this.pos = pos;
        this.width = 100;
        this.height = 100;
        this.index = index;
        this.type = type;
        this.views = escenario.views;
    }

    draw() {
        const view = this.getView();
        if (view !== undefined) {
            this.app.imageMode(this.app.CENTER)
            this.app.image(view, this.pos.x, this.pos.y)
        }

    }


    getView() {
        return this.views[this.type];
    }

    getPos() {
        return {
            x: this.pos.x,
            y: this.pos.y
        }
    }

    getLocation(){
        return {
            columna: this.location.columna,
            fila: this.location.fila
        }
    }
}


const CELDA = {
    VACIO1: 0,
    VACIO2: 1,
    ARMA: 2,
    MONEDA: 3,
    VIDA: 4,
    MURO1: 5,
    MURO2: 6
}