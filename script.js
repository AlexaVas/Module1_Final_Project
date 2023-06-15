
window.onload = function () {
  //////////////////////////////////////////START////////////////////////////////////////

  const startButton = document.getElementById("start-button");

  let game;
  let mySound;

  startButton.addEventListener("click", function () {
    console.log("its starting");
    startGame();
  });

  function startGame() {
    console.log("new game");
    let gameScreen = document.querySelector(".main-div");
    gameScreen.style.display = "block";
    let pointBoard = document.querySelector(".point-board");
    pointBoard.style.display = "block";
    let restartButton = document.querySelector("#restart-button");
    restartButton.style.display = "inline";
    restartButton.style.position = "fixed";

    game = new Game();

    game.start();

    ///////////////////////////////////////////AUDIO//////////////////////////////////////////

    mySound = new MyAudio("audio/purrple-cat-green-tea.mp3");
    mySound.play();
  }

  //////////////////////////////////////////RESTART/////////////////////////////////////////

  let restartButton = document.querySelector("#restart-button");

  restartButton.addEventListener("click", function () {
    location.reload();
  });
};









