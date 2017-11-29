var eddy;
var jules;
var font;
var button;
var button2;

var images = [
  [eddy, "Eddy"],
  [jules, "Jules"]
  ];

function eddyButton() {
  	window.location.assign("https://heysetareh.github.io/mass-incarceration/eddy.html/");

}

function julesButton() {
  	window.location.assign("https://heysetareh.github.io/mass-incarceration/jules.html/");
}

function preload() {
  eddy = loadImage("eddy.png");
  jules = loadImage("jules.png");
  //joe = loadImage("joe.png");
  
  font = loadFont("pixelade.ttf");

}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  button = createButton("Eddy");
  button.position(139,535);
  button.mousePressed(eddyButton);
  button2 = createButton("Jules");
  button2.position(510,535);
  button2.mousePressed(julesButton);
 // button.mousePressed(goToLink);
} 

function draw() { 
  background(0);
  textFont(font);
  fill(255);
  textSize(30);
  text("CHOOSE A JOURNEY", windowWidth/2, 50);
  
  image(eddy, 30,200,300,300);
  text("EDDY",140,500,300,300);
  image(jules,400,240,300,200);
  text("JULES",500,500,300,200);
  
  

  
  
}




// https://www.themarshallproject.org/2017/11/27/how-do-you-clear-a-pot-conviction-from-your-record?ref=hp-2-111
