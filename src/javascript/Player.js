class Player {
    rightPressed = false;
    leftPressed = false;
    shootPressed = false;
    constructor(canvas, velocity, bulletConntroller) {
        this.canvas = canvas;
        this.velocity = velocity;
        this.bulletConntroller = bulletConntroller;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 75;
        this.width = 50;
        this.height = 48;
        this.image = new Image();
        this.image.src = "src/assets/images/player.png";
    }
}