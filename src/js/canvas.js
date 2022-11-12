const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 0.5;
import grassPlatform from '../img/platform_grass.png';

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
    this.width = 50;
    this.height = 50;
  }

  draw() {
    c.fillStyle = "black";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
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

console.log(window);

class Platform {
  constructor({ x, y }) {
    this.position = {
      x,
      y,
    };
    this.width = 200;
    this.height = 20;
  }

  draw() {
    c.fillStyle = "blue";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
const player = new Player();

const platforms = [
  new Platform({ x: 200, y: 100 }),
  new Platform({ x: 500, y: 200 }),
];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  platforms.forEach((platform) => {
    platform.draw();
  });

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    if (keys.right.pressed) {
      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });
    }
    if (keys.left.pressed) {
      platforms.forEach((platform) => {
        platform.position.x += 5;
      });
    }
    player.velocity.x = 0;
  }
  //platform collision detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });
}
animate();

addEventListener("keydown", ({ keyCode }) => {
  console.log(keyCode);

  switch (keyCode) {
    case 65:
      //TODO: instructions for A button
      keys.left.pressed = true;
      player.velocity.x -= 1;
      break;
    case 68:
      //TODO: instructions for D button
      keys.right.pressed = true;
      player.velocity.x += 1;
      console.log(window)
      break;
    case 83:
      //TODO instructions for S button
      break;
    case 87:
      //TODO instructions for W button

      player.velocity.y -= 20;

    default:
      break;
  }
});
addEventListener("keyup", ({ keyCode }) => {
  console.log(keyCode);

  switch (keyCode) {
    case 65:
      //TODO: instructions for A button
      keys.left.pressed = false;
      player.velocity.x = 0;
      break;
    case 68:
      //TODO: instructions for D button
      keys.right.pressed = false;
      player.velocity.x = 0;
      break;
    case 83:
      //TODO instructions for S button
      break;
    case 87:
      //TODO instructions for W button
      player.velocity.y = 0;
    default:
      break;
  }
});
