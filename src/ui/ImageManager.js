class ImageManager {

    constructor(app) {
        this.app = app;
        this.imgs = new Map();
    }

    loadImage(url) {
        var img = this.imgs.get(url)
        if (img === undefined) {
            var image = this.app.loadImage(url);
            this.imgs.set(url, image)
        }
        return img;
    }
}