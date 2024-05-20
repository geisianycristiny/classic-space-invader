export default class Bullet {
    constructor(canvas, x, y, velocity,  BulletColor){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.BulletColor = BulletColor;

        this.width = 5
        this.height = 20

    }

draw(ctx) { 
    this.y -= this.velocity
    ctx.fillStyle = this.BulletColor
    ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    collide(sprite) {
        if(
       this.x + this.width > sprite.x &&
        this.x < sprite.x + sprite.width &&
        this.y + this.height > sprite.y &&
        this.y < sprite.y + sprite.height
        ) {
            return true;
        } else { 
            return false
        }
    }
}