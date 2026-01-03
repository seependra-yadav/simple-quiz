const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false }
    ]
  },
  {
    question: "Who is the father of Computer Science?",
    answers: [
      { text: "Alan Turing", correct: true },
      { text: "Charles Babbage", correct: false },
      { text: "Bill Gates", correct: false },
      { text: "Steve Jobs", correct: false }
    ]
  },
  {
    question: "Which language is used to style web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "JavaScript", correct: false },
      { text: "CSS", correct: true },
      { text: "Python", correct: false }
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "HighText Machine Language", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false },
      { text: "Hyper Tool Multi Language", correct: false }
    ]
  },
  {
    question: "Which data type is NOT primitive in JavaScript?",
    answers: [
      { text: "Number", correct: false },
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Object", correct: true }
    ]
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "static", correct: false }
    ]
  },
  {
    question: "Which method converts JSON into a JavaScript object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.convert()", correct: false },
      { text: "JSON.object()", correct: false }
    ]
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Google", correct: false },
      { text: "Netscape", correct: true },
      { text: "Apple", correct: false }
    ]
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "#", correct: false },
      { text: "<!-- -->", correct: false }
    ]
  },
  {
    question: "Which HTML tag is used to link a JavaScript file?",
    answers: [
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<link>", correct: false }
    ]
  },
  {
    question: "Which CSS property controls text size?",
    answers: [
      { text: "font-size", correct: true },
      { text: "text-style", correct: false },
      { text: "text-size", correct: false },
      { text: "font-weight", correct: false }
    ]
  },
  {
    question: "Which JavaScript method adds an element at the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false }
    ]
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    answers: [
      { text: "==", correct: false },
      { text: "=", correct: false },
      { text: "===", correct: true },
      { text: "!=" , correct: false }
    ]
  },
  {
    question: "Which HTML attribute is used to provide a unique identifier?",
    answers: [
      { text: "class", correct: false },
      { text: "name", correct: false },
      { text: "id", correct: true },
      { text: "key", correct: false }
    ]
  },
  {
    question: "Which function is used to print output in JavaScript?",
    answers: [
      { text: "print()", correct: false },
      { text: "console.log()", correct: true },
      { text: "echo()", correct: false },
      { text: "write()", correct: false }
    ]
  }
];


let questionElement = document.getElementById("question");
let ansBtn = document.querySelector(".ans-container");
let nextBtn = document.querySelector(".next-btn");

let currQuestionidx =0;
let score =0;

function startQuiz(){
    currQuestionidx =0;
    score =0;
    nextBtn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currQuestion = questions[currQuestionidx];
    let questionNo = currQuestionidx + 1;

    questionElement.innerText = questionNo + ". " + currQuestion.question;
// track qustion number---------------------------------------------------------------------
    currQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.textContent = answer.text; 
        button.classList.add("ans-box");

        if(answer.correct){
            button.dataset.correct = "true";
        }

        button.addEventListener("click", selectAns);
        ansBtn.appendChild(button);
    });
}




function resetState(){
        nextBtn.style.display = "none";
        while(ansBtn.firstChild){
            ansBtn.removeChild(ansBtn.firstChild);
        }
}
//fetch ans-------------------------------------------------------------------------------
function selectAns(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");

    }
//ans check------------------------------------------------------------------------------
     Array.from(ansBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}
//score---------------------------------------------------------------------------------------
function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "play Again";
    nextBtn.style.display = "block";
}
//question changed------------------------------------------------------------------------------
 function handleNextBtn(){
    currQuestionidx++;
    if(currQuestionidx < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }

}

nextBtn.addEventListener("click", () => {
    if(currQuestionidx < questions.length){
        handleNextBtn();
    }
    else{
        startQuiz();
    }
})

startQuiz();
