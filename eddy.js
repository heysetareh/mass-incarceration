var box;
var font;
var blinkOn = true;

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
  image(box,50,30,750,300);
  blinking(rect((50)+19,(50)+73,22,3.5));
  fill(255);
  text("\n Eddy is a 65-year-old professional musician.\n Over 30 years ago, he served two years probation on a felony \n conviction for trying to sell marijuana. Although Eddy is a legal \n immigrant with a green card, this history puts him at a higher \n risk of deportation.",(50)+40,(50)+40);
  
}

function blinking () {
  	
  	if (blinkOn) {
      fill(255,0,30);
      blink = false;
    }


}
