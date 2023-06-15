/** @format */

class Game {
  constructor() {
    this.startScreen = document.querySelector(".intro-container");

    this.gameScreen = document.querySelector(".main-div");
    
    
    this.screenTotalHeight = window.innerHeight;
    this.gameScreenHeight = this.gameScreen.offsetHeight;

    console.log("game screen height:" + this.gameScreenHeight);
    console.log("screenTotalHeight: " + this.screenTotalHeight);

    
    this.flowerField = [
      new Flower(5, "images/rose.png"),
      new Flower(5, "images/rose.png"),
      new Flower(10, "images/rose.png"),
    ];

    this.player = new Butterfly();
    this.player.fly();
    console.log(this.player.health);

    this.pointBoard = document.querySelector("h2");

    this.text = "HEALTH POINTS: 10";
    this.pointBoard.innerHTML = `${this.text}`;

    this.gameBoard = document.querySelector(".final-message");

    this.introParent = document.querySelector(".intro-parent");
  }

  start() {
    // this.startScreen.style.display = "none";
    // this.gameScreen.style.display = "block";

    this.introParent.style.display = "none";

    setInterval(() => this.update(), 90);
    setInterval(
      () =>
        this.flowerField.push(
          new Flower(-5, "images/flying humming bird png.png"),
          new Flower(10, "images/rose.png")
        ),
      2000
    );

    setInterval(
      () => this.flowerField.push(new Flower(-10, "images/blue-humming.png")),
      2500
    );

    console.log("its calling game.start");
  }

  update() {
    console.log("its calling update");

    for (let i = 0; i < this.flowerField.length; i++) {
      const flower = this.flowerField[i];
      flower.move();

      if (
        this.player.didCollide(flower) &&
        this.player.health > 0 &&
        this.player.health < 100
      ) {
        // Remove the obstacle element from the DOM
        flower.removeChild();
        // Remove obstacle object from the array
        this.flowerField.splice(i, 1);
        // Reduce player's lives
        this.player.heal(flower.healingProperty);
        console.log(
          "This is butterfly´s current health: " + this.player.health
        );
        this.pointBoard.innerHTML = `HEALTH POINTS: ${this.player.health}`;
      } else if (this.player.didCollide(flower) && this.player.health >= 100) {
        this.gameBoard.style.display = "inline";
        this.gameBoard.innerHTML = `YOU WIN!`;
        this.player.removeChild();
      } else if (this.player.didCollide(flower) && this.player.health <= 0) {
        this.gameBoard.style.display = "inline";
        this.gameBoard.innerHTML = `GAME OVER`;
        this.player.removeChild();
      } else if (flower.bottom < ((this.screenTotalHeight - this.gameScreenHeight)/2) - flower.width) {
        flower.removeChild();
        this.flowerField.splice(i, 1);
      }
    }
  }
}
