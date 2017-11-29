var box;
var font;
var blinkOn = true;

function preload() {
  box = loadImage("box.png");
  font = loadFont("pixelade.ttf");
}

function setup() { 
  createCanvas(windowWidth, 3000);

  
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
  
  
  
image(box,50,350,750,400);
  text("What would give Eddy a chance at a clean slate? \n A: Proposition 4 \n B: Amendment 2 \n C: The California Immigration Act \n Answer: A \n California’s Proposition 4 is a ballot initiative that legalized recreational use of marijuana in November 2016. \n This gives people with pot-related convictions like Eddy a chance to reduce or wipe away previous offenses. \n" ,(50)+40,(430)+40);

  
  image(box,50,780,750,330);
  text("Marijuana convictions can bring which life-altering consequences? \n A. finding/keeping a job \n B. Obtaining a student loan \n C. Getting a professional license \n D. All of the above \n Answer: D: All of the above",(50)+40,(840)+40);
  
  
  
  
}


function blinking () {
  	
  	if (blinkOn) {
      fill(255,0,30);
      blink = false;
    }


}
