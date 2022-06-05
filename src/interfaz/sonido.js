class Sonido {
  constructor(url) {
    this.sound = document.createElement('audio');
    const source = document.createElement('source');
    source.src = url;
    this.sound.append(source);

    this.loop = false;

    this.sound.addEventListener('ended', () => {
      if (this.loop === true) {
        this.play();
      }
    });
  }

  play() {
    this.sound.play();
  }

  pause() {
    this.sound.pause();
  }

  stop() {
    this.sound.pause();
    this.sound.currentTime = 0;
  }

  setVolumen(volumen) {
    this.sound.volume = volumen;
  }

  setLoop(loop) {
    this.loop = loop;
  }
}
//export default Sonido;
