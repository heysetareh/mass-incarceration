
var dialogueBox;
var font;

function preload() {
  dialogueBox = loadImage("box.png");
  font = loadFont("pixelade.ttf");
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  
} 

function draw() { 
  background(0);
  textFont(font);
  textSize(30);
  fill(255,255,255);
  image(box,windowWidth/2,windowHeight/2,900,200);
  text("\n Eddy is a 65-year-old professional musician. Over 30 years ago, he served two years probation on a felony conviction for trying to sell marijuana. Although Eddy is a legal immigrant with a green card, this history puts him at a higher risk of deportation.",(windowWidth/2)+40,(windowHeight/2)+40);
  
}
