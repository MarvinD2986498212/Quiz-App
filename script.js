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


function init() {
    document.getElementById('question-lenght').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion]; 

    if (currentQuestion >= questions.length)  {
        document.getElementById('Questions').innerHTML = /*HTML*/`
            <div class="fs-1 text-center">Quiz beendet ! </div>
            <img src="">
        `; 
    }
    else {
    document.getElementById('current-question').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(answer) {
    let answerNumber = answer.slice(-1);
    let rightAnswerNumber = questions[currentQuestion]['right_answer'];
    
    let falseCard = document.getElementById(answer)
    let rightCard = document.getElementById(`answer_${rightAnswerNumber}`)


    if(answerNumber == rightAnswerNumber){
        rightCard.parentNode.classList.add('right-answer');
    }
    else {
        rightCard.parentNode.classList.add('right-answer');
        falseCard.parentNode.classList.add('false-answer');
    }
    document.getElementById('next-button').disabled = false ;
}

function resetanswer(){
    document.getElementById('answer_1').parentNode.classList.remove('right-answer');
    document.getElementById('answer_1').parentNode.classList.remove('false-answer');
    document.getElementById('answer_2').parentNode.classList.remove('right-answer');
    document.getElementById('answer_2').parentNode.classList.remove('false-answer');
    document.getElementById('answer_3').parentNode.classList.remove('right-answer');
    document.getElementById('answer_3').parentNode.classList.remove('false-answer');
    document.getElementById('answer_4').parentNode.classList.remove('right-answer');
    document.getElementById('answer_4').parentNode.classList.remove('false-answer');
}

function nextquestion() {
    currentQuestion ++;
    document.getElementById('next-button').disabled = true ;
    showQuestion(); 
    resetanswer();
}