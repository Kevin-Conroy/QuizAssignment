const questions = [{
  "question": "Who was the drummer for The Beatles?",
  "option1": "Ringo Starr",
  "option2" : "Charlie Watts",
  "option3" : "John Lennon",
  "option4" : "John Bonham",
  "answer" : "1"
}, {
  "question": "Which band wrote & recorded 'Louie Louie'?",
  "option1": "The Kinks",
  "option2" : "The Clash",
  "option3" : "The Who",
  "option4" : "The Rolling Stones",
  "answer" : "1"
}, {
  "question": "How many memebers were in The Who?",
  "option1": "Two",
  "option2" : "Five",
  "option3" : "Four",
  "option4" : "Three",
  "answer" : "3"
}, {
  "question": "What year did the Rolling Stones form?",
  "option1": "1959",
  "option2" : "1962",
  "option3" : "1964",
  "option4" : "1961",
  "answer" : "2"
}, {
  "question": "What was Eric Clapton's original band called?",
  "option1": "Faces",
  "option2" : "Small Faces",
  "option3" : "Cream",
  "option4" : "The Guess Who",
  "answer" : "3"
}
]

function renderStartQuiz(){
  return `
    <form>
      <h2 class="question-title"> 
        British Bands of the 1960's
      </h2>

      <button type="submit" id="startButton" class="centerButton">
        Let's Go!
      </button>  
    </form>
  `;
}

var questionCount = questions.length;
var question1 = questions.question;



let currentQuestion = 0;
let correctAmount = 0;

//let correctAnswer = questions[currentQuestion].answer;
function renderQuestion(){
return `
    <form>
      <h2 class="question-title"> 
        ${questions[currentQuestion].question}
      </h2>
      <div>
        <input type="radio" name="option" value="1"> ${questions[currentQuestion].option1}
      </div>
      <div>
        <input type="radio" name="option" value="2"> ${questions[currentQuestion].option2}
      </div>
      <div>
        <input type="radio" name="option" value="3"> ${questions[currentQuestion].option3}
      </div>
      <div>
        <input type="radio" name="option" value="4"> ${questions[currentQuestion].option4}
      </div> 
      
      <button type="submit" id="submitButton">
        Submit
      </button>  
      
      <p>Score: ${correctAmount} </p>
      <p>Question ${currentQuestion + 1} of ${questions.length} 
    </form>
  `;
}

function showCorrect() {
  return `
  <form>
    <h2 class="question-title">
    Great job! Onto the next one...</h2>
    <div>
      <button type="submit" id="nextQuestion">
        Next...
      </button>
     </div> 
  </form>   
     `;
     
}

function showWrong() {
  return `
  <form>
    <h2 class="question-title">
    Looks like you missed that one...</h2>
    <div>
      <button type="submit" id="nextQuestion">
        Next...
      </button>
     </div> 
  </form>   
     `;
     }

function showResults() {
  return `
  <form>
    <h2 class="question-title">
    Here's how you did...</h2>
    <div>
     <p class ="results center">You scored ${correctAmount} out of ${questionCount}!</p>
     </div>
     <button type="submit" id="resetQuiz">
        Start Over!
      </button> 
  </form>   
     `;
     }


function initialize(){
  const quizContainer = document.querySelector( '.quiz-container' );
  quizContainer.innerHTML = renderStartQuiz();

  startHandler();
}

function startHandler(){
  const quizContainer = document.querySelector( '.quiz-container' );
  
  startButton.addEventListener( 'click', function( event ){
    
    if( event.target.id === "startButton" ){
      event.preventDefault();
      quizContainer.innerHTML = renderQuestion();
      selectAnswer();
   
  
    }
    
  });
}


function selectAnswer() {
  
  const quizContainer = document.querySelector( '.quiz-container' );
  let correctAnswer = questions[currentQuestion].answer;
  submitButton.addEventListener( 'click', function( event ) {
    var radioValue = $("input[name='option']:checked").val();
    if(currentQuestion + 1 === questionCount) {
      let finalQuestion = currentQuestion;
      //console.log(finalQuestion);
      if(questions[finalQuestion].answer === radioValue) {
          
          correctAmount++;
      }
      quizContainer.innerHTML = showResults();
    }
    else if (radioValue === correctAnswer) {
      //alert("Correct!");
      quizContainer.innerHTML = showCorrect();
      nextQuestion.addEventListener( 'click', function( event ) {
      event.preventDefault();
      correctAmount++;
      console.log(correctAmount);
      currentQuestion++;
      quizContainer.innerHTML = renderQuestion();
      selectAnswer();
      })
     
    } 
    
    else {
      quizContainer.innerHTML = showWrong();
      nextQuestion.addEventListener( 'click', function( event ) {
      event.preventDefault();
      currentQuestion++;
      quizContainer.innerHTML = renderQuestion();
      selectAnswer();



    })
   }
  
  })

};

function resetQuiz() {
  const resetButton = document.querySelector('#resetQuiz');
  resetButton.addEventListener( 'click', function( event ){
    
    if( event.target.id === "resetButton" ){
      event.preventDefault();
      quizContainer.innerHTML = renderQuestion();
      selectAnswer();
    }
  })
};



   





initialize();