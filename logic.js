/** @format */

let div = document.querySelector(".main_div");
let divWidth = parseInt(window.getComputedStyle(div).getPropertyValue("width"));

////////////////////////////////// BUTTERFLY CLASS////////////////////////////////////////////

class Butterfly {
  constructor() {
    this.health = 10;
  }

  heal(flower) {
    this.health = this.health + flower;
  }

  receiveattack(bird) {
    this.health = this.health - bird;
  }
}

////////////////////////////////// END OF BUTTERFLY CLASS////////////////////////////////////////////

class Flower {
  constructor(healingProperty) {
    this.healingProperty = healingProperty;
    this.flower = document.createElement("div");
    this.left = Math.floor(Math.random() * (divWidth - 50));
    this.bottom = 0;
    //this.isLoaded = isLoaded;
    this.width = 30;
    this.height = 30;

    this.flower.style.position = "relative";
    this.flower.style.left = `${this.left}px`;
    this.flower.style.backgroundColor = "pink";
    this.flower.style.width = `${this.width}px`;
    this.flower.style.height = `${this.height}px`;
    this.flower.style.bottom = `${this.bottom}px`;

  }

    appendFlowerToDom(){

    div.appendChild(this.flower);

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

const butterflyOne = new Butterfly();

////////////////////////////////// FLOWER ONE HEALS ////////////////////////////////////////////

const flowerOne = new Flower(5);

let flowerOneHealing = flowerOne.healingProperty;

butterflyOne.heal(flowerOneHealing);

console.log(butterflyOne.health);

////////////////////////////////// FLOWER TWO HEALS ////////////////////////////////////////////

const flowerTwo = new Flower(10);

let flowerTwoHealing = flowerTwo.healingProperty;

console.log(butterflyOne.heal(flowerTwoHealing));

////////////////////////////////// BIRD ONE ATTACKS ////////////////////////////////////////////

const birdOne = new Bird(10);

////////////////////////////////// BIRD TWO ATTACKS ////////////////////////////////////////////

const birdTwo = new Bird(20);
