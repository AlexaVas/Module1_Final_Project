/** @format */

class Game {
  constructor() {
    this.startScreen = document.querySelector(".intro-container");

    this.gameScreen = document.querySelector(".main-div");
    
    this.gameScreenHeight = this.gameScreen.offsetHeight;
    console.log(this.gameScreenHeight);

    console.log(this.gameScreen, "this is gamescreen");
    this.flowerField = [new Flower(5), new Flower(5), new Flower(10)];
  }

  start() {
    
    // this.startScreen.style.display = "none";
    // this.gameScreen.style.display = "block";

    setInterval(() => this.update(),90);
    setInterval(
      () => this.flowerField.push(new Flower(5), new Flower(10)),
      2000
    );

    console.log("its calling game.start");
  }

 
  update() {
    console.log("its calling update");

    for (let i = 0; i < this.flowerField.length; i++) {
        
      const flower = this.flowerField[i];
      flower.move();

      if (flower.bottom < 150) {

       
        flower.removeChild();
        this.flowerField.splice(i, 1);

      }
   
    } 

  }

}
