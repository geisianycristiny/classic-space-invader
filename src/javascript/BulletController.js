import Bullet from "./Bullet.js";

export default class BuletController {
    bullets = [];
    timeTillNextBulletAllowed = 0;
    
    constructor(canvas, maxBulletsAtAtime, bulletCollor, soundEnabled) {
        this.canvas = canvas;
        this.maxBulletAtAtime = maxBulletsAtAtime;
        this.bulletCollor = bulletCollor;
        this.soundEnabled = soundEnabled;

        this.shootSound = new Audio("src/assets/sound/shoot.wav")
        this.shootSound.volume = 0.1;
    }

    draw(ctx) {
        this.bullets = this.bullets.filter((bullet) => bullet.y + bullet.width > 0 && bullet.y <= this.canvas.height);
    
    this.bullets.forEach((bullet) => bullet.draw(ctx));


    if (this.timeTillNextBulletAllowed > 0) {
        this.timeTillNextBulletAllowed--;
        }
    }
    collideWith(sprite) {
        const bulletThatSpriteIndex = this.bullets.findIndex((bullet) => 
        bullet.collideWith(sprite));

        if (bulletThatSpriteIndex >= 0) {
            this.bullets.splice(bulletThatSpriteIndex, 1);
            return true;        
        }
        return false;
    }

    shoot(x, y, velocity, timeTillNextBulletAllowed = 0) {
        if (this.timeTillNextBulletAllowed <= 0 &&
            this.bullets.length < this.maxBulletAtAtime) {
                const bullet = new bullet (this.canvas, x, y, velocity, this.bulletColor);
                this.bullets.push(bullet);
                if(this.soundEnabled){
                    this.shootSound.currentTime - 0;
                    this.shootSound.play();
                }
                this.timeTillNextBulletAllowed = timeTillNextBulletAllowed;
            } 
    }
}