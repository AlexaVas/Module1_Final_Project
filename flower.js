/** @format */
 
////////////////////////////////// BUTTERFLY CLASS////////////////////////////////////////////

class Butterfly {
  constructor() {
    this.health = 10;

    this.gameScreen = document.querySelector(".main-div");
    this.divWidth = parseInt(
      window.getComputedStyle(this.gameScreen).getPropertyValue("width")
    );

    this.divHeigth = parseInt(
      window.getComputedStyle(this.gameScreen).getPropertyValue("height")
    );

    this.height = 70;
    this.width = 70;
    this.left = this.divWidth - this.divWidth / 1.8;
    this.bottom = -this.divHeigth / 2;
    this.directionX = 0;
    this.directionY = 0;
    this.gradient = `rotate(0deg)`;

    this.player = document.createElement("img");
    this.player.src = "images/butterfly-blue-butterfly.gif";
    this.player.style.height = `${this.height}px`;
    this.player.style.height = `${this.width}px`;
    this.player.style.position = `relative`;
    this.player.style.left = `${this.left}px`;
    this.player.style.bottom = `${this.bottom}px`;
    this.player.style.transform = `${this.gradient}`;
    this.gameScreen.appendChild(this.player);
  }

  heal(flower) {
    this.health = this.health + flower;
  }

  receiveattack(bird) {
    this.health = this.health - bird;
  }

  fly() {
    document.addEventListener("keydown", (e) => {
      this.left += this.directionX;
      this.bottom += this.directionY;
      this.gradient = "";

      const key = e.key;
      const moveDirection = 20;

      if (key === "ArrowDown") {
        if (this.bottom < this.divHeigth - this.height) {
          this.bottom -= moveDirection;
          this.gradient = "rotate(180deg)";
        }
      } else if (key === "ArrowUp") {
        if (this.bottom < 0) {
          this.bottom += moveDirection;
          this.gradient = "rotate(0deg)";
        }
      } else if (key === "ArrowLeft") {
        if (this.left > 0) {
          this.left -= moveDirection;
          this.gradient = "rotate(300deg)";
        }
      } else if (key === "ArrowRight") {
        if (this.left < this.divWidth - this.width) {
          this.left += moveDirection;
          this.gradient = "rotate(60deg)";
        }
      }
    });

    setInterval(() => {
      this.updateFlying();
    }, 90);
  }

  updateFlying() {
    this.player.style.left = `${this.left}px`;
    this.player.style.bottom = `${this.bottom}px`;
    this.player.style.transform = this.gradient;
  }

  didCollide(item) {
    const playerRect = this.player.getBoundingClientRect();
    const obstacleRect = item.flower1.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }

  removeChild() {
    this.gameScreen.removeChild(this.player);
  }
}

////////////////////////////////// END OF BUTTERFLY CLASS////////////////////////////////////////////

class Flower {
  constructor(healingProperty, imgSrc) {
    this.gameScreen = document.querySelector(".main-div");
    this.divWidth = parseInt(
      window.getComputedStyle(this.gameScreen).getPropertyValue("width")
    );
    this.divHeigth = parseInt(
      window.getComputedStyle(this.gameScreen).getPropertyValue("height")
    );

    this.screenHeight = window.innerHeight;

    this.screenWidth = window.innerWidth;

    console.log("screen width " + this.screenWidth);
    console.log(this.divWidth);
    this.healingProperty = healingProperty;
    this.imgSrc = imgSrc;
    this.flower1 = document.createElement("img");
    console.log("div height: " + this.divHeigth);
    console.log("this bottom: " + this.bottom);
    this.width = 50;
    this.height = 50;

    this.top = (this.screenHeight - this.divHeigth) / 2;

    this.left =
      (this.screenWidth - this.divWidth) / 2 +
      this.width +
      Math.floor(Math.random() * (this.divWidth - this.width * 2));

    this.flower1.src = `${this.imgSrc}`;
    this.flower1.style.position = "absolute";
    this.flower1.style.left = `${this.left}px`;
    this.flower1.style.top = `${this.top}px`;
    this.flower1.style.width = `${this.width}px`;
    this.flower1.style.height = `${this.height}px`;
    this.flower1.style.bottom = `${this.bottom}px`;

    this.gameScreen.appendChild(this.flower1);
  }

  updateFalling() {
    this.flower1.style.top = `${this.top}px`;
  }

  move() {
    this.top += 5;

    this.updateFalling();
  }

  removeChild() {
    this.gameScreen.removeChild(this.flower1);
  }
}

////////////////////////////////// END OF FLOWER CLASS////////////////////////////////////////////

class Bird {
  constructor(damage, x, y, isLoaded, width, height) {
    this.damage = damage;

    this.x = x;
    this.y = y;
    this.isLoaded = isLoaded;
    this.width = width;
    this.height = height;
  }
}

////////////////////////////////// END OF BIRD CLASS////////////////////////////////////////////












////////////////////////////////// INVOKATIONS ////////////////////////////////////////////

// const butterflyOne = new Butterfly();

////////////////////////////////// FLOWER ONE HEALS ////////////////////////////////////////////

// const flowerOne = new Flower(5);

// let flowerOneHealing = flowerOne.healingProperty;

// butterflyOne.heal(flowerOneHealing);

// console.log(butterflyOne.health);

////////////////////////////////// FLOWER TWO HEALS ////////////////////////////////////////////

// const flowerTwo = new Flower(10);

// let flowerTwoHealing = flowerTwo.healingProperty;

// console.log(butterflyOne.heal(flowerTwoHealing));

////////////////////////////////// BIRD ONE ATTACKS ////////////////////////////////////////////

//const birdOne = new Bird(10);

////////////////////////////////// BIRD TWO ATTACKS ////////////////////////////////////////////

//const birdTwo = new Bird(20);
