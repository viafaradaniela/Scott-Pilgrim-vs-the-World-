class Navegador {
    
    constructor(app) {
        this.app = app;
        this.index = 0;
        this.pantallas = [];
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
        if (p && p.pantalla.mousePressed) {
            p.pantalla.mousePressed()
        }
    }

    mouseReleased() {
        const p = this.getCurrentPantalla();
        if (p && p.pantalla.mouseReleased) {
            p.pantalla.mouseReleased()
        }
    }

    keyPressed() {
        const p = this.getCurrentPantalla();
        if (p && p.pantalla.keyPressed) {
            p.pantalla.keyPressed()
        }
    }

    keyReleased() {
        const p = this.getCurrentPantalla();
        if (p && p.pantalla.keyReleased) {
            p.pantalla.keyReleased()
        }
    }

    onFinish() {
        const p = this.getCurrentPantalla();
        if (p && p.pantalla.onFinsih) {
            p.pantalla.onFinsih()
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
            this.index++;
        }
    }

    back() {
        if (this.index - 1 >= 0) {
            this.index--;
        }
    }

    goIndex(index) {
        if (this.index >= 0 && this.index < this.pantallas.length) {
            this.index = index
        }
    }

    goName(name){
        var index = -1;
        this.pantallas.forEach((pantalla, i)=>{
            if(pantalla.name === name){
                index = il
            }
        })
        if(índex !== -1){
            this.goIndex(index)
        }
    }

    getCurrentPantalla() {
        return this.pantallas[this.index];
    }

}