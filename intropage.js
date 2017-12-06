//step 1: make text html
//step 2: assign a div id to specific words
//step 3: document.getElementbyID("div id here");
//then for the id, make a mouseover function 
//when you function mouseover, then x happens 


var canvas;
var angles = [133.92, 83.16, 21.6, 28.44, 92.92];
var names = ["black men: 37.2%", "white men: 25.7%", "women: 7.9%", "hispanic men: 23.1%", "other men: 6%"];
var x = 10;
var y = [100, 200, 300, 400, 500];
var font;
var button;
var scripts;


function begin() {
  window.location.assign("https://heysetareh.github.io/mass-incarceration/characterpage.html");

}

function preload() {
  font = loadFont("pixelade.ttf");
}

function setup() {
  canvas1 = createCanvas(450, 450);
  canvas1.position(300, 100);
  noStroke();
  noLoop(); // Run once and stop
  /*  button = createButton("Let's begin.");
  	button.position(50,1100);
    button.parent("button");
    button.mousePressed(begin);
    */
  //trying to mouse over iframe
  var graph1 = document.getElementById("graph1");
  graph1.addEventListener("mouseover", canvas1Show);
  graph1.addEventListener("mouseout", canvas1Hide);

  /*
  var graph2 = document.getElementById("graph2");
  graph1.addEventListener("mouseover", canvas2Show);
	graph1.addEventListener("mouseout", canvas2Hide);
  */

  /*

var graphs = document.createElement('iframe');
var html = '<body></body>';
graphs.src = 'http://alpha.editor.p5js.org/embed/ryRUsPSZM';
document.body.appendChild(graphs);
  */




  //console.log('graph2.contentWindow =', graph2.contentWindow);

  /*
  var graph2 = document.getElementById("graph2");

  graph2.addEventListener("mouseover", canvas2Show);
	graph2.addEventListener("mouseout", canvas2Hide);

  */





}


function draw() {

  clear();
  background(0, 0, 0, 0, 0);
  fill(255, 255, 255);
  //	text(names[0],50,100);
  pieChart(300, angles);
  canvas1.mouseOut(canvas1Hide);
  canvas1.mouseOver(canvas1Show);





}





//graph1

function pieChart(diameter, data) {

  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    fill(255);
    textSize(14);
    text(names[3], 60, 150);
    text(names[4], 60, 70);
    text(names[2], 110, 30);
    text(names[1], 320, 50);
    text(names[0], 180, 220);
    textSize(24);
    fill(198, 200, 255);
    text("racial makeup \n of youth inmates", 190, 250);

    var gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(200, 150, diameter, diameter, lastAngle, lastAngle + radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
  fill(255);


}

//hide and show graph 1, the canvas
function canvas1Hide() {
  canvas1.hide();
}

function canvas1Show() {
  canvas1.show();
}




/*
//hide and show graph 2, the canvas
function canvas2Hide() {
  graph2.hide();
}
function canvas2Show() {
  graph2.show();
}

*/
