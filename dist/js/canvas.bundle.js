/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/Idle-Sheet.png":
/*!********************************!*\
  !*** ./src/img/Idle-Sheet.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "58c529999caf1c162b343bfe31d91d52.png");

/***/ }),

/***/ "./src/img/Run-Sheet.png":
/*!*******************************!*\
  !*** ./src/img/Run-Sheet.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e2c2294df9e91544f82e352f12006a94.png");

/***/ }),

/***/ "./src/img/attack.png":
/*!****************************!*\
  !*** ./src/img/attack.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "18589a593cea8565179b02e68a22547a.png");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d0f34c76ae841698a15cf2d73614c7a4.png");

/***/ }),

/***/ "./src/img/death.png":
/*!***************************!*\
  !*** ./src/img/death.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d859aed8e5212ccb51fc683af57e6a98.png");

/***/ }),

/***/ "./src/img/idleLeft.png":
/*!******************************!*\
  !*** ./src/img/idleLeft.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5eb456a7f8aa00ff81880a4a4446ef99.png");

/***/ }),

/***/ "./src/img/landscape.png":
/*!*******************************!*\
  !*** ./src/img/landscape.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b5ed3ae7ba7b38c30c35f7654938df6a.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9ed1cd7a5eb8d9be0f82cbc5ae80d53d.png");

/***/ }),

/***/ "./src/img/platform1.png":
/*!*******************************!*\
  !*** ./src/img/platform1.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c060c463a98541d8f261a355a8371a1f.png");

/***/ }),

/***/ "./src/img/platform_stone.png":
/*!************************************!*\
  !*** ./src/img/platform_stone.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c17e6df33f41cf81138afafda2dda106.png");

/***/ }),

/***/ "./src/img/runLeft.png":
/*!*****************************!*\
  !*** ./src/img/runLeft.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b7bfd2bef8831bb42b1a1a07afc2ba3f.png");

/***/ }),

/***/ "./src/img/water.png":
/*!***************************!*\
  !*** ./src/img/water.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6ca892e782d7756ab1f2b45f670cbb72.png");

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _img_Idle_Sheet_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/Idle-Sheet.png */ "./src/img/Idle-Sheet.png");
/* harmony import */ var _img_Run_Sheet_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/Run-Sheet.png */ "./src/img/Run-Sheet.png");
/* harmony import */ var _img_attack_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/attack.png */ "./src/img/attack.png");
/* harmony import */ var _img_idleLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/idleLeft.png */ "./src/img/idleLeft.png");
/* harmony import */ var _img_runLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/runLeft.png */ "./src/img/runLeft.png");
/* harmony import */ var _img_death_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/death.png */ "./src/img/death.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");






var spriteWidth = 64;
var spriteHeight = 80;
var frameX = 0;
var frameY = 0;
var gameFrame = 0;
var maxFrame = 3;
var staggerFrames = 10;
var gravity = 1.5;
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 128;
    this.height = 160;
    this.image = createImage(_img_Idle_Sheet_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
    this.speed = 10;
    this.frames = 0;
    this.runRight = false;
    this.runLeft = false;
    this.attack = false;
    this.faceRight = true;
    this.faceLeft = false;
    this.dead = false;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      if (this.dead) {
        maxFrame = 8;
        c.drawImage(createImage(_img_death_png__WEBPACK_IMPORTED_MODULE_5__["default"]), frameX * 80, frameY * 64, 80, 64, this.position.x, this.position.y, this.width, this.height);
      } else if (this.attack) {
        c.drawImage(createImage(_img_attack_png__WEBPACK_IMPORTED_MODULE_2__["default"]), frameX * 96, frameY * 80, 96, 80, this.position.x, this.position.y, 192, this.height);
      } else if (this.faceLeft) {
        c.drawImage(createImage(_img_idleLeft_png__WEBPACK_IMPORTED_MODULE_3__["default"]), frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, this.position.x, this.position.y, this.width, this.height);
      } else if (this.runLeft) {
        c.drawImage(createImage(_img_runLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]), frameX * 80, frameY * 80, 80, 80, this.position.x, this.position.y, this.width, this.height);
      } else {
        if (this.runRight) {
          c.drawImage(createImage(_img_Run_Sheet_png__WEBPACK_IMPORTED_MODULE_1__["default"]), frameX * 80, frameY * 80, 80, 80, this.position.x, this.position.y, this.width, this.height);
        } else c.drawImage(this.image, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, this.position.x, this.position.y, this.width, this.height);
      }
      if (gameFrame % staggerFrames == 0) {
        if (frameX < maxFrame) frameX++;else if (this.dead) {
          location.reload();
        } else frameX = 0;
      }
      gameFrame++;
    }
  }, {
    key: "update",
    value: function update() {
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
  }]);
  return Player;
}();


/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platform1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/platform1.png */ "./src/img/platform1.png");
/* harmony import */ var _img_water_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/water.png */ "./src/img/water.png");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ "./src/js/Player.js");
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_platform_stone_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/platform_stone.png */ "./src/img/platform_stone.png");
/* harmony import */ var _img_landscape_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/landscape.png */ "./src/img/landscape.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;







var image = new Image();
image.src = _img_platform_png__WEBPACK_IMPORTED_MODULE_4__["default"];
var player = new _Player__WEBPACK_IMPORTED_MODULE_3__["Player"]();
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Platform;
}();
var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return GenericObject;
}();
var genericObjects = [new GenericObject({
  x: 0,
  y: 0,
  image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new GenericObject({
  x: 0,
  y: 520,
  image: createImage(_img_water_png__WEBPACK_IMPORTED_MODULE_2__["default"])
})
// new GenericObject({
//   x: 0,
//   y: 125,
//   image: createImage(landscape),
// }),
];

var platforms = [new Platform({
  x: 0,
  y: 520,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Platform({
  x: image.width - 6,
  y: 520,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Platform({
  x: image.width * 2.2,
  y: 520,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Platform({
  x: image.width * 3.3,
  y: 350,
  image: createImage(_img_platform1_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new Platform({
  x: image.width * 4,
  y: 350,
  image: createImage(_img_platform1_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new Platform({
  x: image.width * 4.3,
  y: 520,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Platform({
  x: image.width * 4.3 + image.width,
  y: 520,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_4__["default"])
}), new Platform({
  x: image.width * 4.3 + image.width * 2,
  y: 520,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_4__["default"])
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
function playerDeath() {
  player.dead = true;

  // setInterval(() => {
  //  location.reload();
  // }, 5000);
}
;
var x = 0;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  c.drawImage(createImage(_img_landscape_png__WEBPACK_IMPORTED_MODULE_6__["default"]), x, 123);
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -player.speed;
  } else {
    if (keys.right.pressed) {
      x -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
    }
    if (keys.left.pressed) {
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
    }
    player.velocity.x = 0;
  }

  //platform collision detection
  platforms.forEach(function (platform) {
    if (player.position.y > 415) {
      playerDeath();
    }
    if (player.position.y - 30 + player.height <= platform.position.y && player.position.y - 30 + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width - 50 >= platform.position.x && player.position.x <= platform.position.x + platform.width - 50) {
      player.velocity.y = 0;
    }
  });
}
animate();
addEventListener("keydown", function (_ref3) {
  var keyCode = _ref3.keyCode;
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
addEventListener("keyup", function (_ref4) {
  var keyCode = _ref4.keyCode;
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

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map