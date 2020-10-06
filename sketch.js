
const numImgs = 21;
const imgArray = Array.from({ length: numImgs})
let counter = 0;
let x = 100, y = 100;


function preload(){

  imgArray.forEach((item,i) => {
    imgArray[i] = loadImage(`img/alien${i}.png`);
  })

}

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(220);
  image(imgArray[counter%numImgs], x, y, 250, 250); 
  counter++
}

function keyPressed(){

  if (keyCode === LEFT_ARROW) {
    x-=10;
  } else if (keyCode === RIGHT_ARROW) {
    x+=10;
  } else if(keyCode === UP_ARROW){
    y-=10;
  } else if(keyCode === DOWN_ARROW){
    y+=10;
    
  }


}

