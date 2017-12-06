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
   
    function goToLinkJules() {window.location = "https://heysetareh.github.io/mass-incarceration/eddy.html"},
   
   function goToLinkIntro() {window.location = "https://heysetareh.github.io/mass-incarceration/eddy.html"},

  	function goToLinkStartOver() {window.location = "https://heysetareh.github.io/mass-incarceration/eddy.html"}
    
  ];

var nav = [

  {
    name: "eddy",
    link: "https://heysetareh.github.io/mass-incarceration/eddy.html"
  },
  {
    name: "jules",
    link: "https://heysetareh.github.io/mass-incarceration/jules.html"
  },

  {
    name: "intro",
    link: "https://heysetareh.github.io/mass-incarceration/intropage.html"
  },

  {
    name: "start over",
    link: "https://heysetareh.github.io/mass-incarceration/"
  },

];


function preload() {
  pixelade = loadFont("pixelade.ttf");

}

function setup() {
  canvas = createCanvas(1000, 273);
  canvas.position(0, windowHeight + 455);





  var myQuestions = [


    {
      question: "Eddy is a 65-year-old professional musician. Over 30 years ago, he served two years probation on a felony conviction for trying to sell marijuana. Although Eddy is a legal immigrant with a green card, this history puts him at a higher risk of deportation.",

    },
    {
      question: "What would give Eddy a chance at a clean slate?",
      answers: {
        a: 'Proposition 4',
        b: 'Amendment 2',
        c: 'The California Immigration Act'
      },
      correctAnswer: 'a',
      correctAnswerText: "California’s Proposition 4 is a ballot initiative that legalized recreational use of marijuana in November 2016. This gives people with pot-related convictions like Eddy a chance to reduce or wipe away previous offenses."
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
      correctAnswerText: "For thousands of Americans, marijuana convictions still bring life-altering consequences, making it difficult to, among other things, find and keep a job, get a professional license or obtain a student loan."
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

        //  reset the list of answers
        answers = [];

        // for each available answer...
        for (letter in questions[i].answers) {

          // ...add an html radio button
          answers.push(
            '<label>' +
            '<input type="radio" name="question' + i + '" value="' + letter + '">' +
            letter + ': ' +
            questions[i].answers[letter] +
            '</label>'
          );
        }

        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>' +
          '<div class="answers">' + answers.join('') + '</div>' + '<div class ="space"></div>'
        );
      }

      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');

      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;

      // for each question...
      for (var i = 0; i < questions.length; i++) {

        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

        // if answer is correct
        if (userAnswer === questions[i].correctAnswer) {
          // add to the number of correct answers
          numCorrect++;



          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
          let correctAnswer = questions[1].correctAnswerText
          let answerDiv = document.getElementsByClassName("answers");
          console.log(answerDiv[0])
          answerDiv[0].append(correctAnswer);
          answerDiv[1].append(correctAnswer);
          answerDiv[2].append(correctAnswer);
          answerDiv[3].append(correctAnswer);


        }
        // if answer is wrong or blank
        else {
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }

      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away

    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function() {
      showResults(questions, quizContainer, resultsContainer);
    }

  }



}

function draw() {
  //  clear();
  background(0);




  buttonss("eddy", 50, links[0]);
  buttonss("jules", 150, links[1]);
  buttonss("intro", 250, links[2]);
  buttonss("start over", 350, links[3]);





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
    button.position(xpos, 1100);
    button.style("font-weight", "regular");
    button.style("font-size", "40px");
    button.style("font-color", col2);
    button.style("font-family", "pixelade");
    button.style("color", "white");
    button.mousePressed(fun);

  }


      
}
