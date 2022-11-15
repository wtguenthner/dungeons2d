const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

import background from "../img/background.png";
import platform1 from "../img/platform1.png"
import { Player } from "./Player";
import grassPlatform from "../img/platform.png";
import stonePlatform from "../img/platform_stone.png";
const platformImages = [grassPlatform, stonePlatform];

const image = new Image();
image.src = grassPlatform;

function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}
class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}
class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

const genericObjects = [
  new GenericObject({
    x: 0,
    y: 0,
    image: createImage(background),
  }),
];

const player = new Player();

const platforms = [
  new Platform({ x: 0, y: 520, image: createImage(grassPlatform) }),
  new Platform({ x: image.width-6, y: 520, image: createImage(grassPlatform) }),
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
  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });
 
  platforms.forEach((platform) => {
    platform.draw();
  });
  player.update();
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
      player.position.x  + player.width >= platform.position.x &&
      player.position.x  <= platform.position.x + platform.width
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
      console.log(window);
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
