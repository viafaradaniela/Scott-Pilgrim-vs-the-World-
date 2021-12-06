class Escenario {

    constructor(app, config) {
        this.app = app;

        this.views = [];
        this.celdas = [];

        config.views.forEach((url) => {
            const view = this.app.loadImage(url);
            this.views.push(view);
        })

        const celdaWidth = 50;
        const celdaHeight = 50;


        for (let j = 0; j < 14; j++) {
            for (let i = 0; i < 24; i++) {
                const index = this.celdas.length;
                const x = (i * celdaWidth) + celdaWidth / 2;
                const y = (j * celdaHeight) + celdaHeight / 2;
                const pos = { x, y }
                const location = {
                    fila: j, columna: i
                }

                const type = (index+j)%2===0?0:1;

                const newCelda = new Celda(this, pos, location, index, type);

                this.celdas.push(newCelda);
            }
        }


    }


    draw() {
        this.celdas.forEach(celda => {
            celda.draw()
        })
    }

    

}