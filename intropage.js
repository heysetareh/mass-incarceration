var x = 10;
var y = [100, 200, 300, 400, 500];
var font;
var button;
var scripts;

var lines = [
  ["The U.S. currently holds over 2.3 million prisoners. \n With 724 people locked up out of 100,000, it has the highest incarceration rate in the world."],
  ["In the 1990s, violent and property crimes began to drop. \n But the US's incarceration rate continued to climb."],
  ["1 in 5 are locked up for drug offenses. \n About half of federal prisoners are incarcerated for nonviolent drug crimes."],
  ["According to Brennan Center For Justice, 39 percent of Americans are unnecessarily incarcerated. \n This means that there is no public safety rationale to keep them behind bars."],
	["Who are these 2.3 million people? How did they find themselves behind bars?"]  
  ];

function begin() {
    	window.location.assign("https://heysetareh.github.io/mass-incarceration/characterpage.html");

}
function preload() {
  	font = loadFont("pixelade.ttf");
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  button = createButton("Let's begin.");
	button.position(50,600);
  button.mousePressed(begin);
} 

function draw() { 
  background(0);
  fill(255,255,255);
  textFont(font);
  textSize(30);
  frameRate(16);
//  y = y+10;
  for (i=0; i<lines.length; i+=1) {
    scripts = parseInt(text(lines[i],50,y[i]));
  }
}

