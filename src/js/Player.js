const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
import playerIdle from "../img/idle.gif";

const gravity = .5;
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
      this.width = 100;
      this.height = 100;
      this.image = new Image();
      this.image.src = playerIdle;
      
    }
  
    draw() {
      // c.fillStyle = "black";
      // c.fillRect(this.position.x, this.position.y, this.width, this.height);
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
  
    update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      }
      
    }
    
  }
  
  export {Player};