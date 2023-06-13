/** @format */

//let div = document.querySelector(".main_div");
//let divWidth = parseInt(window.getComputedStyle(div).getPropertyValue("width"));
 
 
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
    this.gameScreen = document.querySelector(".main-div");
    this.divWidth = parseInt(window.getComputedStyle(this.gameScreen).getPropertyValue("width"));
    this.screenWidth = window.innerWidth;
    
    console.log("screen width " + this.screenWidth);
    console.log(this.divWidth);
    this.healingProperty = healingProperty;
    this.flower1 = document.createElement("img");
    //this.top = 300;
    this.bottom = 500;
    this.width = 50;
    this.height = 50;
    this.left = 400 + Math.floor(Math.random() * (this.divWidth - this.width - this.width));

    this.flower1.src = "images/rose.png";
    this.flower1.style.position = "absolute";
    this.flower1.style.left = `${this.left}px`;
     this.flower1.style.top = `${this.top}px`;
    this.flower1.style.width = `${this.width}px`;
    this.flower1.style.height = `${this.height}px`;
    this.flower1.style.bottom = `${this.bottom}px`;

   
      
     this.gameScreen.appendChild(this.flower1);
  }

    

    updateFalling(){

      this.flower1.style.bottom = `${this.bottom}px`;


    }

    move () {


      this.bottom -=5;

      this.updateFalling();

    }

    removeChild () {

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

const birdOne = new Bird(10);

////////////////////////////////// BIRD TWO ATTACKS ////////////////////////////////////////////

const birdTwo = new Bird(20);
