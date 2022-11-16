const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

import background from "../img/background.png";
import platform1 from "../img/platform1.png"
import waterTile from "../img/water.png";
import { Player } from "./Player";
import grassPlatform from "../img/platform.png";
import stonePlatform from "../img/platform_stone.png";
import landscape from "../img/landscape.png";


const image = new Image();
image.src = grassPlatform;
const player = new Player();

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
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    
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
  new GenericObject({
    x: 0,
    y: 520,
    image: createImage(waterTile),
  }),
  // new GenericObject({
  //   x: 0,
  //   y: 125,
  //   image: createImage(landscape),
  // }),
];


const platforms = [
  new Platform({ x: 0, y: 520, image: createImage(grassPlatform) }),
  new Platform({ x: image.width-6, y: 520, image: createImage(grassPlatform) }),
  new Platform({x: image.width *2.2, y:520, image: createImage(grassPlatform)}),
  new Platform({x: image.width *3.3, y:350, image: createImage(platform1)}),
  new Platform({x: image.width *4, y:350, image: createImage(platform1)}),
  new Platform({x: image.width *4.3, y:520, image: createImage(grassPlatform)}),
  new Platform({x: image.width *4.3 + image.width, y:520, image: createImage(grassPlatform)}),
  new Platform({x: image.width *4.3 + image.width*2, y:520, image: createImage(grassPlatform)})
];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

function playerDeath(){
player.dead = true;


// setInterval(() => {
//  location.reload();
// }, 5000);
};
let x=0;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  
  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });
  c.drawImage(createImage(landscape), x, 123);
  platforms.forEach((platform) => {
    platform.draw();
  });
  player.update();
  if (keys.right.pressed && player.position.x < 400) {
    
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -player.speed;
  } else {
    if (keys.right.pressed) {
      x-=player.speed;
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
    }
    if (keys.left.pressed) {
      
      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });
    }
    player.velocity.x = 0;
  }
  
  //platform collision detection
  platforms.forEach((platform) => {
   if(player.position.y > 415){
    playerDeath();
   }

    if (
      player.position.y-30 + player.height <= platform.position.y &&
      player.position.y-30 + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x  + player.width-50 >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width -50
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
      // instructions for A button
      keys.left.pressed = true;
      player.velocity.x -= 1;
      player.runLeft = true;
     player.faceLeft = false;
      
      break;
    case 68:
      //T instructions for D button
      keys.right.pressed = true;
      player.velocity.x += 1;
      player.faceLeft = false;
      player.runRight = true;
      console.log(window);
      break;
    case 83:
      // instructions for S button
      player.attack = true;
      break;
    case 87:
      //instructions for W button
     
      player.velocity.y -= 25;

    default:
      break;
  }
});
addEventListener("keyup", ({ keyCode }) => {
  console.log(keyCode);

  switch (keyCode) {
    case 65:
      //instructions for A button
      keys.left.pressed = false;
      player.runLeft = false;
      player.faceLeft = true;
      player.velocity.x = 0;
      break;
    case 68:
      // instructions for D button
      keys.right.pressed = false;
      player.velocity.x = 0;
      player.runRight = false;
      player.faceRight = true;
      break;
    case 83:
      // instructions for S button
      player.attack = false;
      break;
    case 87:
      // instructions for W button
      player.velocity.y = 0;
    
    default:
      break;
  }
});
