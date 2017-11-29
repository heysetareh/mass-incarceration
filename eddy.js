var box;
var font;

function preload() {
  box = loadImage("box.png");
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
  noStroke();
  image(box,windowWidth/2,windowHeight/2,900,220);
  blinking(rect((windowWidth/2)+19,(windowHeight/2)+73,22,3.5));
  fill(255);
  text("\n Eddy is a 65-year-old professional musician. Over 30 years ago, he served two \n years probation on a felony conviction for trying to \n sell marijuana. Although Eddy is a legal immigrant with a green card, this history \n puts him at a higher risk of deportation.",(windowWidth/2)+40,(windowHeight/2)+40);
  
}

function blinking () {
  	blink = true;
  	if (blink === true) {
      fill(255,0,30);
 		 rect((windowWidth/2)+19,(windowHeight/2)+73,22,3.5);
      blink = false;
    }


}
