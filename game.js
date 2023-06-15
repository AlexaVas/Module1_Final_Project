/** @format */

class Game {
  constructor() {

    ////////////////////////////////////RETRIEVING DOM ELEMENTS/ VALUES //////////////////////////////////

    this.startScreen = document.querySelector(".intro-container");
    this.gameScreen = document.querySelector(".main-div");
    this.screenTotalHeight = window.innerHeight;
    this.gameScreenHeight = this.gameScreen.offsetHeight;
    this.container = document.querySelector(".container");
    this.scoreBoard = document.querySelector(".point-board");
    this.pointBoard = document.querySelector("h2");

    this.text = "HEALTH POINTS: 10";
    this.pointBoard.innerHTML = `${this.text}`;

    this.gameBoard = document.querySelector(".final-message");

    this.introParent = document.querySelector(".intro-parent");


    /////////////////////////////////BOTTOM OF THE DIV CALC. ///////////////////////////////////////////////

    this.containerHeight = this.container.offsetHeight;
    this.scoreBoardHeight = this.scoreBoard.offsetHeight;

    this.bottomValue =
      (this.containerHeight - (this.gameScreenHeight + this.scoreBoardHeight)) /
        2 +
      (this.gameScreenHeight + this.scoreBoardHeight);

    ////////////////////////////////////////////CREATING AN ARRAY//////////////////////////////////////////////

    this.flowerField = [
      new Flower(5, "images/rose.png"),
      new Flower(5, "images/rose.png"),
      new Flower(10, "images/rose.png"),
    ];

    this.player = new Butterfly();
    this.player.fly();


  }
  
  ////////////////////////////////////////////END OF CONSTRUCTOR/////////////////////////////////////////////

  /////////////////////////////////////SETTING INTERVALS AND PUSHING ELEMENTS/////////////////////////////////
  start() {
    this.startScreen.style.display = "none";

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
  /////////////////////////////////////UPDATING SCORE AND REMOVING ELEMNTS/////////////////////////////////
  update() {
    

    for (let i = 0; i < this.flowerField.length; i++) {
      const flower = this.flowerField[i];
      flower.move();

      if (
        this.player.didCollide(flower) &&
        this.player.health > 0 &&
        this.player.health < 100
      ) {
        flower.removeChild();

        this.flowerField.splice(i, 1);

        this.player.heal(flower.healingProperty);

        this.pointBoard.innerHTML = `HEALTH POINTS: ${this.player.health}`;
      } else if (this.player.didCollide(flower) && this.player.health >= 100) {
        this.gameBoard.style.display = "inline";

        this.gameBoard.innerHTML = `YOU WIN!`;

        this.player.removeChild();
      } else if (this.player.didCollide(flower) && this.player.health <= 0) {
        this.gameBoard.style.display = "inline";

        this.gameBoard.innerHTML = `GAME OVER`;

        this.player.removeChild();
      } else if (flower.top > this.bottomValue - flower.height) {
        flower.removeChild();

        this.flowerField.splice(i, 1);
      }
    }
  }
}

/////////////////////////////////////////////AUDIO CLASS///////////////////////////////////////////////////////
class MyAudio {
  constructor(audioPath) {
    this.audio = new Audio(audioPath);
  }
  play() {
    this.audio.play();
  }
}
