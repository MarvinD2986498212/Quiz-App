let questions = [
    {
        "question": "Wer hat HTML erfunden ?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,
    },
    {
        "question": "Wie heißt die Schicht der Atmosphäre, die der Erde am nächsten ist?",
        "answer_1": "Stratosphäre",
        "answer_2": "Mesosphäre",
        "answer_3": "Troposphäre",
        "answer_4": "Thermosphäre",
        "right_answer": 3,
    },
    {
        "question": "Wie hoch ist der Eiffelturm?",
        "answer_1": "150m",
        "answer_2": "176m",
        "answer_3": "220m",
        "answer_4": "300m",
        "right_answer": 4,
    },
    {
        "question": "In welchem Jahr wurde Michael Jackson geboren?",
        "answer_1": "1958",
        "answer_2": "1959",
        "answer_3": "1965",
        "answer_4": "1934",
        "right_answer": 1,
    },
]

let currentQuestion = 0 ; 
let NumberCorrectAnswers = 0; 
let audioSucces = new Audio('audio/succes.mp3') ;
let audiFail = new Audio('audio/wrong.mp3') ;


function init() {
    document.getElementById('question-lenght').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    if (gameIsOver())  {
        shwoendscreen();
    }
    else {
        showNextQuestion(question);
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function answer(answer) {
    let answerNumber = answer.slice(-1);
    let rightAnswerNumber = questions[currentQuestion]['right_answer'];
    let falseCard = document.getElementById(answer)
    let rightCard = document.getElementById(`answer_${rightAnswerNumber}`)

    if(checkRightAnswer(answerNumber,rightAnswerNumber)){
        rightAnswer(rightCard)
    }
    else {
        falseAnswer(rightCard,falseCard);
    }
    document.getElementById('next-button').disabled = false ;
}

function checkRightAnswer(answerNumber,rightAnswerNumber) {
   return answerNumber == rightAnswerNumber
}

function rightAnswer(rightCard) {
    rightCard.parentNode.classList.add('right-answer');
        audioSucces.play();
        NumberCorrectAnswers++;
}

function falseAnswer(rightCard,falseCard) {
    rightCard.parentNode.classList.add('right-answer');
    audiFail.play();
    falseCard.parentNode.classList.add('false-answer');
}

function resetAnswerColor(){
    document.getElementById('answer_1').parentNode.classList.remove('right-answer');
    document.getElementById('answer_1').parentNode.classList.remove('false-answer');
    document.getElementById('answer_2').parentNode.classList.remove('right-answer');
    document.getElementById('answer_2').parentNode.classList.remove('false-answer');
    document.getElementById('answer_3').parentNode.classList.remove('right-answer');
    document.getElementById('answer_3').parentNode.classList.remove('false-answer');
    document.getElementById('answer_4').parentNode.classList.remove('right-answer');
    document.getElementById('answer_4').parentNode.classList.remove('false-answer');
}

function nextQuestion() {
    currentQuestion ++;
    document.getElementById('next-button').disabled = true ;
    showQuestion(); 
    resetAnswerColor();
}

function ResetQuestions() {
    currentQuestion = 0;
    NumberCorrectAnswers = 0;
    init();
    document.getElementById('Questions').classList.remove('d-none');
    document.getElementById('center').classList.add('d-none');
    document.getElementById('rest-button').classList.add('d-none');
    document.getElementById('next-button').classList.remove('d-none');
    document.getElementById('question-Counter').classList.remove('d-none');
    document.getElementById('question-footer').classList.remove('middle');
}

function shwoendscreen() {
    document.getElementById('rest-button').classList.remove('d-none');
    document.getElementById('next-button').classList.add('d-none');
    document.getElementById('question-Counter').classList.add('d-none');
    document.getElementById('question-footer').classList.add('middle');
    document.getElementById('Questions').classList.add('d-none');
    document.getElementById('center').classList.remove('d-none');
    document.getElementById('nuber-current-answer').innerHTML= `${NumberCorrectAnswers}` ;
    document.getElementById('questions-lenght').innerHTML= `${questions.length}` ;
}

function showNextQuestion(question) {
    let percent = (currentQuestion + 1) / questions.length  ;
    percent = percent * 100; // wenn krumme Zahlen das Math.round(percent)
    document.getElementById('progress-bar').innerHTML = `${percent} % `;
    document.getElementById('progress-bar').style = `width: ${percent}%;`  ;
    document.getElementById('current-question').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}