var col1 = (174, 201, 255);
var col2 = (50, 50, 50);

var canvas;
var questions;
var buttons;
var omg;
var name;
var link;



  var links = [

   	function goToLinkEddy() {window.location = "https://heysetareh.github.io/mass-incarceration/eddy.html";},
   
    function goToLinkJules() {window.location = "https://heysetareh.github.io/mass-incarceration/jules.html"},
   
   function goToLinkIntro() {window.location = "https://heysetareh.github.io/mass-incarceration/intropage.html"},

  	function goToLinkStartOver() {window.location = "https://heysetareh.github.io/mass-incarceration/"}
    
  ];




function preload() {
  pixelade = loadFont("pixelade.ttf");
  eddyimg = loadImage("eddy.png");

}

function setup() {
  canvas = createCanvas(1000, 160);
	canvas.parent("footer");



  var myQuestions = [


    {
      question: "Eddy is a 65-year-old professional musician. Over 30 years ago, he served two years probation on a felony conviction for trying to sell marijuana. Although Eddy is a legal immigrant with a green card, this history puts him at a higher risk of deportation.",

    },
    {
      question: "What would give Eddy a chance at a clean slate?",
      answers: {
        a: 'Proposition 64',
        b: 'Amendment 2',
        c: 'The California Immigration Act'
      },
      correctAnswer: 'a',
      correctAnswerText: "Correct Answer: Proposition 64. California’s Proposition 64 is a ballot initiative that legalized recreational use of marijuana in November 2016. This gives people with pot-related convictions like Eddy a chance to reduce or wipe away previous offenses."
    },
    {
      question: "Marijuana convictions can bring which life-altering consequences?",
      answers: {
        a: "Finding/keeping a job",
        b: "Obtaining a student loan",
        c: "Getting a professional license",
        d: "All of the above"
      },
      correctAnswer: 'd',
      correctAnswerText: "\n  Correct Answer: All of the above. For thousands of Americans, marijuana convictions still bring life-altering consequences, making it difficult to, among other things, find and keep a job, get a professional license or obtain a student loan."
    }
  ];

  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');


  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


  function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
      // store  output and answer choices
      var output = [];
      var answers;

      // for each question
      for (var i = 0; i < questions.length; i++) {

        //  reset list of answers
        answers = [];

        // for each available answer
        for (letter in questions[i].answers) {

          // add html radio 
          answers.push(
            '<label>' +
            '<input type="radio" name="question' + i + '" value="' + letter + '">' +
            letter + ': ' +
            questions[i].answers[letter] +
            '</label>'
          );
        }

        output.push(
          '<div class="question">' + questions[i].question + '</div>' +
          '<div class="answers">' + answers.join('') + '</div>' + '<div class ="space"></div>'
        );
      }

      quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {
      var answerContainers = quizContainer.querySelectorAll('.answers');

      // keep track of users answers
      var userAnswer = '';
      var numCorrect = 0;

      for (var i = 0; i < questions.length; i++) {

        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

        if (userAnswer === questions[i].correctAnswer) {
          numCorrect++;



          // color answers green
          answerContainers[i].style.color = 'lightgreen';
          
          //push the correct answer  
          let correctAnswer0 = questions[0].correctAnswerText
          let correctAnswer1 = questions[1].correctAnswerText
					let correctAnswer2 = questions[2].correctAnswerText

          let answerDiv = document.getElementsByClassName("answers");
          console.log(answerDiv[0])
     			//answerDiv[0].append(correctAnswer0);
          answerDiv[1].append(correctAnswer1);
          answerDiv[2].append(correctAnswer2);
			
				
        }
        // if answer is wrong or blank color red
        else {
          answerContainers[i].style.color = 'red';
        }
      }

      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }


    showQuestions(questions, quizContainer);

    // show results
    submitButton.onclick = function() {
      showResults(questions, quizContainer, resultsContainer);
    }

  }



}

function draw() {
  //clear();
  background(0);




  buttonss("eddy", 40, links[0]);
  buttonss("data", 140, links[2]);
  buttonss("start over", 240, links[3]);





  var col = color(25, 23, 200, 50);
  var col2 = color(255, 255, 255);
  var stroke = noStroke();
  weight = strokeWeight(0);

  var fun;
  var name;
  var xpos;

  function buttonss(name, xpos, fun) {
    var button = createButton(name);
    button.style("border-color", "#c6c8ff");
    button.style("border-color", "#c6c8ff");
    button.style("background-color", "transparent");
    button.position(xpos, 900);
    button.style("font-weight", "regular");
    button.style("font-size", "40px");
    button.style("font-color", col2);
    button.style("font-family", "pixelade");
    button.style("color", "white");
  	button.style("border-radius", "7px");

    button.mousePressed(fun);

  }


      
}
