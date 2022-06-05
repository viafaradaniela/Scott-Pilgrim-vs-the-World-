class Navegador {

    constructor(app) {
        this.app = app;
        this.indexAnterior = 0;
        this.index = 0;
        this.pantallas = [];

        this.config = {
            gender: "man",
            puntuacion: 0,
            vidas: 3
        }

        this.soundCoin = new Sonido("./sonido/moneda.mp3");
        this.soundArma = new Sonido("./sonido/arma.mp3");
        this.soundVida = new Sonido("./sonido/vida.mp3");

    }

    setup() {
        const p = this.getCurrentPantalla()
        if (p !== undefined && p.isSetup === false && p.pantalla.setup) {
            p.isSetup = true;
            p.pantalla.setup()
        }

    }

    draw() {

        this.setup();

        const p = this.getCurrentPantalla()
        if (p !== undefined && p.pantalla.draw) {
            p.pantalla.draw()
        }
    }

    mousePressed() {
        const p = this.getCurrentPantalla();
        if (p !== undefined && p.pantalla.mousePressed) {
            p.pantalla.mousePressed()
        }
    }

    mouseReleased() {
        const p = this.getCurrentPantalla();
        if (p !== undefined && p.pantalla.mouseReleased) {
            p.pantalla.mouseReleased()
        }
    }

    keyPressed() {
        const p = this.getCurrentPantalla();
        if (p !== undefined && p.pantalla.keyPressed) {
            p.pantalla.keyPressed()
        }
    }

    keyReleased() {
        const p = this.getCurrentPantalla();
        if (p !== undefined && p.pantalla.keyReleased) {
            p.pantalla.keyReleased()
        }
    }

    onFinish() {
        const p = this.getCurrentPantalla();
        if (p !== undefined) {

            if (p.pantalla.onFinish) {
                p.pantalla.onFinish()

            }

            p.isSetup = false;

        }

    }

    add(pantalla, name) {
        const index = this.pantallas.length;

        const newPantalla = {
            index,
            pantalla,
            name: name !== undefined ? name : "",
            isSetup: false
        }

        this.pantallas.push(newPantalla)
    }

    next() {
        if (this.index + 1 < this.pantallas.length) {
            this.onFinish();
            this.indexAnterior = this.index + 0;
            this.index++;
        }
    }

    back() {
        if (this.index - 1 >= 0) {
            this.onFinish();
            this.indexAnterior = this.index + 0;
            this.index--;
        }
    }

    goIndex(index) {
        if (this.index >= 0 && this.index < this.pantallas.length) {
            this.onFinish();
            this.indexAnterior = this.index + 0;

            this.index = index
        }
    }

    goName(name) {
        var index = -1;
        this.pantallas.forEach((pantalla, i) => {
            if (pantalla.name === name) {
                index = i;
            }
        })

        if (index !== -1) {
            this.goIndex(index)
        }
    }

    getCurrentPantalla() {
        return this.pantallas[this.index];
    }

}
//export default Navegador;