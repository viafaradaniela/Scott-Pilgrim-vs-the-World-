class ImageManager {
  constructor(app) {
    this.app = app;
    this.imgs = new Map();
  }

  loadImage(url) {
    const img = this.imgs.get(url);
    if (img === undefined) {
      const image = this.app.loadImage(url);
      this.imgs.set(url, image);
    }
    return img;
  }
}
//export default ImageManager;
