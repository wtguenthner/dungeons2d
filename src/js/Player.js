const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
import idleRight from "../img/Idle-Sheet.png";
import runRight from "../img/Run-Sheet.png";
import attackRight from "../img/attack.png";
import idleLeft from "../img/idleLeft.png";
import runLeft from "../img/runLeft.png";
import death from "../img/death.png";
const spriteWidth = 64;
const spriteHeight = 80;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
let maxFrame = 3;
const staggerFrames = 10;
const gravity = 1.5;

function createImage(imageSrc) {
  const image = new Image();

  image.src = imageSrc;

  return image;
}

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.width = 128;
    this.height = 160;

    this.image = createImage(idleRight);
    this.speed = 10;
    this.frames = 0;

    this.runRight = false;
    this.runLeft = false;
    this.attack = false;
    this.faceRight = true;
    this.faceLeft = false;
    this.dead = false;
  }

  draw() {
    if (this.dead) {
      maxFrame = 8;
      c.drawImage(
        createImage(death),
        frameX * 80,
        frameY * 64,
        80,
        64,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    } else if (this.attack) {
      c.drawImage(
        createImage(attackRight),
        frameX * 96,
        frameY * 80,
        96,
        80,
        this.position.x,
        this.position.y,
        192,
        this.height
      );
    } else if (this.faceLeft) {
      c.drawImage(
        createImage(idleLeft),
        frameX * spriteWidth,
        frameY * spriteHeight,
        spriteWidth,
        spriteHeight,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    } else if (this.runLeft) {
      c.drawImage(
        createImage(runLeft),
        frameX * 80,
        frameY * 80,
        80,
        80,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    } else {
      if (this.runRight) {
        c.drawImage(
          createImage(runRight),
          frameX * 80,
          frameY * 80,
          80,
          80,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );
      } else
        c.drawImage(
          this.image,
          frameX * spriteWidth,
          frameY * spriteHeight,
          spriteWidth,
          spriteHeight,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );
    }

    if (gameFrame % staggerFrames == 0) {
      if (frameX < maxFrame) frameX++;
      else if (this.dead) {
        location.reload();
      } else frameX = 0;
    }

    gameFrame++;
  }

  update() {
    this.draw();

    //  if(gameFrame % staggerFrames ==0){
    //   if(this.frames < 5) this.frames++
    //  }else{
    //   this.frames = 0;
    //  }
    // gameFrame++;

    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}

export { Player };
