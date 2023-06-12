

//let div = document.querySelector(".main_div");
//let divWidth = parseInt(window.getComputedStyle(div).getPropertyValue("width"));


///////////////////// FLOWER CREATION////////////////////////

// let flower = document.createElement("div");

// div.appendChild(flower);

// flower.style.width = "30px";
// flower.style.height = "30px";
// flower.style.position = "relative";
// flower.style.left = "0px";
// flower.style.bottom = "0px";
// flower.style.backgroundColor = "pink";

// console.log(flower);

///////////////////// FLOWER FALLING ////////////////////////

let flowerField = [

    new Flower(5),
    new Flower(5),
    new Flower(10),];




for (let i = 0; i < 1; i++ ){

    flowerField.push(new Flower (5));
};



// console.log(divWidth);

//function generateFruits () {
    

    let flowerBottom = 0;
    //let flowerLeft = Math.floor(Math.random() * (divWidth - 50));
    flower.style.left = `${flowerLeft}px`;

    function flowerFalling() {

     if (flowerBottom < - 450) return;

     flowerBottom -= 5;
     flower.style.bottom = `${flowerBottom}px`;
 
     }

    flowerFalling();
    setInterval(flowerFalling,50);


  };

  
  generateFruits();
  setInterval(generateFruits,5000);



 



