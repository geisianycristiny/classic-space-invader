export default class Enemy {
    constructor(x, y, imageNumber) {
    this.x = x;
    this.y = y;
    this.width = 44;
    this.height = 32;
    thisimage = new Image();
    thisimage.src = `src/assets/images/enemy${imageNumber}.png`;
    }
    
    draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    move(xVelocity, yVelocity) {
    this.x += xVelocity;
    this.y += yVelocity;
    }
    collideWith(sprite) {
    if (this.x < sprite.x + sprite.width &&
    this.x + this.width > sprite.x &&
    this.y < sprite.y + sprite.height &&
    this.height + this.y > sprite.y) {
    return true;
    } else {
    return false;
    }
    }
    }