class Editor {
    constructor(escenario) {
        this.escenario = escenario;
        this.app = escenario.app;

    }

    keyPressed() {
        const key = this.app.key.toLowerCase();
        if (key === "p") {
            var matrix = [];

            var nColumna = 0;
            this.escenario.celdas.forEach((celda, index) => {
                matrix.push(celda.type)
                nColumna++;
                if (this.escenario.columnas === nColumna) {
                    nColumna = 0;
                    matrix.push(-100);
                }
            })

            const data = JSON.stringify({celdas:matrix})
            .replace('"celdas":[', "celdas:[\n")
            .replace(",-100]", "\n]")
            .replaceAll("-100,", "\n")

            descargar("data.txt", data)
        }
    }
}

const descargar = (name, data) => {
    var nombre = name;
    var text = data,
        blob = new Blob([text], { type: 'text/plain' }),
        anchor = document.createElement('a');

    anchor.download = nombre;
    anchor.href = (/*window.webkitURL ||*/ window.URL).createObjectURL(blob);
    anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
    anchor.click();
}