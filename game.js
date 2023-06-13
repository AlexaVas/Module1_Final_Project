/** @format */

class Game {
  constructor() {
    this.startScreen = document.querySelector(".intro-container");

    this.gameScreen = document.querySelector(".main-div");
    
    // this.gameScreenHeight = this.gameScreen.offsetHeight;
    // console.log(this.gameScreenHeight);

    console.log(this.gameScreen, "this is gamescreen");
    this.flowerField = [
      new Flower(5, "/images/rose.png"),
      new Flower(5, "/images/rose.png"),
      new Flower(10,"images/sunflower.png"),
    ];

    this.player = new Butterfly();
    this.player.fly();
    console.log(this.player.health);
  }

  start() {
    
    // this.startScreen.style.display = "none";
    // this.gameScreen.style.display = "block";


    
    setInterval(() => this.update(),90);
    setInterval(
      () =>
        this.flowerField.push(
          new Flower(- 5, "/images/rose.png"),
          new Flower(10, "/images/rose.png")
        ),
      2000
    );

    setInterval(
      () => this.flowerField.push(new Flower(-10, "images/whiteFlower.webp")),
      2500
    );

    console.log("its calling game.start");
  }

 
  update() {
    console.log("its calling update");
 
    for (let i = 0; i < this.flowerField.length; i++) {
        
      const flower = this.flowerField[i];
      flower.move();

       if (this.player.didCollide(flower)) {
          // Remove the obstacle element from the DOM
          flower.removeChild();
          // Remove obstacle object from the array
          this.flowerField.splice(i, 1);
          // Reduce player's lives by 1
          this.player.heal(flower.healingProperty);
          console.log("This is butterfly´s current health: " + this.player.health);
        } else if (flower.bottom < 150) {
          flower.removeChild();
          this.flowerField.splice(i, 1);
        }
   
    } 


  }



}
