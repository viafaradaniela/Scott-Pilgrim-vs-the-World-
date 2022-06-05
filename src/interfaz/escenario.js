class Escenario {
  constructor(app, config) {
    this.app = app;

    this.views = [];
    this.celdas = [];

    this.tables = 0;

    config.views.forEach((url) => {
      const view = this.app.loadImage(url);
      this.views.push(view);
    });

    this.celdaWidth = 50;
    this.celdaHeight = 50;

    this.addX = 0;
    this.addY = 50;

    this.filas = 14;
    this.columnas = 24;

    for (let j = 0; j < this.filas; j++) {
      for (let i = 0; i < this.columnas; i++) {
        const index = this.celdas.length;
        const x = (i * this.celdaWidth) + this.celdaWidth / 2;
        const y = (j * this.celdaHeight) + this.celdaHeight / 2 + this.addY;
        const pos = { x, y };
        const location = {
          fila: j, columna: i,
        };

        const typeDefault = (index + j) % 2 === 0 ? 0 : 1;
        const type = config.celdas && config.celdas[index] ? config.celdas[index] : typeDefault;

        const newCelda = new Celda(this, pos, location, index, type, typeDefault);

        this.celdas.push(newCelda);
      }
    }
  }

  draw() {
    this.celdas.forEach((celda) => {
      celda.draw();
    });
  }

  mousePressed() {
    const x = this.app.mouseX;
    const y = this.app.mouseY;
    const celda = this.getCeldaPos(x, y);
    const keyValue = parseInt(this.app.key);
    // celda.type = keyValue;
    // console.log(celda.index)
  }

  getCelda(columna, fila) {
    if (columna < this.columnas && fila < this.filas) {
      const index = (fila * this.columnas) + columna;
      const celda = this.celdas[index];
      return celda;
    }
    return undefined;
  }

  getCeldaPos(x, y) {
    if (x <= this.app.width && y <= this.app.height) {
      const columna = Math.floor((x - this.addX) / this.celdaWidth);
      const fila = Math.floor((y - this.addY) / this.celdaHeight);
      return this.getCelda(columna, fila);
    }
    return undefined;
  }

  getCeldaIndex(index) {
    return this.celdas[index];
  }
}
//export default Escenario;
