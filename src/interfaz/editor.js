class Editor {
  constructor(escenario, enemigos) {
    this.escenario = escenario;
    this.app = escenario.app;
    this.enemigos = enemigos;

    this.enemigoSelect = undefined;
  }

  draw() {
    if (this.enemigoSelect !== undefined) {
      const { pos } = this.enemigoSelect;
      if (this.enemigoSelect.automatic === true) {
        this.app.fill(255);
      } else {
        this.app.fill(255, 0, 0);
      }
      this.app.circle(pos.x, pos.y, 10, 10);
    }
  }

  mousePressed() {
    if (this.enemigoSelect !== undefined) {
      const celda = this.escenario.getCeldaPos(this.app.mouseX, this.app.mouseY);
      this.enemigoSelect.setCeldaPos(celda);
    }

    this.enemigos.forEach(
      (enemigo) => {
        if (enemigo.isOver()) {
          // this.enemigoSelect = enemigo;
        }
      },
    );
  }

  keyPressed() {
    const key = this.app.key.toLowerCase();

    if (this.enemigoSelect !== undefined) {
      if (key === 'r') {
        if (this.enemigoSelect.automatic === true) {
          this.enemigoSelect.movimientos = [];
          this.enemigoSelect.automatic = false;
        } else {
          this.enemigoSelect.automatic = true;
        }
      }

      if (this.enemigoSelect.isMoved === false) {
        if (key === 'i') {
          this.enemigoSelect.movimientos.push(MOV.UP);
          this.enemigoSelect.goRelativeCelda(0, -1);
        }
        if (key === 'k') {
          this.enemigoSelect.movimientos.push(MOV.DOWN);
          this.enemigoSelect.goRelativeCelda(0, 1);
        }
        if (key === 'j') {
          this.enemigoSelect.movimientos.push(MOV.LEFT);
          this.enemigoSelect.goRelativeCelda(-1, 0);
        }
        if (key === 'l') {
          this.enemigoSelect.movimientos.push(MOV.RIGHT);
          this.enemigoSelect.goRelativeCelda(1, 0);
        }
      }
    }

    if (key === 'o') {
      const enemigos = [];
      this.enemigos.forEach((enemigo) => {
        enemigos.push({
          index: enemigo.celdaInit.index,
          view: enemigo.viewUrl,
          movimientos: enemigo.movimientos,
        });
        enemigos.push('saltoDeLinea');
      });

      const data = JSON.stringify({ enemigos })
        .replace('{', '')
        .replace('[', '[\n')
        .replaceAll('"saltoDeLinea",', '\n')
        .replaceAll('"saltoDeLinea"]', '\n]')
        .replaceAll('"enemigos"', 'enemigos')
        .replaceAll('"view"', 'view')
        .replaceAll('"movimientos"', 'movimientos')
        .replaceAll('"index"', 'index')
        .replace(',\n]}', '\n]');

      console.log(data);
    }

    if (key === 'p') {
      const matrix = [];

      let nColumna = 0;
      this.escenario.celdas.forEach((celda, index) => {
        matrix.push(celda.type);
        nColumna++;
        if (this.escenario.columnas === nColumna) {
          nColumna = 0;
          matrix.push(-100);
        }
      });

      const data = JSON.stringify({ celdas: matrix })
        .replace('"celdas":[', 'celdas:[\n')
        .replace(',-100]', '\n]')
        .replaceAll('-100,', '\n');

      descargar('data.txt', data);
    }
  }
}

const descargar = (name, data) => {
  const nombre = name;
  const text = data;
  const blob = new Blob([text], { type: 'text/plain' });
  const anchor = document.createElement('a');

  anchor.download = nombre;
  anchor.href = (/* window.webkitURL || */ window.URL).createObjectURL(blob);
  anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
  anchor.click();
};
//export default Editor;
