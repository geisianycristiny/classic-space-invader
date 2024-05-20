class Enemy {
    constructor(x, y, imageNumber) {
        this.x = x;
        this.y = y;
        this.imageNumber = imageNumber;
        this.width = 44;
        this.height = 32;
        this.image = new Image();
        this.image.src = `src/assets/images/enemy${this.imageNumber}.png`;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}