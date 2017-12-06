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
  	window.location.assign("https://heysetareh.github.io/mass-incarceration/eddy.html");

}

function julesButton() {
  	window.location.assign("https://heysetareh.github.io/mass-incarceration/intropage.html");
}

function preload() {
  eddy = loadImage("eddy.png");
  jules = loadImage("jules.png");
  graphs = loadImage("data.png");
  
  font = loadFont("pixelade.ttf");

}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  button = createButton("Eddy");
   button.position(139,535);
    button.mousePressed(eddyButton);
    button.style("border-color", "#c6c8ff");
    button.style("border-color", "#c6c8ff");
    button.style("background-color", "transparent");
    button.position(150,300);
    button.style("font-weight", "regular");
    button.style("font-size", "40px");
    button.style("font-color", "#c6c8ff");
    button.style("font-family", "pixelade");
    button.style("color", "white");
  	button.style("border-radius", "7px");

  }
  
  
  
  
  
  
  
  
  
  button2 = createButton("Data");
  button2.position(700,535);
  button2.mousePressed(julesButton);
 button2.position(139,535);
    button2.style("border-color", "#c6c8ff");
    button2.style("border-color", "#c6c8ff");
    button2.style("background-color", "transparent");
    button2.style("font-weight", "regular");
    button2.style("font-size", "40px");
    button2.style("font-color", "#c6c8ff");
    button2.style("font-family", "pixelade");
    button2.style("color", "white");
  	button2.style("border-radius", "7px");




 // button.mousePressed(goToLink);
} 

function draw() { 
  background(0);
  textFont(font);
  fill(255);
  textSize(30);
  text("CHOOSE A JOURNEY", windowWidth/2, 50);
  
  image(eddy, 30,200,300,300);
  image(graphs,600,240,320,300);
  
  

  
  
}




// https://www.themarshallproject.org/2017/11/27/how-do-you-clear-a-pot-conviction-from-your-record?ref=hp-2-111
